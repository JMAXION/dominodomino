import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import MapModalInfo from "./MapModalInfo";

export default function MapContainerModal({ type, onClose }) {
  const modalRef = useRef();
  const [fadeOut, setFadeOut] = useState(false); //애니메이션

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
  }; // 애니메이션

  const renderModalContent = () => {
    switch (type) {
      case "address":
        return <MapModalInfo />;
      case "store":
        return <p>hello hi</p>;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "address":
        return <div>상세보기</div>;
      case "store":
        return <div>방문포장</div>;
    }
  };

  return (
    <div className={`map-modal ${fadeOut ? "fade-out" : ""}`}>
      <div className="map-modal-container">
        <div className="map-modal-content" ref={modalRef}>
          <div className="map-modal-header">
            <button className="map-modal-close-btn" onClick={handleClose}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <div className="map-modal-content-title">{getTitle()}</div>
          </div>
          <div className="map-modal-body">{renderModalContent()}</div>
        </div>
      </div>
    </div>
  );
}
