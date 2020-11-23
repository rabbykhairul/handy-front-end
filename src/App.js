import React from "react";
import { Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <TopNavBar />
      <Route path="/" exact component={LandingPage} />
    </>
  );
}

export default App;
