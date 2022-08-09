import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Navbar = () => {
  return (
    <div
      id="navbar"
      style={{
        padding: "1em 0em",
        display: "flex"
      }}
    >
      <div style={{
        alignContent: "flex-start",
        display: "flex",
        userSelect: "none"
      }}>
        <FontAwesomeIcon
          icon={faGlobe}
          style={{
            fontSize: "3em",
            padding: "0em 0.5em"
          }}
        />
        <h6 style={{
          fontWeight: "bold"
        }}>David Garcia World</h6>
      </div>
    </div>
  );
};
