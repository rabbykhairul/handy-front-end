import React from "react";
import TopNavBar from "./TopNavBar";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <div style={getStyles()}>
      <TopNavBar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;

const getStyles = () => {
  return {
    width: "100%",
    height: "100vh",
    color: "#fff",
  };
};
