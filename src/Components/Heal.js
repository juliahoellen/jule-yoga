import React, { Component } from "react";
import Fade from "react-reveal";

class Heal extends Component {
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const image = "images/" + this.props.data.image;
    const text = this.props.data.text;
    const text2 = this.props.data.text2;
    const text3 = this.props.data.text3;
    const text4 = this.props.data.text4;

    return (
      <section id="heal">
        <Fade duration={1000}>
          <div className="row">
            <div className="four columns">
              <img
                className="profile-pic"
                src={image}
                alt="Profile"
              />
            </div>
            <div className="eight columns main-col">
              <h2>{title}</h2>
              <p>{text}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{text4}</p>
              <h4>Methoden</h4>
              <ul>
                <li>
                  Gesprächstherapie Lösungsfokussierte Gesprächstherapie
                </li>
                <li>
                  Klettertherapie
                </li>
                <li>
                  Yoga und Meditation
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Heal;
