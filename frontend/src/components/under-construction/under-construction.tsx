import { strokes } from "../common";
import { useColorway } from "../hooks";

export const UnderConstruction = (colorway: {primary: strokes}) => {
  useColorway(colorway.primary, "white");

  return (
    <div
      style={{
        alignItems: "center",
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      <h6
        style={{
          fontSize: "2em",
        }}
      >
        Page Under Construction 🏗
      </h6>
    </div>
  );
};
