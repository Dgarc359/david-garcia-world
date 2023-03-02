import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="w-full h-full">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);
