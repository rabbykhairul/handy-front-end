import React from "react";
import "./ToDoFormButton.css";

const ToDoFormButton = (props) => {
  const {
    type = "button",
    label,
    styleType = "normal",
    disabled = false,
    onClick,
  } = props;

  const className =
    styleType.toLowerCase() === "fancy"
      ? "to-do-form-button btn-fancy"
      : "to-do-form-button btn-normal";

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ToDoFormButton;
