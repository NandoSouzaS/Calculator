import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./main/Calculator";
ReactDOM.render(
  <div>
    <h1>Calculator</h1>
    <Calculator />
    <footer>
      Developed with <div className="heart">&#10084;</div> by:{" "}
      <span className="devName">Fernando Souza</span>
    </footer>
  </div>,
  document.getElementById("root")
);
