import React, { Component } from "react";
import "../style/css/works.css";
import FirstWebsite from "../img/website1.jpg";
import SecondWebsite from "../img/website2.jpg";
import ThirdWebsite from "../img/website3-1.jpg";
import FifthWebsite from "../img/website5.jpg";

class Web extends Component {
  render() {
    return (
      <div className="c-projects">
        <div className="c-projects__website">
          <img src={FirstWebsite} alt="My portfolio" />
          <div className="o-website-description">
            <h3>My portfolio</h3>
            <p>website done in React</p>
            <a
              href="https://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-angle-double-right" />
            </a>
          </div>
        </div>
        <div className="c-projects__website">
          <img src={FifthWebsite} alt="Design Website" href="https://luthien95.github.io/Design-Page/"
              target="_blank"/>
          <div className="o-website-description">
            <h3>Design & Design Website</h3>
            <p>website done in React</p>
            <a
              href="https://luthien95.github.io/Design-Page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-angle-double-right" />
            </a>
          </div>
        </div>
        <div className="c-projects__website">
          <img src={ThirdWebsite} alt="" />
          <div className="o-website-description">
            <h3>Bubbles</h3>
            <p>made as part of Canvas learning</p>
            <a
              href="https://codepen.io/Luthien95/full/eLOydd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-angle-double-right" />
            </a>
          </div>
        </div>
        <div className="c-projects__website">
          <img src={SecondWebsite} alt="" />
          <div className="o-website-description">
            <h3>Company's website</h3>
            <p>project made in JS & Bootstrap</p>
            <a
              href="http://www.monar.wroclaw.pl/home.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-angle-double-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Web;
