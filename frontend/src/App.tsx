import "./App.css";
import { RouterComponent } from "./components/router/router";
import React from "react";
import { GlobalContextProvider } from "./components/common";

function App() {
  // const [color, setColor] = React.useState<strokes>("white");
  
  return (
    <div className="full-height" id="App">
      <GlobalContextProvider loggedInProp={false}>
        <RouterComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
