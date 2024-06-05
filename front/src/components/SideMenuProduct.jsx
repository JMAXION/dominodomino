import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SideModal from "./SideModal";
import { Link } from "react-router-dom";
import "../css/sideMenu.css";
import PageTitle from "./PageTitle";

export default function SideMenuProduct({ depth2 }) {
  const [sideList, setSideList] = useState({
    combo: [],
    single: [],
  });

  const [selectedSide, setSelectedSide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    fetch("/data/sideAll.json")
      .then((res) => res.json())
      .then((data) => setSideList(data.side))
      .catch((error) => console.log(error));
  }, []);

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

  const openModal = (side) => {
    setSelectedSide(side);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSide(null);
  };

  const createRows = (category) => {
    const rows = [];
    for (let i = 0; i < category.length; i += 4) {
      rows.push(category.slice(i, i + 4));
    }
    return rows;
  };

  const renderSideDish = (side, showButton, isSingle, showOrderButton) => {
    const clickableContent = (
      <>
        <img className="side-box-in-image" src={side.image} alt={side.title} />
        {showButton && (
          <button
            className="side-modal-open-btn"
            onClick={() => openModal(side)}
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        )}
      </>
    );

    const textContent = (
      <div className="side-product">
        <div className="side-title-box">
          <div className="side-title">{side.title}</div>
          <span className="side-title-icon">{side.lable}</span>
        </div>
        {side.price_org !== undefined && (
          <>
            <span className="side-price-org">
              {side.price_org.toLocaleString()}
            </span>
          </>
        )}
        <span className="side-price">{side.price.toLocaleString()}원</span>
        {showOrderButton && (
          <div className="side-order-box">
            <button className="side-order-button">주문</button>
          </div>
        )}
      </div>
    );

    const linkStyle = selectedSide ? { pointerEvents: "none" } : {};

    return (
      <div key={side.id} className="side-box-in">
        {isSingle ? (
          <Link to={side.link} style={linkStyle}>
            {clickableContent}
          </Link>
        ) : (
          clickableContent
        )}
        {textContent}
      </div>
    );
  };

  const renderRows = (rows, showButton, isSingle, showOrderButton) => {
    return rows.map((row, index) => (
      <div key={index} className="side-box">
        {row.map((side) =>
          renderSideDish(side, showButton, isSingle, showOrderButton)
        )}
      </div>
    ));
  };

  const renderModal = () => {
    if (!selectedSide) return null;
    return (
      <div>
        <div>
          <SideModal side={selectedSide} onClose={closeModal} />
        </div>
      </div>
    );
  };
  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: "사이드디시",
    breadcrumbLink: "/pizzas",
    nav1: "피자",
    nav2: "하프앤하프",
    nav3: "사이드디시",
    nav4: "인기세트메뉴",
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/popular",
  });

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div>
        <ul>
          <div className="category">콤보</div>
          <li>{renderRows(createRows(sideList.combo), false, false, true)}</li>
        </ul>
      </div>
      <div>
        <ul>
          <div className="category">단품</div>
          <li>{renderRows(createRows(sideList.single), true, true, false)}</li>
        </ul>
      </div>
      <div className="grid"></div>
      {selectedSide && isModalOpen && (
        <SideModal side={selectedSide} onClose={closeModal} />
      )}
      <div className="note">
        <ul className="note-list">
          <div className="note-list-title">※ 유의사항</div>
          <li className="note-list-text">
            • 단종으로 인한 상품권 사용 안내: 동일 가격 또는 더 높은 가격의
            제품으로 대체 주문 가능 <br />
            &nbsp;&nbsp;(상품권에 명시된 제품보다 더 높은 가격대의 제품 주문 시,
            금액 추가 발생) <br />
            &nbsp;&nbsp;(단, 상품권에 명시된 제품보다 저렴한 제품 주문 시
            발생하는 차액에 대해서는 환불 처리 불가)
          </li>
          <li className="note-list-text">
            • 일부 리조트 및 특수매장은 상기 가격과 차이가 있음
          </li>
          <li className="note-list-text">
            • 모든 사진은 이미지 컷이므로 실제 제품과 다를 수 있습니다.
          </li>
        </ul>
        <div className="note-allergy">
          <div className="note-allergy-text">
            제품의 원산지, 영양성분 및 알레르기 유발성분을 먼저 확인하세요.
          </div>
          <div className="note-allergy-button">
            원산지 영앙성분•알레르기 유발성분 정보
            <FontAwesomeIcon
              className="note-allergy-button-icon"
              icon={faChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
