import * as cdk from "aws-cdk-lib";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { BucketWebsiteTarget } from "aws-cdk-lib/aws-route53-targets";
import { ObjectOwnership } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import path = require("path");
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface BackendStackProps extends cdk.StackProps {
  // stackName: string;
  // env?: string;
  stage: string;
  domainName: string;
  siteSubDomain: string;
}

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BackendStackProps) {
    super(scope, id, props);

    const zone = cdk.aws_route53.HostedZone.fromLookup(this, 'Zone', { domainName: props.domainName });
    const siteDomain = props.siteSubDomain + '.' + props.domainName;
    const cloudfrontOAI = new cdk.aws_cloudfront.OriginAccessIdentity(this, 'cloudfront-OAI', {
      comment: `OAI for ${props.stackName}`
    });

    new cdk.CfnOutput(this, 'Site', { value: 'https://' + siteDomain });

    // Content bucket
    const siteBucket = new cdk.aws_s3.Bucket(this, 'SiteBucket', {
      bucketName: siteDomain,
      publicReadAccess: false,
      blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
      autoDeleteObjects: true, // NOT recommended for production code
    });

    siteBucket.grantRead(cloudfrontOAI)

    // Grant access to cloudfront
    siteBucket.addToResourcePolicy(new cdk.aws_iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [siteBucket.arnForObjects('*')],
      principals: [new cdk.aws_iam.CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
    }));
    new cdk.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });

    // TLS certificate
    const certificate = new cdk.aws_certificatemanager.Certificate(this, 'SiteCertificate', {
      domainName: siteDomain,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
    });

    new cdk.CfnOutput(this, 'Certificate', { value: certificate.certificateArn });
    
    // CloudFront distribution
    const distribution = new cdk.aws_cloudfront.Distribution(this, 'SiteDistribution', {
      certificate: certificate,
      defaultRootObject: "index.html",
      domainNames: [siteDomain],
      minimumProtocolVersion: cdk.aws_cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses:[
        {
          httpStatus: 403,
          responseHttpStatus: 403,
          responsePagePath: '/error.html',
          ttl: cdk.Duration.minutes(30),
        }
      ],
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(siteBucket, {originAccessIdentity: cloudfrontOAI}),
        compress: true,
        allowedMethods: cdk.aws_cloudfront.AllowedMethods.ALLOW_ALL,
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    })

    new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });

    // Route53 alias record for the CloudFront distribution
    new cdk.aws_route53.ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(distribution)),
      zone
    });

    // Deploy site contents to S3 bucket
    new cdk.aws_s3_deployment.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [cdk.aws_s3_deployment.Source.asset(path.join(__dirname, '../../frontend/out'))],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}
