import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

class Technology extends React.Component {
  renderBrandPopover = () => {
    return (
      <Popover id="popover-basic">
        <Popover.Content>
          <div>
            {this.props.title}
          </div>
        </Popover.Content>
      </Popover>
    );
  }

  render(){
    return (
      <div className="custom_tech_card">
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={this.renderBrandPopover()}
        >
          <FontAwesomeIcon
            className="custom_tech_navIcon"
            icon={['fab', this.props.icon]}
          />
        </OverlayTrigger>
      </div>
    );
  }
}

export default Technology;