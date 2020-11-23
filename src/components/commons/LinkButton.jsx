import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  const { label, to, ...styleInputs } = props;

  return (
    <Link to="/" style={getStyles(styleInputs)}>
      {label}
    </Link>
  );
};

export default LinkButton;

const getStyles = (styleInputs) => {
  return {
    fontSize: "0.9vw",
    fontWeight: "500",
    color: "rgb(8,8,8)",
    letterSpacing: "0.025vw",
    padding: "0.75vw 2.35vw",
    border: "0.1vw solid",
    borderColor: styleInputs.borderColor || "rgb(200,200,200)",
    borderRadius: "1.35vw",
  };
};
