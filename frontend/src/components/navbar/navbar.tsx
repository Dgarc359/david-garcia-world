import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { gapi } from "gapi-script";
import { Logout } from "../logout/logout";
import { Login } from "../login/login";
import "./navbar.css";
import { GlobalContext } from "../common";

// @ts-ignore
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // TODO: this will be migrated to the backend soon anyways
type strokes = "white" | "black";

export const Navbar = () => {
  // TODO: migrate this logic to global state
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [stroke, setStroke] = prefersDark
    ? React.useState<strokes>("white")
    : React.useState<strokes>("black");
  const {loggedIn} = React.useContext(GlobalContext)!;
  const isLoggedIn = loggedIn[0];

  React.useEffect(() => {
    console.log(isLoggedIn)
  }, []);

  React.useEffect(() => {
    // TODO: This will be a call to the backend, the clientID needs to remain a secret, so we init 
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
        // margin: "1em 0em",
        flex: "0 1 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          alignContent: "flex-start",
          display: "flex",
          userSelect: "none",
          cursor: "pointer",
        }}
        // className="globe"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          className="globe"
          style={{
            fontSize: "3em",
            padding: "0em 0.5em",
          }}
          color={stroke}
        />
        <h6
          style={{
            fontWeight: "bold",
            color: stroke,
          }}
        >
          David Garcia World
        </h6>
      </div>

      <div
        style={{
          padding: "0em 1em",
        }}
      >
        {isLoggedIn ? <Logout/> : <Login/>}
      </div>
    </div>
  );
};
