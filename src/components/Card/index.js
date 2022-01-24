import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faCircle,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { DEADLINE_STATUS, TAGS_MAP } from "../../constants";
import "./index.css";
import Image from "../../assets/4.jpg";
import { formatCurrency } from "../../helpers";

const Card = ({ card }) => {
  const rating = React.useMemo(() => {
    const checkedStars = Array.from(Array(card.rate)).map((star, i) => (
      <FontAwesomeIcon
        key={`filled-${i}`}
        icon={faStarSolid}
        className="checked"
      />
    ));

    const emptyStars = Array.from(Array(3 - checkedStars.length)).map(
      (star, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className="color-light"
        />
      )
    );

    return [...checkedStars, ...emptyStars];
  }, [card.rate]);

  return (
    <div
      className="mb-2 shadow-sm py-2 px-3 bg-white rounded-2"
      style={{
        borderLeft: `3px solid ${DEADLINE_STATUS[card.deadline_status]}`,
      }}
    >
      <h5 className="fw-bold mb-0">{card.title}</h5>

      <div className="d-flex">
        {card.tags.map((tag) => (
          <small
            key={tag}
            className="color-light mb-2 d-flex align-items-center"
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="dot d-block"
              color={TAGS_MAP[tag.toLowerCase()]}
            />
            <span className="fw-bold">{tag}</span>
          </small>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex flex-column">
          <p className="color-light mb-0">{formatCurrency(card.cost)}</p>

          <div className="d-flex align-items-center">
            {rating}

            <div className="d-inline-block mx-1">
              <FontAwesomeIcon
                icon={faClock}
                color={DEADLINE_STATUS[card.deadline_status]}
              />
            </div>
          </div>
        </div>

        <img
          src={Image}
          className="cardimg ml-2 img-thumbnail rounded-circle border-0"
        />
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
