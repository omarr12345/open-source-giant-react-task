import React from "react";
import "../PlanetIcon/PlanetIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

function PlanetIcon() {
  return (
    <div>
      <div className="parent">
        <span className="badge btn-primary">10</span>

        <FontAwesomeIcon
          icon={faGlobeEurope}
          className="Message color-light"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default PlanetIcon;
