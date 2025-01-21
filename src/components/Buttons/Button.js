import "../../index.css";
import "./Button.css";
import React from "react";

function Button({ handleAddTask }) {
  return (
    <button onClick={handleAddTask} className="add-btn">
      ADD
    </button>
  );
}

export default Button;
