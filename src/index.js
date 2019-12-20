import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faAddressCard, faProjectDiagram, faAngleRight, faAngleLeft, faDesktop, faCode, faPalette, faGraduationCap, faUsers} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab, faPencilAlt, faAddressCard, faProjectDiagram, faAngleRight, faAngleLeft, faDesktop, faCode, faPalette, faGraduationCap, faUsers );

ReactDOM.render(<App />, document.querySelector("#root"));