import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectCard extends React.Component{
    renderIconPopover = (innerText) => {
        return (
          <Popover id="popover-basic">
            <Popover.Content>
              <div>
                {innerText}
              </div>
            </Popover.Content>
          </Popover>
        );
    }

    renderPopover = () => {
        return (
          <Popover id="popover-basic">
            <Popover.Content>
              <div className="row custom_projects_popover justify-content-center">
                {this.renderPopoverIcons()}
              </div>
            </Popover.Content>
          </Popover>
        );
    }

    renderPopoverIcons = () => {
        const icons = this.props.technologies.map((tech) => {
            return (
              <FontAwesomeIcon
                key={tech}
                className="custom_projects_techIcon"
                icon={['fab', tech]}
              />
            );
        });
        return(icons);
    };

    render(){
        return (
          <div className="card custom_projects_card">
            {/* Card Top */}
            <div className="custom_projects_cardTop">
              <img
                src={this.props.imageLink}
                alt=""
                className="card-img-top"
              />
              <ul className="custom_projects_navIcon">
                {/* Demo Icon */}
                <OverlayTrigger
                  trigger="hover"
                  placement="right"
                  overlay={this.renderIconPopover("Demo")}
                >
                <li>
                    <a href={this.props.demoLink} target="_blank">
                    <FontAwesomeIcon
                      icon="desktop"
                    />
                  </a>
                </li>
                </OverlayTrigger>
                {/* Github Icon */}
                <OverlayTrigger
                  trigger="hover"
                  placement="right"
                  overlay={this.renderIconPopover("Github")}
                >
                <li>
                    <a href={this.props.githubLink} target="_blank">
                    <FontAwesomeIcon
                        icon={['fab', 'github']}
                    />
                  </a>
                </li>
                </OverlayTrigger>
              </ul>
              <div className="custom_projects_boxContent">
                <h3 className="custom_projects_title">{this.props.projectName}</h3>
              </div>
            </div>

            {/* Card Bottom */}
            <OverlayTrigger
              trigger="hover"
              placement="bottom"
              overlay={this.renderPopover()}
            >
              <div className="card-body">
                <h5 className="card-title"> {this.props.projectName} </h5>
                <p className="card-text">
                  {this.props.projectDescription}
                </p>
              </div>
            </OverlayTrigger>
          </div>
        );
    }
}

export default ProjectCard;