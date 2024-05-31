import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/pizzaMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons";
import PizzaModal from "./PizzaModal.jsx";
import PageTitle from "./PageTitle.jsx";

export default function PizzaMenuProduct({ depth2 }) {
  const [pizzaList, setPizzaList] = useState({
    pizza: {
      new: [],
      premium: [],
      halfSignature: [],
      classic: [],
      happyDaily: [],
    },
  });
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    fetch("data/pizzaAll.json")
      .then((res) => res.json())
      .then((data) => setPizzaList(data))
      .catch((error) => console.log(error));
  }, []);

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
  };

  const closeModal = () => {
    setSelectedPizza(null);
  };

  const createRows = (category) => {
    const rows = [];
    for (let i = 0; i < category.length; i += 4) {
      rows.push(category.slice(i, i + 4));
    }
    return rows;
  };

  const renderRows = (rows) => {
    return rows.map((row, index) => (
      <div key={index} className="pizzabox">
        {row.map((pizza, idx) => (
          <div key={idx} className="pizza-box-in">
            <Link to={`/pizzas/${pizza.id}`}>
              <img
                className="pizza-box-in-image"
                src={pizza.image}
                alt={pizza.title}
              />
            </Link>
            <button className="modalopenbtn" onClick={() => openModal(pizza)}>
              <FontAwesomeIcon icon={faExpand} />
            </button>
            {selectedPizza && (
              <PizzaModal pizza={selectedPizza} onClose={closeModal} />
            )}
            <div className="pizza-product">
              <div className="pizza-title-box">
                <span className="pizza-title">{pizza.title}</span>
                <span className="pizza-title-icon">{pizza.lable}</span>
              </div>
              <div className="pizza-price-box">
                <span className="pizza-price-size-L">L</span>
                <span className="pizza-price-L">
                  {pizza.lPrice.toLocaleString()}원
                </span>
                {pizza.mPrice !== undefined && ( // mPrice가 있는 경우에만 출력
                  <>
                    <span className="pizza-price-size-M">M</span>
                    <span className="pizza-price-M">
                      {pizza.mPrice.toLocaleString()}원
                    </span>
                  </>
                )}
              </div>
              <div className="pizza-tag">
                <div>{pizza.tag1}</div>
                <div className="pizza-tag-2">{pizza.tag2}</div>
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
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/",
  });

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div>
        <ul>
          <div className="category">NEW</div>
          <li>{renderRows(createRows(pizzaList.pizza.new))}</li>
        </ul>
        <ul>
          <div className="category">프리미엄</div>
          <li>{renderRows(createRows(pizzaList.pizza.premium))}</li>
        </ul>
        <ul>
          <div className="category">하프앤하프 시그니처</div>
          <li>{renderRows(createRows(pizzaList.pizza.halfSignature))}</li>
        </ul>
        <ul>
          <div className="category">클래식</div>
          <li>{renderRows(createRows(pizzaList.pizza.classic))}</li>
        </ul>
        <ul>
          <div className="category">Happy Daily Pizza</div>
          <li>{renderRows(createRows(pizzaList.pizza.happyDaily))}</li>
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
    </div>
  );
}
