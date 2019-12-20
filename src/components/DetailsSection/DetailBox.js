import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailBox = (props) => {
    return(
        <div className="text-center col-lg-5 col-12 m-2 m-lg-3 custom_details_box">
            <div className="custom_details_icon">
                <FontAwesomeIcon
                    icon={props.icon}
                />
            </div>
            <div className="custom_details_body">
                <div className="custom_details_title">
                    {props.title}
                </div>
                <p className="custom_details_text">
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default DetailBox;