import React from "react";
import LinkButton from "./commons/LinkButton";
import "./HeroUtilsList.css";

const HeroUtilsList = () => {
  return (
    <div className="hero-utils-list">
      <div>
        <LinkButton to="/" label="Resize image"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="Use pomodoro to focus"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="Convert image"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="Start timer"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="create to do list"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="manage money"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="build good habits"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="calculate your age"></LinkButton>
      </div>
      <div>
        <LinkButton to="/" label="create survey"></LinkButton>
      </div>
    </div>
  );
};

export default HeroUtilsList;
