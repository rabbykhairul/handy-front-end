import React from "react";
import "./ToDoFormButton.css";

const ToDoFormButton = (props) => {
  const { label, styleType = "normal", disabled = false } = props;

  const className =
    styleType.toLowerCase() === "fancy"
      ? "to-do-form-button btn-fancy"
      : "to-do-form-button btn-normal";

  return (
    <button className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default ToDoFormButton;
