import React from "react";
import "./Button.css";

const Button = (props) => {
  const { label, selectStatus, onClick } = props;
  const className = selectStatus ? "btn btn-selected" : "btn";

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
