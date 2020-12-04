import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type, label, name, value, placeholder = "", onChange } = props;

  return (
    <label className="regular-input">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
