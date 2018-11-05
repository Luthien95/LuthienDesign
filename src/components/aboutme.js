import React, { Component } from "react";
import ".././style/css/sections.css";

class About extends Component {
  render() {
    return (
      <div className="c-about">
        <div className="c-about__informations">
          <p className="o-subtitle">FEW WORDS</p>
          <h1>About me</h1>
          <p>
            My name is Aleksandra and I'm a graphic designer but I'm also
            interested in Front-End. At this moment I'm stuying at the
            Politechnika Krakowska in the field of "Computer science".
          </p>
          <p>
            In my free time I love reading fantasy books, drawing and watching
            'Friends'. I'm also a big fan of good food and traveling.
          </p>
          <p>So far I've worked with tools & technologies like : </p>
          <p>
            HTML5 | CSS3 | Adobe Photoshop | Adobe Illustrator | JavaScript |
            JQuery | Bootstrap | React | GIT | Jira
          </p>

          <div className="c-about__contact-box">
            <div className="o-informations">
              <div className="o-informations-icons">
                <i className="fas fa-phone" />
                <p>884-268-288</p>
              </div>
              <div className="o-informations-icons">
                <i className="fas fa-envelope" />
                <p>aleksandrasalak@gmail.com</p>
              </div>
              <div className="o-informations-icons">
                <i className="fas fa-map-marker-alt" />
                <p>Cracow, Poland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
