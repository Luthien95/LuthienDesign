import React, { Component } from "react";
import ".././style/css/sections.css";
import { NavLink } from "react-router-dom";
import MyPhoto from "../img/head.png";

class Index extends Component {
  render() {
    return (
      <div className="c-home">
        <div className="c-home__introducing">
          <p>HI</p>
          <div
            className="o-animated-box o-box-animation animate"
            data-delay="10"
          >
            <h1 className="c-home__tittle">
              I'm Aleksandra <br /> and i'm the future front-end developer{" "}
            </h1>
          </div>
          <div className="c-home__button">
            <NavLink to="/LuthienDesign/aboutme">Read more</NavLink>
          </div>
        </div>
        <div className="c-home__image">
          <img src={MyPhoto} alt="" />
          <h2 className="c-home__letter">A</h2>
        </div>
      </div>
    );
  }
}

export default Index;
