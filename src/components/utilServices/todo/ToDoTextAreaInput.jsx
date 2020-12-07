import React, { createRef, useEffect, useState } from "react";
import "./ToDoTextAreaInput.css";

const ToDoTextAreaInput = (props) => {
  const { name, value, placeholder = "", onChange } = props;
  const textAreaRef = createRef();

  const [text, setText] = useState(value);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [text, textAreaRef]);

  const updateText = (e) => {
    setTextAreaHeight("auto");
    const newText = e.currentTarget.value;
    setText(newText);
    onChange(newText);
  };

  return (
    <textarea
      ref={textAreaRef}
      name={name}
      value={text}
      placeholder={placeholder}
      onChange={updateText}
      rows="1"
      className="to-do-text-area-input"
      style={{ height: textAreaHeight }}
    />
  );
};

export default ToDoTextAreaInput;
