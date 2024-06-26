import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import MapContainer from "./MapContainer";
import DaumPostcode from "react-daum-postcode";

export default function OrderWayModal({
  type,
  onClose,
  handleAddress,
  handleChange,
}) {
  const modalRef = useRef();
  const [fadeOut, setFadeOut] = useState(false); //애니메이션

  const [isOpen, setIsOpen] = useState(false);

  const refs = {
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
  };

  /** 주소 검색 버튼 */
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    width: "600px",
    height: "600px",
    "text-align": "center",
    "align-item": "center",
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    handleAddress(`${address} (${zonecode})`); // 주소 설정
    setIsOpen(false);
    handleClose(); // 모달 닫기
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      if (refs.detailAddressRef.current) {
        refs.detailAddressRef.current.value = "";
        refs.detailAddressRef.current.focus();
      }
    }
  };

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
        return (
          <div style={{ height: "600px" }}>
            <DaumPostcode
              className="postmodal2"
              theme={themeObj}
              style={postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
          </div>
        );
      case "store":
        return <MapContainer />;
      case "pickupService":
        return (
          <div className="order-modal-info">
            <img
              className="order-modal-info-image"
              src="https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/event_list757.jpg"
              alt="pick-service"
            />
            <div className="order-modal-info-box">
              <h3 className="order-modal-info-title">유의사항</h3>
              <div className="order-modal-info-text-box">
                <span className="order-modal-info-text">
                  - 안전하고 신속한 서비스를 위해 지정한 픽업 위치에 오셔서
                  모바일 웹 또는 모바일 앱의 '나의정보 {">"} 주문내역'에서
                  '도착알림' 버튼을 눌러주세요.
                </span>
                <span className="order-modal-info-text">
                  - 본 서비스는 선 결제 주문에 한합니다.
                </span>
                <span className="order-modal-info-text">
                  - 드라이빙 픽업 주문 가능 매장은 이벤트 하단 유의사항을 참고해
                  주세요.
                </span>
              </div>
            </div>
          </div>
        );
      case "spot":
        return (
          <div>
            <DaumPostcode
              className="postmodal2"
              theme={themeObj}
              style={postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "address":
        return <div>배달주소 선택</div>;
      case "store":
        return <div>포장매장 등록</div>;
      case "pickupService":
        return <div>드라이빙 픽업 서비스 이용안내</div>;
      case "spot":
        return <div>DOMINO SPOT 등록</div>;
    }
  };

  return (
    <div className={`order-modal ${fadeOut ? "fade-out" : ""}`}>
      <div className="order-modal-container">
        <div className="order-modal-content" ref={modalRef}>
          <div className="order-modal-header">
            <button className="order-modal-close-btn" onClick={handleClose}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <div className="order-modal-content-title">{getTitle()}</div>
          </div>
          <div className="order-modal-body">{renderModalContent()}</div>
        </div>
      </div>
    </div>
  );
}
