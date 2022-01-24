import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const AddList = ({ onClick }) => {
  return (
    <div
      className="d-flex flex-column add-new-list color-light"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlus} className="icon" />

      <p className="rotate-90 fw-bold">Add new Column</p>
    </div>
  );
};

AddList.propTypes = {};

export default AddList;
