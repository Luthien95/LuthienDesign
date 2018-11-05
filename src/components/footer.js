import React, { Component } from "react";
import "./../style/css/index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="website__footer">
        <div className="o-social-links">
          <a
            href="https://codepen.io/Luthien95/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen" />
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandra-salak-0b0456169/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://www.deviantart.com/luthien95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-deviantart" />
          </a>
          <a
            href="https://github.com/Luthien95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
