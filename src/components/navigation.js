import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../style/css/index.css";

class Navigation extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      open: false,
      counter: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    // switch state on click
    if (!this.state.open) {
      this.setState({
        open: true,
        counter: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 700
        });
      },
      false
    );
  }
  render() {
    var clickStyles = {};
    var clickStyles2 = {};

    if (this.state.open) {
      clickStyles = {
        display: "none"
      };

      clickStyles2 = {
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        opacity: "0",
        padding: "0",
        zIndex: "1000",
        animation: "textHidden 1s 2s forwards"
      };
    }
    return (
      <nav className="website__main-navigation">
        <i
          className={window.innerWidth < 700 ? "fas fa-bars" : "o-not-visible"}
          onClick={this.handleClick}
          style={clickStyles}
        />
        <i
          className={this.state.open ? "fas fa-times" : "o-not-visible"}
          onClick={this.handleClick}
        />
        <div
          className={
            this.state.open
              ? "o-open-navigation"
              : this.state.counter === true
                ? "o-closed-navigation"
                : "o-not-visible"
          }
        />
        <ul style={clickStyles2}>
          <li onClick={this.state.open ? this.handleClick : null}>
            <NavLink exact to="/LuthienDesign/">
              HOME
            </NavLink>
          </li>
          <li onClick={this.state.open ? this.handleClick : null}>
            <NavLink to="/LuthienDesign/work/digitalpainting">MY WORKS</NavLink>
          </li>
          <li onClick={this.state.open ? this.handleClick : null}>
            <NavLink to="/LuthienDesign/aboutme">ABOUT ME</NavLink>
          </li>
        </ul>

        <p className="o-name">Luthien Design</p>
      </nav>
    );
  }
}

export default Navigation;
