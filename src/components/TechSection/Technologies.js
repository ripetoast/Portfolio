import React from "react";
import Technology from "./Technology";

const Technologies = () => {
    return (
      <div>
        <br />
        {/* Front End */}
        <div className="row justify-content-center">
          <div className="col-2 mx-2">
            <Technology title="JavaScript" icon="js" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="HTML5" icon="html5" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="CSS3" icon="css3" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="SASS" icon="sass" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="React" icon="react" />
          </div>
        </div>
        {/* Back End */}
        <div className="row justify-content-center">
          <div className="col-2 mx-2">
            <Technology title="NodeJS" icon="node-js" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="Laravel" icon="laravel" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="PHP" icon="php" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="Python" icon="python" />
          </div>
        </div>
        {/* Other */}
        <div className="row justify-content-center">
          <div className="col-2 mx-2">
            <Technology title="Slack" icon="slack" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="Git" icon="git" />
          </div>
          <div className="col-2 mx-2">
            <Technology title="Github" icon="github" />
          </div>
        </div>
      </div>
    );
};

export default Technologies;