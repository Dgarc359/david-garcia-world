import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { gapi } from "gapi-script";
import { GlobalContext } from "../../App";
import { Logout } from "../logout/logout";
import { Login } from "../login/login";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const Navbar = () => {
  const globalContext = React.useContext(GlobalContext);

  React.useEffect(() => {
    console.log("isLoggedIn", globalContext.loggedIn);
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  return (
    <div
      id="navbar"
      style={{
        padding: "1em 0em",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          alignContent: "flex-start",
          display: "flex",
          userSelect: "none",
        }}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          style={{
            fontSize: "3em",
            padding: "0em 0.5em",
          }}
        />
        <h6
          style={{
            fontWeight: "bold",
          }}
        >
          David Garcia World
        </h6>
      </div>

      <div
        style={{
          padding: "0em 1em"
        }}
      >{globalContext.loggedIn ? <Logout /> : <Login />}</div>
    </div>
  );
};
