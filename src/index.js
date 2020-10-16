import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { demoData } from "./_demoData";

ReactDOM.render(
  <React.StrictMode>
    <App demoData={demoData} />
  </React.StrictMode>,
  document.getElementById("root")
);
