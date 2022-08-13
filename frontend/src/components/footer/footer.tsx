import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { GlobalContext } from "../common";

export const Footer = () => {
  const { currentPageColorway, preferredTheme } = React.useContext(GlobalContext)!;

  // const lightOrDarkMode = preferredTheme[0];
  // const setPrimaryColorway = currentPageColorway["primary"][1];
  const currPrimaryColorway = currentPageColorway["primary"][0];

  // const setSecondaryColorway = currentPageColorway["secondary"][1];
  const currSecondaryColorway = currentPageColorway["secondary"][0];
  
  React.useEffect(() => {
    // if(lightOrDarkMode === "white") {
    //   setPrimaryColorway("white");
    //   setSecondaryColorway("black");
    // } else {
    //   setPrimaryColorway("black");
    //   setSecondaryColorway("white");
    // }
  }, [preferredTheme]);

  return (
    <div id="Footer">
      <footer className="container center margin-top" style={{
        backgroundColor: currPrimaryColorway
      }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1em",
            paddingTop: "1em",
          }}
        >
          <div
            onClick={() => {
              window.location.href =
                "https://github.com/Dgarc359/david-garcia-world";
            }}
            style={{
              cursor: "pointer",
              padding: "0em 1em",
            }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                fontSize: "2em",
              }}
              color={currSecondaryColorway}
            />
          </div>{" "}
          <div
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/david-garcia-563543158/";
            }}
            style={{
              cursor: "pointer",
              padding: "0em 1em",
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: "2em",
              }}
              color={currSecondaryColorway}
            />
          </div>
        </div>
      </footer>
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
      ></a>
      <br />
      This work is licensed under a{" "}
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
        Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
        International License
      </a>
    </div>
  );
};
