import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import SideMenuInfo from "./SideMenuInfo";

export default function SideModal({ side, onClose }) {
  return (
    <div>
      <>
        <div className="side-modal">
          <div className="side-modal-container">
            <div className="side-modal-content">
              <div className="modal-title">{side.title}</div>
              <button className="side-modal-close-btn" onClick={onClose}>
                <FontAwesomeIcon icon={faX} />
              </button>
              <SideMenuInfo side={side} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
