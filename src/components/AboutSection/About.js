import React from "react";
import Fade from "react-reveal/Fade";

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
              <p className="lead">Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cumque, nemo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur possimus inventore assumenda, rem ipsum distinctio
                eos consectetur asperiores natus officiis voluptate expedita
                maiores exercitationem maxime quas illum dolore recusandae cum
                modi itaque. In aliquam nesciunt possimus sapiente minima,
                cumque dolorum velit eum molestiae consequuntur reiciendis
                voluptates ducimus explicabo hic. Omnis.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    );
};

export default About;