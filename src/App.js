import React from "react";
import "./App.css";

export default function App(props) {
  const { demoData } = props;

  return (
    <div className="App">
      <header className="App-header">
        <p>{demoData[0].name}</p>
        <p>{demoData[1].name}</p>
      </header>
    </div>
  );
}
