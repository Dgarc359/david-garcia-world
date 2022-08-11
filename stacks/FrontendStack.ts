import { ReactStaticSite, use } from "@serverless-stack/resources";
import { RemovalPolicy } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { ApiStack } from "./MyStack";

export const FrontendStack = ({ stack, app }) => {
  const { api } = use(ApiStack);

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
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
};
