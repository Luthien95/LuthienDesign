import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Index from "./index";
import About from "./aboutme";
import Work from "./work";
import Navigation from "./navigation";
import Footer from "./footer";
import "./../style/css/index.css";

const Main = () => (
  <BrowserRouter>
    <div className="website">
      <Navigation />
      <div className="website__website-body">
        <Switch>
          <Route exact path="/LuthienDesign/" component={Index} />
          <Route path="/aboutme" component={About} />
          <Route path="/work" component={Work} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Main;
