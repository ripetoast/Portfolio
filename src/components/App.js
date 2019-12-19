import React from "react";
import Fade from "react-reveal/Fade";
import Header from "./HeaderSection/Header";
import About from "./AboutSection/About";
import Details from "./DetailsSection/Details";
import Technologies from "./TechSection/Technologies";
import Projects from "./ProjectsSection/Projects";
import Contact from "./ContactSection/Contact";
import "../style/main.scss";

class App extends React.Component{
    render(){
        return (
          <div className="custom_main_container">
            <div className="custom_main_topBg">
              <div className="container">
                <Fade top>
                  <Header />
                </Fade>
                <br />
                <div className="mt-5" id="about">
                  <About />
                </div>
                <br />
              </div>
            </div>
            <div className="custom_main_bottomBg">
              <div className="container">
                <Fade>
                  <div>
                    <Details />
                  </div>
                </Fade>
                <hr className="custom_main_hr" />
                <div className="my-4" id="technologies">
                  <Fade>
                    <Technologies />
                  </Fade>
                </div>
                <div className="my-4" id="projects">
                  <Fade>
                    <Projects />
                  </Fade>
                </div>
              </div>
            </div>
            <div className="container-fluid" id="contact">
              <Contact />
            </div>
          </div>
        );
    }
}

export default App;