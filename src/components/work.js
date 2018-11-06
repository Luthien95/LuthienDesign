import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./../style/css/index.css";
import "../style/css/works.css";
import WorksNavigation from "./worksnavigation";
import DigitalPainting from "./digitalpainting";
import Illustration from "./illustration";
import WebDesign from "./webdesign";
import Web from "./web";

const Work = () => (
  <BrowserRouter>
    <div className="c-work">
      <WorksNavigation />
      <Switch>
        <Route
          exact
          path="/LuthienDesign/work/digitalpainting"
          component={DigitalPainting}
        />
        <Route
          path="/LuthienDesign/work/illustration"
          component={Illustration}
        />
        <Route path="/LuthienDesign/work/webdesign" component={WebDesign} />
        <Route path="/LuthienDesign/work/web" component={Web} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Work;
