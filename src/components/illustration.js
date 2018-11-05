import React, { Component } from "react";
import "../style/css/works.css";
import { Title, Description, Slider, Controller } from "./digitalpainting";
import FirstIllustration from "../img/ilu-1.jpg";

class Illustration extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      images: [FirstIllustration],
      titles: ["Roronoa Zoro"],
      desc: [
        'Project made in Adobe Illustration. It is based on "One Piece" anime scene. '
      ],
      fade: false
    };
    this.fading = this.fading.bind(this);
  }

  /* Powielone, sprawdzic jak to wywalic!! */
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
          <p>ILLUSTRATIONS</p>
          <Title title={this.state.titles[this.state.selected]} />
          <Description description={this.state.desc[this.state.selected]} />
        </div>
        <div
          className={
            this.state.fade
              ? "_image-fade c-digital__image"
              : "c-digital__image"
          }
          ref="node"
        >
          <Slider
            image={this.state.images[this.state.selected]}
            className="img"
          />
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

export default Illustration;
