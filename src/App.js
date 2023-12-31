import React from "react";
import "./App.css";
import EightBall from "./EightBall";
import Complex from "./Complex";

function App() {
  return (
    <div className="App">
      <EightBall text="PUSH ME" maxNum={100} />
    </div>
  );
}

export default App;
