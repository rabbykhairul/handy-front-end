import React from "react";
import "./FormButton.css";

const FormButton = (props) => {
  const { label } = props;

  return <button className="form-button">{label}</button>;
};

export default FormButton;
