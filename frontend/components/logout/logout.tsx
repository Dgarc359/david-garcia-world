import { GoogleLogout } from "react-google-login";
import React from "react";

export const Logout = () => {
  const [clientId, setClientId] = React.useState(process.env.GOOGLE_CLIENT_ID!);

  const onSuccess = () => {
    console.log("Log out successful");
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
