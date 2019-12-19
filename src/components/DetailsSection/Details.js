import React from "react";
import DetailBox from "./DetailBox";

const Details = () => {
    return (
      <div>
        <div className="row justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-12 m-2 m-lg-3">
            <DetailBox icon="pencil-alt" />
          </div>
          <div className="col-lg-5 col-12 m-2 m-lg-3">
            <DetailBox icon="pencil-alt" />
          </div>
          <div className="col-lg-5 col-12 m-2 m-lg-3">
            <DetailBox icon="pencil-alt" />
          </div>
          <div className="col-lg-5 col-12 m-2 m-lg-3">
            <DetailBox icon="pencil-alt" />
          </div>
        </div>
      </div>
    );
};

export default Details;