import React, { Component } from "react";
import "../style/css/works.css";
import Arrow from "../img/arrow.png";
import FirstDigitalImage from "../img/img-1.jpg";
import SecondDigitalImage from "../img/img-2.jpg";
import ThirdDigitalImage from "../img/img-3.jpg";
import ForthDigitalImage from "../img/img-4.jpg";

class DigitalPainting extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      images: [
        FirstDigitalImage,
        SecondDigitalImage,
        ThirdDigitalImage,
        ForthDigitalImage
      ],
      titles: ["Redheaded", "Little Red Riding Hood", "Lonely wolf", "Stag"],
      desc: [
        "The image was created just for fun. The empahis is on the hair color when the sun is rays fall on it.",
        "The first serious project inspired by a YouTube video. All done in Adobe Photoshop. I'm not happy with how her hair look, but since then I have tried to improve in this area.",
        "An exercise consisting in the creation of a galaxy seen on a very clean, cloudless night. The wolf in the composition gives the feeling of loneliness.",
        "The first painting attempting to capture the colors of the sky during the northern lights. Done in Adobe Photoshop."
      ],
      fade: false
    };
    this.fading = this.fading.bind(this);
  }

  componentDidMount() {
    const element = this.refs.node;
    element.addEventListener("animationend", this.fading);
  }

  componentWillUnmount() {
    const element = this.refs.node;
    element.removeEventListener("animationend", this.fading);
  }

  fading() {
    this.setState({ fade: false });
  }

  goNext() {
    if (this.state.selected < this.state.images.length - 1) {
      this.setState({ selected: this.state.selected + 1 });
    } else {
      this.setState({ selected: 0 });
    }

    this.setState({ fade: true });
  }

  goPrev() {
    if (this.state.selected === 0) {
      this.setState({ selected: this.state.images.length - 1 });
    } else {
      this.setState({ selected: this.state.selected - 1 });
    }

    this.setState({ fade: true });
  }

  render() {
    return (
      <div className="c-digital">
        <div
          className={
            this.state.fade
              ? "_image-fade c-digital__description"
              : "c-digital__description"
          }
          ref="node"
        >
          <p>DIGITAL PAINTING</p>

          <Title title={this.state.titles[this.state.selected]} />
          <Description description={this.state.desc[this.state.selected]} />
        </div>
        <div
          className={
            this.state.fade
              ? "_image-fade" + " c-digital__image"
              : "c-digital__image"
          }
          ref="node"
        >
          <Slider image={this.state.images[this.state.selected]} />
        </div>
        <div className="c-digital__functional-buttons">
          <Controller
            prev={this.goPrev.bind(this)}
            next={this.goNext.bind(this)}
            imageNum={this.state.images.length}
            slide={this.state.selected}
          />
        </div>
      </div>
    );
  }
}

class Controller extends Component {
  render() {
    return (
      <div>
        <Prev prev={this.props.prev} />
        <Next next={this.props.next} />
      </div>
    );
  }
}

class Description extends Component {
  render() {
    return <p className="o-image-description">{this.props.description}</p>;
  }
}

class Title extends Component {
  render() {
    return <h1 className="o-image-title">{this.props.title}</h1>;
  }
}

class Next extends Component {
  render() {
    return (
      <a onClick={this.props.next}>
        <img src={Arrow} className="o-arrow" alt="arrow" />
      </a>
    );
  }
}

class Prev extends Component {
  render() {
    return (
      <a onClick={this.props.prev}>
        <img src={Arrow} className="o-arrow o-arrow-back" alt="arrow" />
      </a>
    );
  }
}

class Slider extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      open: false,
      bool: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    // switch state on click
    if (this.state.open === false) {
      this.setState({
        open: true,
        bool: false
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render() {
    var clickStyles = {};

    if (this.state.open) {
      if (window.innerWidth < 950) {
        clickStyles = {
          height: "auto",
          width: "90%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        };
      } else {
        clickStyles = {
          width: "auto",
          height: "90%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        };
      }
    }

    return (
      <div
        className={this.state.open ? "o-image-absolute" : "o-image-container"}
      >
        <i
          className={this.state.open ? "fas fa-times o-image-close" : " "}
          onClick={this.handleClick}
        />
        <img
          alt=""
          id="mslide"
          src={this.props.image}
          onClick={this.handleClick}
          style={clickStyles}
          open={this.state.open}
          onMouseOver={
            this.state.open
              ? () => this.setState({ bool: false })
              : () => this.setState({ bool: true })
          }
          onMouseOut={() => this.setState({ bool: false })}
        />
      </div>
    );
  }
}

export default DigitalPainting;
export { Title, Description, Slider, Controller };
