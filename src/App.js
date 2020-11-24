import React from "react";
import { Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UtilServicesPage from "./components/utilServices/utilServicesPage";

function App() {
  return (
    <>
      <Route path="/util-services/" component={UtilServicesPage} />
      <Route path="/" exact component={LandingPage} />
    </>
  );
}

export default App;
