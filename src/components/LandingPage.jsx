import React from "react";
import HeroHeader from "./HeroHeader";

const LandingPage = () => {
  return (
    <div style={getStyles()}>
      <HeroHeader />
    </div>
  );
};

export default LandingPage;

const getStyles = () => {
  return {
    width: "100%",
    height: "88vh",
    display: "flex",
    color: "#fff",
    paddingTop: "8.5vh",
  };
};
