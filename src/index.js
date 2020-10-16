import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { demoData } from "./demo/demoData";

ReactDOM.render(
  <React.StrictMode>
    <App demoData={demoData} />
  </React.StrictMode>,
  document.getElementById("root")
);
