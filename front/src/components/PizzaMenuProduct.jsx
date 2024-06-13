import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/pizzaMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons";
import PizzaModal from "./PizzaModal.jsx";
import PageTitle from "./PageTitle.jsx";
import axios from "axios";

export default function PizzaMenuProduct({ depth2 }) {
  const [pizzaList, setPizzaList] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const url = "http://127.0.0.1:8080/menu/pizzas";
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        //console.log(res.data);
        setPizzaList(res.data);
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

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  const createRows = (pizzaList) => {
    //파라미터가 비어있으면 useState의 pizzaList(전체)가 출력됨
    const rows = [];
    for (let i = 0; i < pizzaList.length; i += 4) {
      rows.push(pizzaList.slice(i, i + 4));
    }
    return rows;
  };

  const renderRows = (rows) => {
    return rows.map((row, index) => (
      <div key={index} className="pizzabox">
        {row.map((pizza, idx) => (
          <div key={idx} className="pizza-box-in">
            <Link to={`/pizzas/${pizza.pid}`}>
              <img
                className="pizza-box-in-image"
                src={pizza.menuimg}
                alt={pizza.pname}
              />
            </Link>
            <button className="modalopenbtn" onClick={() => openModal(pizza)}>
              <FontAwesomeIcon icon={faExpand} />
            </button>
            <div className="pizza-product">
              <div className="pizza-title-box">
                <span className="pizza-title">{pizza.pname}</span>
                <span className="pizza-title-icon">{pizza.lable}</span>
              </div>
              <div className="pizza-price-box">
                <span className="pizza-price-size-L">L</span>
                <span className="pizza-price-L">{pizza.lprice}</span>
                {pizza.mprice ? ( // mPrice가 있는 경우에만 출력
                  <>
                    <span className="pizza-price-size-M">M</span>
                    <span className="pizza-price-M">{pizza.mprice}</span>
                  </>
                ) : null}
              </div>
              <div className="pizza-tag">
                <div>{pizza.desc1}</div>
                <div className="pizza-tag-2">{pizza.desc2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  };
  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: "피자",
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

  const check = (mcategory) => {
    let mcategoryArray = [];
    mcategoryArray = pizzaList.filter((pizza) => pizza.mcategory === mcategory);
    console.log("mcategoryArray ==>", mcategoryArray);
    return mcategoryArray;
  };

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div>
        <ul>
          <div className="category">New</div>
          <li>{renderRows(createRows(check("new")))}</li>
        </ul>
        <ul>
          <div className="category">프리미엄</div>
          <li>{renderRows(createRows(check("프리미엄")))}</li>
        </ul>
        <ul>
          <div className="category">하프앤하프 시그니처</div>
          <li>{renderRows(createRows(check("하프앤하프 시그니처")))}</li>
        </ul>
        <ul>
          <div className="category">클래식</div>
          <li>{renderRows(createRows(check("클래식")))}</li>
        </ul>
        <ul>
          <div className="category-happy">Happy Daily Pizza</div>
          <span className="category-text">
            매일 매일 도미노를 끝없이 만나보세요!
          </span>
          <li>{renderRows(createRows(check("Happy Daily Pizza")))}</li>
        </ul>
      </div>
      <div className="grid"></div>
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
      {selectedPizza && isModalOpen && (
        <PizzaModal pizza={selectedPizza} onClose={closeModal} />
      )}
    </div>
  );
}
