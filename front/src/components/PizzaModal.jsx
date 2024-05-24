import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import PizzaMenuInfo from "./PizzaMenuInfo.jsx";

export default function PizzaModal({ pizza, onClose }) {
  return (
    <>
      <div className="modal">
        <div className="modalcontainer">
          <div className="modalcontent">
            <div className="modal-title">{pizza.title}</div>
            <button className="modalclosebtn" onClick={onClose}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <PizzaMenuInfo pizza={pizza} />
          </div>
        </div>
      </div>
    </>
  );
}
