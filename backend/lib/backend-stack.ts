import * as cdk from 'aws-cdk-lib';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { BucketWebsiteTarget } from 'aws-cdk-lib/aws-route53-targets';
import { ObjectOwnership } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface BackendStackProps extends cdk.StackProps {
  // stackName: string;
  // env?: string;
  stage: string;
}

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: BackendStackProps) {
    super(scope, id, props);

    const {
      stage = 'dev',
    } = props ?? {};
    const domainName = 'nameofthemist.com';
    const subdomainName = "portfolio";

    const prodNonprodDeletionPolicy = stage === 'prod'
      ? cdk.RemovalPolicy.RETAIN
      : cdk.RemovalPolicy.DESTROY;


    const staticSiteBucket = new cdk.aws_s3.Bucket(this, `${props?.stackName}-static-site-bucket`, {
      // bucketName: [recordName, subdomainName, domainName].join('.'),
      bucketName: [subdomainName, domainName].join('.'),
      // autoDeleteObjects: prodNonprodDeletionPolicy,
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
      blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ACLS,
      accessControl: cdk.aws_s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: prodNonprodDeletionPolicy,
      autoDeleteObjects: stage === 'prod' 
        ? true 
        : false,
    });

    const staticSiteDeploymentBucket = new cdk.aws_s3_deployment.BucketDeployment(this, `${props?.stackName}-static-site-deployment-bucket`, {
      sources: [cdk.aws_s3_deployment.Source.asset('../frontend/out')],
      destinationBucket: staticSiteBucket,
    })

    const zone = HostedZone.fromLookup(this, 'Zone', { domainName: domainName
    });

    // const certificate = new cdk.aws_certificatemanager.Certificate(this, 'SiteCertificate', {
    //   domainName: domainName,
    //   validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
    //   subjectAlternativeNames: [`${subdomainName}.${domainName}`],
    // });

    const ARecord = new cdk.aws_route53.ARecord(
      this,
      `${props?.stackName}-site-alias-record`,
      {
        zone: zone,
        target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.BucketWebsiteTarget(staticSiteBucket)),
        recordName: `${subdomainName}.${domainName}`,
      }
    )

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'BackendQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
