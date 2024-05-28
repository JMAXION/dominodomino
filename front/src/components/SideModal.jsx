import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import SideMenuInfo from "./SideMenuInfo";

export default function SideModal({ side, onClose }) {
  return (
    <div>
      <>
        <div className="modal">
          <div className="modalcontainer">
            <div className="modalcontent">
              <div className="modal-title">{side.title}</div>
              <button className="modalclosebtn" onClick={onClose}>
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
