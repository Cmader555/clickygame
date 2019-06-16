import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      <h1>Clicky Game!</h1>
      <h4>Click the same character twice and you lose!</h4>
    </div>
  );
}

export default Jumbotron;
