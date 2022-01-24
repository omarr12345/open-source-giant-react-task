import React from "react";
import "./index.css";
import Image from "../../assets/5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import Card from "../Card";
import {
  faCircle,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import MessageIcon from "../icons/MessageIcon/MessageIcon";
import PlanetIcon from "../icons/PlanetIcon/PlanetIcon";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a href="#">
            <FontAwesomeIcon
              icon={faThinkPeaks}
              className="highlight"
            ></FontAwesomeIcon>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <a className=" my-site" aria-current="page" href="#">
                  My Site
                </a>
              </li>
            </ul>

            <PlanetIcon />
            <MessageIcon />

            <div className="d-flex justify-content-start justify-content-between align-content-center align-items-center p-1">
              <img
                className="rounded-circle border-1 img-fluid  admin-img m-lg-1"
                src={Image}
              />
              <p className=" fw-bold admin">Administrator</p>
            </div>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
}

export default Navbar;
