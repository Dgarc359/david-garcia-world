import { LandingPageButton } from "../elements/svg/landing-page-button/landing-page-button";
import './landing-page.css';

export const LandingPage = () => {
  return (
    <div
      style={{
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
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
