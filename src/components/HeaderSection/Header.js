import React from "react";
import NavItem from "./NavItem";

//This component renders the Navigation Bar
class Header extends React.Component{
  state = {
    activeNavItem: "about" 
  };

  changeActive = (navItem) => {
    this.setState({ activeNavItem: navItem });
  };

  render(){
    return (
      <nav
        className="navbar navbar-expand navbar-light bg-light shadow custom_header_navBar"
        id="navbar-header"
      >
        <div className="collapse navbar-collapse custom_header_navbarCon">
          <ul className="navbar-nav custom_header_listItems">
            <NavItem
              title="about"
              icon="address-card"
              activeItem={this.state.activeNavItem}
              changeActive={this.changeActive}
            />
            <NavItem
              title="projects"
              icon="project-diagram"
              activeItem={this.state.activeNavItem}
              changeActive={this.changeActive}
            />
            <NavItem
              title="contact"
              icon="pencil-alt"
              activeItem={this.state.activeNavItem}
              changeActive={this.changeActive}
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;