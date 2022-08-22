import { StackContext, Api, Function } from "@serverless-stack/resources";
import { aws_iam } from "aws-cdk-lib";

export function ApiStack({ stack, app }: StackContext) {
  const getBenchPress = new Function(
    stack,
    app.logicalPrefixedName("get-bench-press"),
    {
      handler: "functions/notion/get-bench-press.handler",
    }
  );

  const notionSsmIamPolicyStatement = new aws_iam.PolicyStatement({
    actions: ["ssm:GetParameters"],
    resources: ["arn:aws:ssm:::parameter/NOTION*"],
  });

  const notionSsmIamPolicy = new aws_iam.Policy(
    stack,
    app.logicalPrefixedName("get-notion-params"),
    {
      statements: [notionSsmIamPolicyStatement],
    }
  );

  const notionLambdas = [getBenchPress];

  notionLambdas.forEach((lambda) => {
    lambda.role?.attachInlinePolicy(notionSsmIamPolicy);
  });

  const api = new Api(stack, "api", {
    routes: {
      "GET /bench-press": getBenchPress,
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return { api };
}
