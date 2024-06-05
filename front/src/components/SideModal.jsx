import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import SideMenuInfo from "./SideMenuInfo";

export default function SideModal({ side, onClose }) {
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
      className={`side-modal ${fadeOut ? "fade-out" : ""}`}
      onClick={handleClose}
    >
      <div
        className="side-modal-container"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="side-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-title">{side.title}</div>
          <button
            className="side-modal-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <SideMenuInfo side={side} />
        </div>
      </div>
    </div>
  );
}
