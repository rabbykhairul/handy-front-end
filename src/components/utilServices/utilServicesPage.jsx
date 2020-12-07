import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNavBar from "../commons/TopNavBar";
import ResizeImageSection from "./resizeImage/ResizeImageSection";
import PomodoroSection from "./pomodoro/PomodoroSection";
import TimerSection from "./timer/TimerSection";
import ToDoSection from "./todo/ToDoSection";
import "./utilServicesPage.css";

const UtilServicesPage = (props) => {
  const renderTopNavBar = () => {
    return <TopNavBar pageType="util-services" />;
  };
  const renderSelectedServiceSection = () => {
    return (
      <Switch>
        <Route
          path="/util-services/resize-image"
          component={ResizeImageSection}
        />
        <Route path="/util-services/pomodoro" component={PomodoroSection} />
        <Route path="/util-services/timer" component={TimerSection} />
        <Route path="/util-services/to-do" component={ToDoSection} />
      </Switch>
    );
  };

  return (
    <div className="util-services-page">
      {renderTopNavBar()}
      {renderSelectedServiceSection()}
    </div>
  );
};

export default UtilServicesPage;
