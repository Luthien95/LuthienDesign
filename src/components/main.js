import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Index from "./index";
import About from "./aboutme";
import Work from "./work";
import Navigation from "./navigation";
import Footer from "./footer";
import "./../style/css/index.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { height: props.height };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight + "px" });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="website" style={{ height: this.state.height }}>
          <Navigation />
          <div className="website__website-body">
            <Switch>
              <Route exact path="/LuthienDesign/" component={Index} />
              <Route path="/LuthienDesign/aboutme" component={About} />
              <Route path="/LuthienDesign/work" component={Work} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
