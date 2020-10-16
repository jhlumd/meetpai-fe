import React from "react";
import "./App.css";

export default function App(props) {
  const { demoData } = props;

  return (
    <div className="app-container">
      <p className="blue">{demoData[0].name}</p>
      <p>{demoData[1].name}</p>
    </div>
  );
}
