import React, { useState } from "react";
import Input from "../../commons/Input";
import RadioInputGroup from "../../commons/RadioInputGroup";
import "./ResizeImageForm.css";

const ResizeImageForm = () => {
  const [input, setInput] = useState({
    image: null,
    width: "",
    height: "",
    formats: "",
  });

  // Update input fields as user edits the form
  const updateInputData = (e) => {
    const inputField = e.currentTarget;
    const newInput = { ...input };
    newInput[inputField.name] =
      inputField.name === "image" ? inputField.files[0] : inputField.value;
    setInput(newInput);

    console.log(newInput);
  };

  // Handle the form data when user click submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // getResizedImage(input);
  };

  const renderRemainingInputFields = () => {
    const radiosList = [
      { value: "jpeg", label: "JPEG" },
      { value: "png", label: "PNG" },
      { value: "webp", label: "WEBP" },
    ];

    return (
      <div className="resize-image-form-right-side">
        <div className="resize-image-form-row">
          <Input
            type="number"
            label="new width"
            name="width"
            value={input.width}
            onChange={updateInputData}
          />
        </div>
        <div className="resize-image-form-row">
          <Input
            type="number"
            label="new height"
            name="height"
            value={input.height}
            onChange={updateInputData}
          />
        </div>
        <div className="resize-image-form-row">
          <RadioInputGroup
            title="select new image type"
            name="formats"
            radiosList={radiosList}
            onChange={updateInputData}
          />
        </div>
      </div>
    );
  };

  return (
    <form className="resize-image-form" onSubmit={handleSubmit}>
      <div className="resize-image-form-left-side"></div>
      {renderRemainingInputFields()}
    </form>
  );
};

export default ResizeImageForm;