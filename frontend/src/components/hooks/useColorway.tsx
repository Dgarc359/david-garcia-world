import { strokes } from "../common";
import React from "react";
import { GlobalContext } from "../common";

export const useColorway = (colorway: strokes, secondaryColorway: strokes) => {
  const { currentPageColorway, preferredTheme } = React.useContext(GlobalContext)!;

  const setPrimaryColorway = currentPageColorway["primary"][1];

  const setSecondaryColorway = currentPageColorway["secondary"][1];
  
  React.useEffect(() => {
    setPrimaryColorway(colorway);
    setSecondaryColorway(secondaryColorway);

  }, [preferredTheme]);
}