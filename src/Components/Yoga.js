import React, { Component } from "react";
import Fade from "react-reveal";

class Yoga extends Component {
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const profilepic = "images/" + this.props.data.image;
    const text = this.props.data.text;

    return (
      <section id="yoga">
        <Fade duration={1000}>
          <div className="row">
            <div className="six columns main-col">
              <h2>{title}</h2>
              <p>{text}</p>
              <h4>Angebot</h4>
              <ul>
                <li>
                  Einzelunterricht online und vor Ort
                </li>
                <li>
                  Firmenyoga
                </li>
                <li>
                  Im Sommer draußen Yoga
                </li>
              </ul>

            </div>
            <div className="six columns">
              <img
                  className="profile-pic"
                  src={profilepic}
                  alt="Stroke and Circle Profile"
              />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Yoga;
