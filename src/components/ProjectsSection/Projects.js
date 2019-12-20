import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./ProjectCard";
import Carousel from "react-bootstrap/Carousel";

class Projects extends React.Component {
    state = {
      projectsData: {},
      projectNames: [],
      windowWidth: 0,
      windowHeight: 0
    };

    componentDidMount = () => {
      this.updateWindowDimensions(); //Detech window width
      window.addEventListener('resize', this.updateWindowDimensions);
      fetch("data/projectsData.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          projectsData: data,
          projectNames: Object.keys(data)
        })
      })
      .catch((err) => console.log(err));
    };

    componentWillUnmount = () => {
      window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions= () => {
      this.setState({ 
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight 
      });
    };

    //Determine the number of projects to show on a single slide of the carousel
    calProjectsOnCarousel = () => {
      if(this.state.windowWidth < 576){
        return 1;
      }else if(this.state.windowWidth <= 768){
        return 2;
      }
      return 4;
    };

    renderProjects = () => {
      const chunkedProjects = _.chunk(this.state.projectNames, this.calProjectsOnCarousel());
      const projs = chunkedProjects.map((projects) => {
        const innerProjects = projects.map((innerProject) => {
          return (
            <div className="col-8 col-md-4 col-lg-4 m-3" key={innerProject}>
              <ProjectCard
                technologies={
                  this.state.projectsData[innerProject].technologies
                }
                projectName={innerProject}
                projectDescription={
                  this.state.projectsData[innerProject].projectDescription
                }
                githubLink={this.state.projectsData[innerProject].githubLink}
                demoLink={this.state.projectsData[innerProject].demoLink}
                imageLink={this.state.projectsData[innerProject].imageLink}
              />
            </div>
          );
        });
        return (
          <Carousel.Item key={projects} >
            <div className="row justify-content-center mt-4">
              {innerProjects}
            </div>
          </Carousel.Item>
        );
      });
      return(projs);
    };

    render(){
      return (
        <div>
          <div className="row justify-content-center">
            <h1 className="custom_projects_headLine">Projects</h1>
          </div>
          <div className="row justify-content-center mt-4">
            <Carousel
              className="bg-light custom_projects_carousel"
              indicators={false}
              interval={null}
              nextIcon={<FontAwesomeIcon icon="angle-right" className="custom_projects_nextIcon" />}
              prevIcon={<FontAwesomeIcon icon="angle-left" className="custom_projects_nextIcon" />}
            >
              {this.renderProjects()}
            </Carousel>
          </div>
        </div>
      );
    }

    
}

export default Projects;