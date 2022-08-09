import { LandingPageButton } from "../elements/svg/landing-page-button/landing-page-button";
import './landing-page.css';

export const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"file"}
          text="Resume"
        />
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"book"}
          text="Book"
        />
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"wrench"}
          text="Projects"
        />
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"user"}
          text="About Me"
        />
    </div>
  );
};
