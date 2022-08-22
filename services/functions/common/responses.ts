export type CustomResponse = {
  statusCode: number;
  headers: {
    "Content-Type": "text/plain" | "application/json";
  };
  body: string;
};

export type Res400 = CustomResponse & {
  statusCode: 400;
};
