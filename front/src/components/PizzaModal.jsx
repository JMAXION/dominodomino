import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import PizzaMenuInfo from "./PizzaMenuInfo.jsx";

export default function PizzaModal({ pizza, onClose }) {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const handleClose = () => {
    const modalElemnet = document.querySelector(".modal");
    modalElemnet.classList.add("hide");
    setTimeout(onClose, 300);
  };

  return (
    <>
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modalcontainer" ref={modalRef}>
          <div className="modalcontent">
            <div className="modal-title">{pizza.title}</div>
            <button className="modalclosebtn" onClick={handleClose}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <PizzaMenuInfo pizza={pizza} />
          </div>
        </div>
      </div>
    </>
  );
}
