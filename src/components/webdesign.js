import React, { Component } from "react";
import "../style/css/works.css";
import FirstWebsite from "../img/website1.jpg";

class WebDesign extends Component {
  render() {
    return (
      <div className="c-projects">
        <div className="c-projects__website">
          <img src={FirstWebsite} alt="" />
          <div className="o-website-description">
            <h3>My portfolio</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDesign;
