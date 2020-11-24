import React, { Component } from "react";
import LinkButton from "./commons/LinkButton";
import "./HeroUtilsList.css";

class HeroUtilsList extends Component {
  utilsInfoObjs = [
    {
      label: "Resize image",
      to: "/util-services/resize-image",
      borderColor: "",
    },
    { label: "Use pomodoro to focus", to: "/", borderColor: "" },
    { label: "Convert image", to: "/", borderColor: "" },
    { label: "create a to-do list", to: "/", borderColor: "" },
    { label: "Start timer", to: "/", borderColor: "" },
    { label: "Manage money", to: "/", borderColor: "" },
    { label: "Create survey", to: "/", borderColor: "" },
    { label: "Calculate age", to: "/", borderColor: "" },
    { label: "Build good habits", to: "/", borderColor: "" },
    { label: "Covert PPT to PDF", to: "/", borderColor: "" },
  ];

  renderUtilsButtons = () => {
    return this.utilsInfoObjs.map((utilsInfo) => {
      return (
        <div key={utilsInfo.label}>
          <LinkButton
            to={utilsInfo.to}
            label={utilsInfo.label}
            borderColor={utilsInfo.borderColor}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="hero-utils-list">{this.renderUtilsButtons()}</div>;
  }
}

export default HeroUtilsList;
