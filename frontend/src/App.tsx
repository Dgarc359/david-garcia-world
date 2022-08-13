import "./App.css";
import { RouterComponent } from "./components/router/router";
import React from "react";
import { GlobalContextProvider, strokes } from "./components/common";

function App() {
  const [color, setColor] = React.useState<strokes>("white");
  
  return (
    <div className="full-height">
      {/* <GlobalContextProvider color={color}> */}
        <RouterComponent />
      {/* </GlobalContextProvider> */}
    </div>
  );
}

export default App;
