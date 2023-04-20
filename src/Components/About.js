import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.description;
    const profilepic = "images/" + this.props.data.image;
    const bio1 = this.props.data.bio_1;
    const bio2 = this.props.data.bio_2;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const zip = this.props.data.address.zip;
    const email = this.props.data.email;
    const phone = this.props.data.phone;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <div className="row">
                <div className="columns contact-details">
                  <h2>Kontakt</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>{email}</span>
                    <br />
                    <span>{phone}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
