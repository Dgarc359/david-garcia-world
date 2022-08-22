import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Res400, SSMWrapper } from "functions/common";
import AWS from "aws-sdk";

const ssmClient = new AWS.SSM();
const SSM = new SSMWrapper(ssmClient);

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const response: Res400 = {
    statusCode: 400,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "invalid request",
  };

  if (!event.body) return response;

  const { beginDate, endDate } = JSON.parse(event.body);
  if (!beginDate || !endDate) return response;

  const { NOTION_GYM_INTEGRATION_TOKEN } = await SSM.getParameters([
    "NOTION_GYM_INTEGRATION_TOKEN",
  ]);

  return response;
};
