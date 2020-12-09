import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import "./FormButton.css";

const FormButton = (props) => {
  const { label, submitStatus = false, submitMessage } = props;

  if (!submitStatus) return <button className="form-button">{label}</button>;

  // if the user has submitted the form show animation while the form is being processed
  return (
    <div className="form-button form-button-submit-animation">
      <FontAwesomeIcon icon={faYinYang} spin />
      {` `} {submitMessage}
    </div>
  );
};

export default FormButton;
