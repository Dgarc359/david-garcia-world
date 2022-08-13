import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import React from "react";
import { GlobalContext } from "../common";

export const Login = () => {
  //@ts-ignore
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  
  const {loggedIn} = React.useContext(GlobalContext)!;
  const setIsLoggedIn = loggedIn[1];

  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    setIsLoggedIn(true);
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
