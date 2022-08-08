type strokes = "seagreen";

interface LandingPageButtonProps {
  stroke: strokes;
}

export const LandingPageButton = (props: LandingPageButtonProps) => {
  const { stroke } = props;

  return (
    <>
      <svg viewBox="0 0 1 1">
        <circle r={10} strokeWidth={2} stroke={stroke} cx={10} cy={10}></circle>
      </svg>
    </>
  );
};
