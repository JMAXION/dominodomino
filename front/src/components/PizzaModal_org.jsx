import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import PizzaMenuInfo from "./PizzaMenuInfo.jsx";

export default function PizzaModal({ pizza }) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div className={"btn-wrapper"}>
        <button className={"modal-open-btn"} onClick={() => setModalOpen(true)}>
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
      {modalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <div>
              <PizzaMenuInfo pizza={pizza} />
            </div>
            <button
              className={"modal-close-btn"}
              onClick={() => setModalOpen(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
