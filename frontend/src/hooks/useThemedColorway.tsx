import { GlobalContext, strokes, themes } from "../common";
import { useColorway } from "./useColorway";
import React from 'react';

type ModeProps = {
  textColor: strokes
}

interface ThemedColorwayProps {
  lightMode: ModeProps,
  darkMode: ModeProps,
}

export const useThemedColorway = (props: ThemedColorwayProps) => {
  const {prefersDark} = React.useContext(GlobalContext)!;

  return prefersDark
    ? [props.darkMode.textColor]
    : [props.lightMode.textColor]
}