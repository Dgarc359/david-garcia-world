import { GoogleLogin } from "react-google-login";
import React from "react";
import * as dotenv from "dotenv";

dotenv.config();

export const Login = () => {
  const [clientId, setClientId] = React.useState(process.env.GOOGLE_CLIENT_ID!);

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};
