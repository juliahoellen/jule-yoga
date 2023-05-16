import React, { Component } from "react";
import Fade from "react-reveal";

class Psychotherapie extends Component {
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const psychotherapieImg = "images/" + this.props.data.image;
    const text = this.props.data.text;
    const text1 = this.props.data.text1;
    const text2 = this.props.data.text2;
    const text3 = this.props.data.text3;
    const text4 = this.props.data.text4;

    return (
      <section id="psychotherapie">
        <Fade duration={1000}>
          <div className="row">
            <div className="eight columns main-col">
              <h2>{title}</h2>
              <p>{text}</p>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{text4}</p>
              <h4>Methoden</h4>
              <ul>
                <li>
                  Dauer und Häufigkeit der Behandlung kann selbst mitbestimmt werden
                </li>
                <li>
                  Keine Weitergabe von Informationen an Dritte
                </li>
                <li>
                  Keine Sperrfrist
                </li>
                <li>
                  Kürzere Wartedauer
                </li>
                <li>
                  Kosten sind steuerlich absetzbar
                </li>
              </ul>
            </div>
            <div className="four columns">
              <img
                  className="profile-pic"
                  src={psychotherapieImg}
                  alt="Profile"
              />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Psychotherapie;
