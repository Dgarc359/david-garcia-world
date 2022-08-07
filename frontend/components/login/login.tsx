import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import React from "react";
import * as dotenv from "dotenv";

// dotenv.config();

export const Login = () => {
  const [clientId, setClientId] = React.useState(process.env.GOOGLE_CLIENT_ID!);

  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("Success -- ", response.code);
  };

  const onFailure = (response: unknown) => {
    console.log("Failure -- ", response);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};
