import { LandingPageButton } from "./svg";
import "./landing-page.css";
import React from "react";
import { GlobalContext } from "../../common";
import { useColorway } from "../../hooks";

export const LandingPage = () => {

  const { preferredTheme } = React.useContext(GlobalContext)!;

  const lightOrDarkMode = preferredTheme[0];

   if(lightOrDarkMode === "white") {
      useColorway("white", "black");
    } else {
      useColorway("black", "white");
    }

  return (
    <div
      style={{
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      id="LandingPageView"
    >
      <LandingPageButton
        onHoverStroke={"seagreen"}
        icon={"file"}
        text="Resume"
        link="/resume"
      />
      <LandingPageButton
        onHoverStroke={"dodgerblue"}
        icon={"book"}
        text="Book"
        link="/book"
      />
      <LandingPageButton
        onHoverStroke={"violet"}
        icon={"wrench"}
        text="Projects"
        link="/projects"
      />
      <LandingPageButton
        onHoverStroke={"indianred"}
        icon={"user"}
        text="About Me"
        link="/about-me"
      />
    </div>
  );
};
