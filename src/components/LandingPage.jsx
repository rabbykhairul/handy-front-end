import React from "react";
import TopNavBar from "./TopNavBar";
import HeroSection from "./HeroSection";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <TopNavBar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
