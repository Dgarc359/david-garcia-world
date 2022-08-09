import React from "react";
type strokes = "black" | "seagreen";

interface LandingPageButtonProps {
  onHoverStroke: strokes;
}

export const LandingPageButton = (props: LandingPageButtonProps) => {
  const [stroke, setStroke] = React.useState<strokes>("black");
  const [radius, setRadius] = React.useState(43);
  const { onHoverStroke } = props;

  const onMouseEnter = () => {
    setStroke(onHoverStroke);
    setRadius(state => state * 1.1);
  };

  const onMouseLeave = () => {
    setStroke("black");
    setRadius(43);
  }

  return (
    <div
      style={{
        width: `5em`,
        height: `5em`,
        cursor: "pointer"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg
        // viewBox="0 0 10 10"
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          strokeWidth={6}
          stroke={stroke}
          fill={"none"}
          cx="50"
          cy="50"
          r={radius}
        ></circle>
      </svg>
    </div>
  );
};
