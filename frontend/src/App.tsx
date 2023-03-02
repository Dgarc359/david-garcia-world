// import "./App.css";
import { RouterComponent } from "./components/router/router";
import React from "react";
import { GlobalContextProvider } from "./common";

function App() {
  return (
    <div className="w-full h-full" id="App">
      <GlobalContextProvider isLoggedIn={false}>
        <RouterComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
