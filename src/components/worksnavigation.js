import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../style/css/index.css";

class WorksNavigation extends Component {
  render() {
    return (
      <nav className="website__works-navigation">
        <ul>
          <li>
            <NavLink to="/LuthienDesign/work/digitalpainting">
              DIGITAL PAINTING
            </NavLink>
          </li>
          |
          <li>
            <NavLink to="/LuthienDesign/work/illustration">
              ILUSTRATIONS
            </NavLink>
          </li>
          |
          <li>
            <NavLink to="/LuthienDesign/work/webdesign">WEB DESIGN</NavLink>
          </li>
          |
          <li>
            <NavLink to="/LuthienDesign/work/web">PROJECTS</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default WorksNavigation;
