import React, { Component } from "react";
import Fade from "react-reveal";
import LazyHero from 'react-lazy-hero';


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.shop;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const profilepic = "images/" + this.props.data.image;


    return (
      <header id="home">
        <LazyHero imageSrc="images/hero.jpeg"
                  color={"#FFFAF0"}
                  parallaxOffset={100}
                  minHeight={"75vh"}
                  opacity={0}
        >

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#heal">
                Über mich
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#yoga">
                Yoga
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Kontakt
              </a>
            </li>

            {/*<li>*/}
            {/*  <a className="smoothscroll" href="#contact">*/}
            {/*    Contact*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <hr />
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            {/*<Fade bottom duration={2000}>*/}
            {/*  <ul className="social">*/}
            {/*    <a href={project} className="button btn project-btn">*/}
            {/*      Zum Shop*/}
            {/*    </a>*/}
            {/*  </ul>*/}
            {/*</Fade>*/}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#heal">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        </LazyHero>

      </header>
    );
  }
}

export default Header;
