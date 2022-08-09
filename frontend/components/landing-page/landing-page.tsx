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
          link="/resume"
        />
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"book"}
          text="Book"
          link="/book"
        />
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"wrench"}
          text="Projects"
          link="/projects"
        />
        <LandingPageButton
          onHoverStroke={"seagreen"}
          icon={"user"}
          text="About Me"
          link="/about-me"
        />
    </div>
  );
};
