import { GoogleLogout } from "react-google-login";
import React from "react";
import { GlobalContext } from "../../common";

export const Logout = () => {
  //@ts-ignore
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


  const {loggedIn} = React.useContext(GlobalContext)!;
  const setIsLoggedIn = loggedIn[1];

  const onSuccess = () => {
    console.log("Log out successful");
    setIsLoggedIn(false);
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};
