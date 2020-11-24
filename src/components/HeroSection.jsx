import React from "react";
import HeroHeader from "./HeroHeader";
import HeroUtilsList from "./HeroUtilsList";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <HeroHeader />
      <HeroUtilsList />
    </div>
  );
};

export default HeroSection;
