import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SideModal from "./SideModal";
import { Link } from "react-router-dom";
import "../css/sideMenu.css";
import PageTitle from "./PageTitle";
import axios from "axios";

export default function SideMenuProduct({ depth2 }) {
  const [sideList, setSideList] = useState([]);
  const [selectedSide, setSelectedSide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const url = "http://127.0.0.1:8080/menu/sides";
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        console.log("res-->", res.data);
        setSideList(res.data);
      })
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

  const createRows = (sideList) => {
    const rows = [];
    for (let i = 0; i < sideList.length; i += 4) {
      rows.push(sideList.slice(i, i + 4));
    }
    return rows;
  };

  const renderSideDish = (side, showButton, isSingle, showOrderButton) => {
    const clickableContent = (
      <>
        <img className="side-box-in-image" src={side.simage} alt={side.sname} />
        {showButton && (
          <button
            className="side-modal-open-btn"
            onClick={(e) => {
              e.preventDefault(); // 기본 동작을 막습니다.
              e.stopPropagation(); // 이벤트 전파를 막습니다.
              openModal(side);
            }}
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        )}
      </>
    );

    const textContent = (
      <div className="side-product">
        <div className="side-title-box">
          <div className="side-title">{side.sname}</div>
          <span className="side-title-icon">{side.lable}</span>
        </div>
        <span className="side-price">{side.sprice}</span>
        {showOrderButton && (
          <div className="side-order-box">
            <button className="side-order-button">주문</button>
          </div>
        )}
      </div>
    );

    const linkStyle = selectedSide ? { pointerEvents: "none" } : {};

    return (
      <div key={side.sid} className="side-box-in">
        {isSingle ? (
          <Link to={`/sides/${side.sid}`} style={linkStyle}>
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
    nav5: "음료&기타",
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/popular",
    link5: "/beverage",
  });

  const check = (category) => {
    let categoryArray = [];
    categoryArray = sideList.filter((side) => side.category === category);
    return categoryArray;
  };

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div>
        <ul>
          <div className="category">콤보</div>
          <li>{renderRows(createRows(check("콤보")), false, false, true)}</li>
        </ul>
      </div>
      <div>
        <ul>
          <div className="category">단품</div>
          <li>{renderRows(createRows(check("단품")), true, true, false)}</li>
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
