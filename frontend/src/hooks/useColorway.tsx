import { strokes, GlobalContext } from "../common";
import React from "react";

export const useColorway = (colorway: strokes, secondaryColorway: strokes) => {
  const { currentPageColorway, preferredTheme } = React.useContext(GlobalContext)!;

  const setPrimaryColorway = currentPageColorway["primary"][1];

  const setSecondaryColorway = currentPageColorway["secondary"][1];
  
  React.useEffect(() => {
    setPrimaryColorway(colorway);
    setSecondaryColorway(secondaryColorway);
  }, [preferredTheme, currentPageColorway]);

  return [currentPageColorway["primary"][0], currentPageColorway["secondary"][0]];
}