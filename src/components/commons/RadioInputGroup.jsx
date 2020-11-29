import React from "react";
import RadioInput from "./RadioInput";
import "./RadioInputGroup.css";

const RadioInputGroup = (props) => {
  const { radiosList, title, name, onChange } = props;

  const renderRadioInputs = () => {
    return radiosList.map((radio) => (
      <div key={radio.value}>
        <RadioInput
          name={name}
          value={radio.value}
          label={radio.label}
          onChange={onChange}
        />
      </div>
    ));
  };

  return (
    <div className="radio-input-group">
      <span className="radio-input-group-title">{title}</span>
      <div className="radio-buttons">{renderRadioInputs()}</div>
    </div>
  );
};

export default RadioInputGroup;
