import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNavBar from "../commons/TopNavBar";
import ResizeImageSection from "./resizeImage/ResizeImageSection";
import PomodoroSection from "./pomodoro/PomodoroSection";
import TimerSection from "./timer/TimerSection";
import "./utilServicesPage.css";

const UtilServicesPage = (props) => {
  const { location } = props;

  const renderTopNavBar = () => {
    if (location.pathname === "/util-services/to-do") return null;
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
        <Route path="/util-services/to-do" render={() => <h1>To do list</h1>} />
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
