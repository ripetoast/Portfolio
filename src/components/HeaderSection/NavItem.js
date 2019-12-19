import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//This component is rendered in the Navigation bar as the interactable buttons
class NavItem extends React.Component{
    handleClick = () => {
        this.props.changeActive(this.props.title);
    };

    render(){
        return (
          <li
            className="nav-item shadow-sm custom_header_navItem"
            onClick={this.handleClick}
          >
            <a
              className="nav-link custom_header_navItemText"
              href={`#${this.props.title}`}
            >
              <FontAwesomeIcon
                className="custom_header_navIcon"
                icon={this.props.icon}
              />
              <div className="mt-sm-2">
                {this.props.title}
              </div>
            </a>
          </li>
        );
    }
}

export default NavItem;