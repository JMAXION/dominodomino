import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SideMenuInfoToggle({ title, content }) {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <>
      <div className="modal-content-list-toggle">
        <ul className="modal-content-list-toggle-box">
          <li className="modal-content-list-toggle-box-title">
            <p className="modal-content-list-toggle-box-title-text">{title}</p>
          </li>
          <button
            className="modal-content-list-toggle-box-button"
            onClick={() => {
              setIsCheck((e) => !e);
            }}
          >
            {isCheck ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </ul>
      </div>
      <div
        className={`modal-content-list-toggle-box-text ${
          isCheck ? "expanded" : ""
        }`}
      >
        <p className="modal-content-list-toggle-box-text-in">{content}</p>
      </div>
    </>
  );
}
