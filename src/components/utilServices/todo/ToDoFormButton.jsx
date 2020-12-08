import React from "react";
import "./ToDoFormButton.css";

const ToDoFormButton = (props) => {
  const { label, styleType = "normal" } = props;

  const className =
    styleType.toLowerCase() === "fancy"
      ? "to-do-form-button btn-fancy"
      : "to-do-form-button btn-normal";

  return <button className={className}>{label}</button>;
};

export default ToDoFormButton;
