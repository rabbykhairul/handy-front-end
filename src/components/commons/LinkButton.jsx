import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  const { label, to, ...styleInputs } = props;

  return (
    <Link to={to} style={{ display: "inline-block" }}>
      <div style={getStyles(styleInputs)}>{label}</div>
    </Link>
  );
};

export default LinkButton;

const getStyles = (styleInputs) => {
  return {
    fontSize: styleInputs.size === "sm" ? "0.7vw" : "0.9vw",
    fontWeight: "500",
    color: "rgb(8,8,8)",
    letterSpacing: "0.025vw",
    padding: styleInputs.size === "sm" ? "0.6vw 2.15vw" : "0.75vw 2.35vw",
    border: "0.1vw solid",
    borderColor: styleInputs.borderColor || "rgb(200,200,200)",
    borderRadius: "1.35vw",
    display: "inline-block",
  };
};
