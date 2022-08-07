import "./App.css";
import { RouterComponent } from "./components/router/router";
import React from "react";

const globalContextVals = {
  loggedIn: false,
  themes: {
    light: {},
    dark: {},
  }
}
export const GlobalContext = React.createContext(globalContextVals);

function App() {
  return (
    <>
      <GlobalContext.Provider
        value={globalContextVals}
      >
        <RouterComponent />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
