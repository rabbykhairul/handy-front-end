import React, { useState } from "react";

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
  };

  // Handle the form data when user click submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image"></label>
        <input type="file" id="image" name="image" onChange={updateInputData} />
      </div>
      <div>
        <label htmlFor="width"></label>
        <input
          type="number"
          id="width"
          name="width"
          value={input.width}
          onChange={updateInputData}
        />
      </div>
      <div>
        <label htmlFor="height"></label>
        <input
          type="number"
          id="height"
          name="height"
          value={input.height}
          onChange={updateInputData}
        />
      </div>
      <div>
        <input
          type="radio"
          name="formats"
          value="jpeg"
          onChange={updateInputData}
        />
        JPEG
        <input
          type="radio"
          name="formats"
          value="png"
          onChange={updateInputData}
        />
        PNG
        <input
          type="radio"
          name="formats"
          value="webp"
          onChange={updateInputData}
        />
        WEBP
      </div>
      <button>Resize</button>
    </form>
  );
};

export default ResizeImageForm;
