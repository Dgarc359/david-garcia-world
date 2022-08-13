import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import React from "react";
// import { useGlobalContext } from "../../App";
// import * as dotenv from "dotenv";

// dotenv.config();

export const Login = () => {
  // const [clientId, setClientId] = React.useState(process.env.GOOGLE_CLIENT_ID!);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // const globalContext = React.useContext(useGlobalContext);

  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    // globalContext.loggedIn = false;
    // setIsLoggedIn(true);
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
