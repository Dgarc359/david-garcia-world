import React from "react";
import "./landing-page-button.css";
import { faFile, faBook, faWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = {
  file: faFile,
  book: faBook,
  wrench: faWrench,
  user: faUser,
};


type Icons = "file" | "book" | "wrench" | "user";
type strokes =  "white" | "black" | "seagreen" | "dodgerblue" | "indianred" | "violet";

interface LandingPageButtonProps {
  onHoverStroke: strokes;
  icon: Icons;
  text: string;
  link: string;
}

export const LandingPageButton = (props: LandingPageButtonProps) => {
  const { onHoverStroke, icon, text, link } = props;
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [stroke, setStroke] = prefersDark ? React.useState<strokes>("white") : React.useState<strokes>("black");
  const [radius, setRadius] = React.useState(43);
  const [iconSize, setIconSize] = React.useState(2);
  
  // TODO: bring this up to context object

  const iconObject = Icons[icon];

  const onMouseEnter = () => {
    setStroke(onHoverStroke);
    setRadius((state) => state * 1.05);
  };

  const onMouseLeave = () => {
    prefersDark 
    ? setStroke("white")
    : setStroke("black");
    setRadius(43);
  };

  const onClick = () => {
    window.location.href = link;
  };

  return (
    <div
      style={{
        width: `5em`,
        height: `5em`,
        cursor: "pointer",
        position: "relative",
        // padding: "0em 1em"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
        }}
      >
        <svg
          // viewBox="0 0 10 10"
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "block",
            top: 0,
          }}
        >
          <circle
            strokeWidth={6}
            stroke={stroke}
            fill={"none"}
            cx="50"
            cy="50"
            r={radius}
          />
        </svg>
      </div>
      <div
        style={{
          position: "relative",
          top: "1.5em",
        }}
      >
        <FontAwesomeIcon
          icon={iconObject}
          className={`medium`}
          // style={{
          //   fontSize: `${iconSize}em`,
          // }}

          style={{
            fontSize: "2em"
          }}
          color={stroke}
        />
      </div>
      <h5
        style={{
          paddingTop: "1em",
          color: stroke,
        }}
      >
        {text}
      </h5>
    </div>
  );
};
