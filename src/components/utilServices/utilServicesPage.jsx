import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNavBar from "../commons/TopNavBar";
import ResizeImageSection from "./resizeImage/ResizeImageSection";
import "./utilServicesPage.css";

const UtilServicesPage = (props) => {
  return (
    <div className="util-services-page">
      <TopNavBar pageType="util-services" />
      {renderSelectedServiceSection(props)}
    </div>
  );
};

export default UtilServicesPage;

const renderSelectedServiceSection = (props) => {
  return (
    <Switch>
      <Route
        path="/util-services/resize-image"
        component={ResizeImageSection}
      />
    </Switch>
  );
};
