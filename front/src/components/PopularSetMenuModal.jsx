import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PopularSetMenuModalInfo from "./PopularSetMenuModalInfo";

export default function PopularSetMenuModal({ onClose, className }) {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-popular")) {
      onClose();
    }
  };

  return (
    <div className={`modal-popular ${className}`} onClick={handleOutsideClick}>
      <div className="modal-popular-container">
        <div className="modal-popular-content">
          <div className="modal-popular-title">콤보 밀</div>
          <button onClick={onClose} className="modalclosebtn">
            <FontAwesomeIcon icon={faX} />
          </button>
          <PopularSetMenuModalInfo />
        </div>
      </div>
    </div>
  );
}
