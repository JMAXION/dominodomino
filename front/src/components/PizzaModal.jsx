import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PizzaMenuInfo from "./PizzaMenuInfo.jsx";

export default function PizzaModal({ pizza, onClose }) {
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
    <div className={`modal ${fadeOut ? "fade-out" : ""}`} onClick={handleClose}>
      <div
        className="modalcontainer"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalcontent" onClick={(e) => e.stopPropagation()}>
          <div className="modal-title">{pizza.title}</div>
          <button
            className="modalclosebtn"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <PizzaMenuInfo pizza={pizza} />
        </div>
      </div>
    </div>
  );
}
