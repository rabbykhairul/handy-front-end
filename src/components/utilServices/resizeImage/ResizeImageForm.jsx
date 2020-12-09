import React, { useState } from "react";
import { getResizedImage } from "../../../services/imageService";
import Input from "../../commons/Input";
import FileInput from "../../commons/FileInput";
import RadioInputGroup from "../../commons/RadioInputGroup";
import FormButton from "../../commons/FormButton";
import "./ResizeImageForm.css";

const ResizeImageForm = () => {
  const [input, setInput] = useState({
    image: null,
    width: "",
    height: "",
    format: "",
  });

  const [submitStatus, setSubmitStatus] = useState(false);

  // Update input fields as user edits the form
  const updateInputData = (e) => {
    const inputField = e.currentTarget;
    const newInput = { ...input };
    newInput[inputField.name] =
      inputField.name === "image" ? inputField.files[0] : inputField.value;
    setInput(newInput);

    // console.log(newInput);
  };

  // Handle the form data when user click submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    await getResizedImage(input);
    setSubmitStatus(false);
    setInput({
      image: null,
      width: "",
      height: "",
      format: "",
    });
  };

  // Handle drag and drop file input
  const handleFileDrop = (files) => {
    const imageFile = files[0];

    const newInput = { ...input };
    newInput.image = imageFile;

    setInput(newInput);
  };

  const renderFormLeftSide = () => {
    const label = input.image ? input.image.name : "Drop your image here...";

    return (
      <div className="resize-image-form-left-side">
        <FileInput
          label={label}
          onChange={updateInputData}
          onDrop={handleFileDrop}
        />
      </div>
    );
  };

  const renderFormRightSide = () => {
    return (
      <div className="resize-image-form-right-side">
        {renderRemainingInputFields()}
        {renderFormSubmitButton()}
      </div>
    );
  };

  const renderRemainingInputFields = () => {
    const radiosList = [
      { value: "jpeg", label: "JPEG" },
      { value: "png", label: "PNG" },
      { value: "webp", label: "WEBP" },
    ];

    return (
      <>
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
            name="format"
            radiosList={radiosList}
            onChange={updateInputData}
          />
        </div>
      </>
    );
  };

  const renderFormSubmitButton = () => {
    return (
      <div className="resize-image-form-row">
        <FormButton
          label="resize image"
          submitStatus={submitStatus}
          submitMessage="processing image"
        />
      </div>
    );
  };

  return (
    <form className="resize-image-form" onSubmit={handleSubmit}>
      {renderFormLeftSide()}
      {renderFormRightSide()}
    </form>
  );
};

export default ResizeImageForm;
