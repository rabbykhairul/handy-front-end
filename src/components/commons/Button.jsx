import React from "react";
import "./Button.css";

const Button = (props) => {
  const { label, value, selectStatus, onClick } = props;
  const className = selectStatus ? "btn btn-selected" : "btn";

  return <button className={className}>{label}</button>;
};

export default Button;
