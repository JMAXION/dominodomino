import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PopularSetMenuModal from "./PopularSetMenuModal";

export default function PopularSetMenuProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setAnimationClass("show-modal-animation");
      }, 10);

      return () => clearTimeout(timer);
    } else {
      setAnimationClass("");
    }
  }, [isModalOpen]);

  // 모달을 여는 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content">
      <div className="popular-set-menu">
        <div className="popular-set-menu-image">
          <img
            src="https://cdn.dominos.co.kr/admin/upload/event/20230519_217DoRW3.jpg"
            alt="combo"
          />
        </div>
        <div className="popular-set-menu-box">
          <div className="popular-set-menu-title">콤보 밀</div>
          <div className="popular-set-menu-title-date">
            2023-05-19 ~ 2024-06-30
          </div>
        </div>
        <button className="popular-modal-button" onClick={openModal}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {isModalOpen && (
          <PopularSetMenuModal
            onClose={closeModal}
            className={`modal ${animationClass}`}
          />
        )}
      </div>
    </div>
  );
}
