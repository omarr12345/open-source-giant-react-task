import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../helpers";
import { DEADLINE_STATUS } from "../../constants";

const ListTitle = ({ title, total, statusCount, onAdd }) => {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-start">
        <h4 className="mb-2 fw-bold">{title}</h4>
        <FontAwesomeIcon
          icon={faPlus}
          className="color-light fw-bold"
          onClick={onAdd}
        />
      </div>

      <div className="d-flex justify-content-start align-content-center">
        <div className="d-flex align-items-center flex-grow-1 mr-2">
          <div
            className="newcolor"
            style={{
              width: statusCount.safeCount + "%",
              backgroundColor: DEADLINE_STATUS.safe,
            }}
          ></div>
          <div
            className="newcolor"
            style={{
              width: statusCount.soonCount + "%",
              backgroundColor: DEADLINE_STATUS.soon,
            }}
          ></div>
          <div
            className="newcolor"
            style={{
              width: statusCount.overdueCount + "%",
              backgroundColor: DEADLINE_STATUS.overdue,
            }}
          ></div>
          <div
            className="newcolor"
            style={{
              width: statusCount.notSetCount + "%",
              backgroundColor: DEADLINE_STATUS.not_set,
            }}
          ></div>
        </div>

        <div>
          <div className="totalPrice">{formatCurrency(total, false)}</div>
        </div>
      </div>
    </div>
  );
};

ListTitle.propTypes = {};

export default ListTitle;
