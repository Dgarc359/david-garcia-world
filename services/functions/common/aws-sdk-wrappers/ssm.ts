import AWS from "aws-sdk";

interface iSSM {
  getParameter: () => unknown;
  getParameters: (params: string[]) => { [key: string]: string } | {};
}

export class SSMWrapper implements iSSM {
  ssmClient: AWS.SSM;
  constructor(ssmClient: AWS.SSM) {
    this.ssmClient = ssmClient;
  }

  async getParameter() {}

  async getParameters(params: string[]) {
    params.sort();
    const res: { [key: string]: string | undefined } = {};

    const getParams = await this.ssmClient
      .getParameters(
        {
          Names: params,
          WithDecryption: true,
        },
        (err, data) => {
          if (err) throw err;
          return data;
        }
      )
      .promise();

    params.forEach((val, i) => {
      if (!getParams.Parameters || !getParams.Parameters[i]) return;
      res[val] = getParams.Parameters[i].Value;
    });
    return res;
  }
}
