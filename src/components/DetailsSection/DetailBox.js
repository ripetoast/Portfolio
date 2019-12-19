import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailBox = (props) => {
    return(
        <div className="text-center custom_details_box">
            <div className="custom_details_icon">
                <FontAwesomeIcon
                    icon={props.icon}
                />
            </div>
            <div className="custom_details_body">
                <div className="custom_details_title">
                    DetailBox
                </div>
                <p className="custom_details_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolor, perspiciatis perferendis unde eligendi minima nemo ex. Ipsa nobis vitae, nam totam officia autem fugiat optio veniam assumenda, minima tempora!
                </p>
            </div>
        </div>
    );
};

export default DetailBox;