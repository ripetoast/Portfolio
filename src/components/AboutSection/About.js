import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
      <div>
        <Fade top>
          <div className="row justify-content-center justify-content-lg-end mb-5">
            <h1 className="custom_about_headLine">Hello</h1>
          </div>
        </Fade>
        <div className="row justify-content-center">
          <Fade left>
            <div className="col-lg-4 col-12 d-flex justify-content-center">
              <div className="custom_about_profilePic align-self-center"></div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-8 col-10 jumbotron my-4 custom_about_desc">
              <div className="row justify-content-center">
                <p className="lead">
                  Michael Lau Hing Yim
                </p>
              </div>
              <div className="row justify-content-center mt-0 mb-4">
                <p className="small">
                  Web Developer. Web Designer. 
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-3">
                  <a href="https://www.linkedin.com/in/mlhy/">
                    <FontAwesomeIcon
                      className="custom_about_navIcon"
                      icon={['fab', "linkedin"]}
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="https://mediamikemotel.wordpress.com/">
                    <FontAwesomeIcon
                      className="custom_about_navIcon"
                      icon={['fab', "wordpress"]}
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="https://github.com/ripetoast">
                    <FontAwesomeIcon
                      className="custom_about_navIcon"
                      icon={['fab', "github"]}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
};

export default About;