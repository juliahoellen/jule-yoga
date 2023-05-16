import React, {Component} from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Yoga from "./Components/Yoga";
import Heal from "./Components/Heal";
import Psychotherapie from "./Components/Psychotherapie";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: "bar",
            resumeData: {}
        };

        ReactGA.initialize("UA-110570651-1");
        ReactGA.pageview(window.location.pathname);
    }

    getResumeData() {
        $.ajax({
            url: "./resumeData.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <section id={"grow"}>
                    <img src="images/grow.jpg"/>
                </section>
                <Psychotherapie data={this.state.resumeData.psychotherapie}/>
                <Heal data={this.state.resumeData.heal}/>
                <Yoga data={this.state.resumeData.yoga}/>
                <About data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;
