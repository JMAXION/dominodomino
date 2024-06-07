import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PopularSetMenuModalInfo from "./PopularSetMenuModalInfo";

export default function PopularSetMenuModal({ onClose }) {
  const modalRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div
      className={`modal-popular ${fadeOut ? "fade-out" : ""}`}
      onClick={handleClose}
    >
      <div
        className="modal-popular-container"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
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
