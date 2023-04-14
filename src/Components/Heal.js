import React, { Component } from "react";
import Fade from "react-reveal";

class Heal extends Component {
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const image = "images/" + this.props.data.image;
    const text = this.props.data.text;

    return (
      <section id="heal">
        <Fade duration={1000}>
          <div className="row">
            <div className="six columns">
              <img
                className="profile-pic"
                src={image}
                alt="Stroke and Circle Profile"
              />
            </div>
            <div className="six columns main-col">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Heal;
