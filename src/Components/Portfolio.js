import Fade from "react-reveal";
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';

let id = 0;

function Portfolio(props) {

    if (!props.data) return null;

    const projects = props.data.projects.map(function (projects) {
        let projectImage = "images/portfolio/" + projects.image;

        return (
            <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                    <div className="foo">
                        <PhotoView key={id} src={projectImage}>
                            <img src={projectImage} alt=""/>
                        </PhotoView>
                    </div>

                </div>
            </div>
        );
    });


    return (
        <section id="portfolio">
            <Fade bottom duration={300} distance="40px">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works</h1>

                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            <PhotoProvider>
                                {projects}
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Portfolio;
