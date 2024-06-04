import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPizzaSlice,
  faTriangleExclamation,
  faPlus,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import OrderWayModal from "./OrderWayModal";

export default function OrderWay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setAnimationClass("show-modal-animation");
      }, 10);
    } else {
      setAnimationClass("");
    }
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  const [orderType, setOrderType] = useState(null);

  const renderContent = () => {
    if (orderType === "delivery") {
      return (
        <>
          <div className="delivery-box">
            <div className="topbar-left">
              <FontAwesomeIcon icon={faPizzaSlice} /> 밖에서 도미노피자 먹고
              싶을 땐?
            </div>
            <div
              className="topbar-right"
              onClick={() => {
                openModal("spot");
              }}
            >
              DOMINO SPOT 배달 <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="tip-box">야외에서도 피자배달</div>
          <div className="order-box">
            <div className="order-content">
              <div className="order-content-text">
                <FontAwesomeIcon icon={faTriangleExclamation} /> 배달주소를
                등록해주세요.
              </div>
              <button
                className="order-content-button"
                onClick={() => {
                  openModal("address");
                }}
              >
                <FontAwesomeIcon icon={faPlus} /> 배달주소 등록
              </button>
            </div>
          </div>
          <div className="order-content-tip">
            <span className="order-content-tip-text">
              *배달주소는 최대 10개까지만 등록 가능합니다.
            </span>
          </div>
        </>
      );
    } else if (orderType === "pickup") {
      return (
        <>
          <div className="pickup-box">
            <div className="topbar-left">
              <FontAwesomeIcon icon={faCar} /> 모바일로 주문하고 차에서
              바로받자!
            </div>
            <div
              className="topbar-right"
              onClick={() => {
                openModal("pickupService");
              }}
            >
              도미노 드라이빙 픽업 서비스{" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>

          <div className="order-box">
            <div className="order-content">
              <div className="order-content-text">
                <FontAwesomeIcon icon={faTriangleExclamation} /> 포장매장을
                등록해주세요.
              </div>
              <button
                className="order-content-button"
                onClick={() => {
                  openModal("store");
                }}
              >
                <FontAwesomeIcon icon={faPlus} /> 포장매장 등록
              </button>
            </div>
          </div>
          <div className="order-content-tip">
            <span className="order-content-tip-text">
              *포장매장은 최대 5개까지만 등록 가능합니다.
            </span>
          </div>
        </>
      );
    }
  };

  return (
    <div className="content">
      <ul>
        <li
          className={`order-button ${
            orderType === "delivery" ? "selected" : "unselected"
          }`}
          onClick={() => setOrderType("delivery")}
        >
          배달 주문
        </li>
        <li
          className={`order-button ${
            orderType === "pickup" ? "selected" : "unselected"
          }`}
          onClick={() => setOrderType("pickup")}
        >
          포장 주문
        </li>
      </ul>
      <div>{renderContent()}</div>
      {isModalOpen && <OrderWayModal type={modalType} onClose={closeModal} />}
    </div>
  );
}
