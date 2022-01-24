import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import "../../icons/MessageIcon/MessageIcon.css";

function MessageIcon() {
  return (
    <div className="parent">
      <span className="badge btn-primary">15</span>

      <FontAwesomeIcon
        icon={faComments}
        className="Message color-light"
      ></FontAwesomeIcon>
    </div>
  );
}

export default MessageIcon;
