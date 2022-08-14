import { ReactStaticSite, use } from "@serverless-stack/resources";
import { RemovalPolicy } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { ApiStack } from "./ApiStack";

export const FrontendStack = ({ stack, app }: any) => {
  // const { api } = use(ApiStack);

  const site = new ReactStaticSite(stack, "ReactSite", {
    path: "frontend",
    customDomain: {
      domainName: "davidgarcia.world",
      domainAlias: "www.davidgarcia.world",
      hostedZone: "davidgarcia.world",
    },
    cdk: {
      bucket: Bucket.fromBucketName(
        stack,
        "frontend-bucket",
        "davidgarcia.world"
      ),
    },
    buildOutput: "dist",
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
};
