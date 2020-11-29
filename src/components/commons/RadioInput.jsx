import React from "react";
import "./RadioInput.css";

const RadioInput = (props) => {
  const { name, value, label: title, onChange } = props;

  return (
    <label className="radio-input">
      <input type="radio" name={name} value={value} onChange={onChange} />
      <span className="radio-input-mask">{title}</span>
    </label>
  );
};

export default RadioInput;
