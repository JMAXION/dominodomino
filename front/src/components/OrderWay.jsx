import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPizzaSlice,
  faTriangleExclamation,
  faPlus,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import OrderWayModal from "./OrderWayModal";
import PageTitle from "./PageTitle";

export default function OrderWay({ depth2 }) {
  const location = useLocation({});
  const [orderType, setOrderType] = useState(location.state?.orderType || null);
  const [props, setprops] = useState({
    title: "주문방법 선택",
    // breadcrumbLink: "/law"
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const [addresses, setAddresses] = useState([]);

  console.log(location.state.place);
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

  const handleAddress = (address) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
  };

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

          {addresses.length > 0 ? (
            <div className="order-box-content">
              {addresses.map((address, index) => (
                <div key={index} className="address-box">
                  <div>
                    <input type="radio" />
                    {address}
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}
          <div className="order-content-tip">
            {addresses.length > 0 ? (
              <div className="delivery-box2">
                <button
                  className="order-content-button"
                  onClick={() => {
                    openModal("address");
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} /> 배달주소 등록
                </button>
                <span className="order-content-tip-text">
                  *배달주소는 최대 10개까지만 등록 가능합니다.
                </span>
              </div>
            ) : (
              <span className="order-content-tip-text">
                *배달주소는 최대 10개까지만 등록 가능합니다.
              </span>
            )}
          </div>
          {addresses.length > 0 ? (
            <div className="order-select" style={{ padding: "55px 0" }}>
              <ul>
                <li>개인정보 수집 이용 동의(필수)</li>
                <li>수집정보 : 배달지 주소</li>
                <li>수집목적 : 제품 배달서비스 제공</li>
                <li>보유기간 : 관련 법령에 따라 보관 후 파기</li>
              </ul>
              <ul className="order-select-button">
                <li>
                  개인정보 수집 및 이용에 동의하며 선택한 배달주소로
                  <br /> 주문을 진행하시겠습니까?
                </li>
                <button className="order-select-button-button">
                  <Link to="/pizzas" style={{ color: "white" }}>
                    메뉴 선택
                  </Link>
                </button>
              </ul>
            </div>
          ) : (
            <p style={{ "padding-bottom": "110px" }}></p>
          )}
          <div></div>
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
            {location && location.state.place.name ? (
              <div className="order-box-content2">
                <input type="radio" />
                {location.state.place.name}
                <p>
                  <li>{location.state.place.address}</li>
                  <li>{location.state.place.phone}</li>
                </p>
              </div>
            ) : (
              <div className="order-content">
                <div className="order-content-text">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                  포장매장을 등록해주세요.
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
            )}
          </div>
          <div className="order-content-tip">
            {location && location.state.place.name ? (
              <div className="delivery-box2">
                <button
                  className="order-content-button"
                  onClick={() => {
                    openModal("store");
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} /> 배달주소 등록
                </button>
                <span className="order-content-tip-text">
                  *포장매장은 최대 5개까지만 등록 가능합니다.
                </span>
              </div>
            ) : (
              <span className="order-content-tip-text">
                *포장매장은 최대 5개까지만 등록 가능합니다.
              </span>
            )}
            {location && location.state.place.name ? (
              <div
                className="order-select"
                style={{ color: "black", padding: "55px 0" }}
              >
                <ul>
                  <li>개인정보 수집 이용 동의(필수)</li>
                  <li>수집정보 : 배달지 주소</li>
                  <li>수집목적 : 제품 배달서비스 제공</li>
                  <li>보유기간 : 관련 법령에 따라 보관 후 파기</li>
                </ul>
                <ul className="order-select-button">
                  <li>
                    개인정보 수집 및 이용에 동의하며 선택한 배달주소로
                    <br /> 주문을 진행하시겠습니까?
                  </li>
                  <button className="order-select-button-button">
                    <Link
                      to="/pizzas"
                      style={{ color: "white" }}
                      state={location}
                    >
                      메뉴 선택
                    </Link>
                  </button>
                </ul>
              </div>
            ) : (
              <p style={{ "padding-bottom": "110px" }}></p>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <>
      <PageTitle props={props} depth2={depth2} />
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
        {isModalOpen && (
          <OrderWayModal
            type={modalType}
            onClose={closeModal}
            handleAddress={handleAddress}
          />
        )}
      </div>
    </>
  );
}
