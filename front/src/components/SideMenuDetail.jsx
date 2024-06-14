import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageTitle from "./PageTitle";
import { getUser } from "../util/localStorage";
import axios from "axios";
import "../css/sideMenuDetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons";

import ChoiceDrink from "../components/ChoiceDrink";
import QtyoptionComp from "./QtyoptionComp";
import Allergy2 from "./Allergy";
import SideDetailOption from "./SideDetailOption";

export default function SideMenuDetail({ depth2 }) {
  const { id } = useParams();
  const [side, setSide] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSide, setSelectedSide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const userInfo = getUser();
  const handleSideChange = (selectedValue, selectedOption) => {
    setSelectedSide(selectedOption);
  };

  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: side ? side.pname : "사이드메뉴", // 여기를 상품의 이름으로 바꾸고 싶은거야 {pizza.pname}이 출력되게
    breadcrumbLink: "/sides",
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

  let tp = 0;

  const openModal = (side) => {
    setSelectedSide(side);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSide(null);
  };

  useEffect(() => {
    if (side) {
      setprops((prevProps) => ({
        ...prevProps,
        breadcrumb: side.sname,
      }));
    }
  }, [side]);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/sides/${id}`;
    axios
      .get(url)
      .then((res) => {
        setSide(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
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

  const [selected, setSelected] = useState({
    large: true,
    mideum: false,
    size: "L",
    dough: "없음",
    doughPrice: null,
    leftPizzaId: null,
    rightPizzaId: null,
    edge: "",
    edgePrice: null,
    qty: 1,
  });

  function handleChange4({ type, count }) {
    let qty = count;
    //  alert(type+count)
    if (type === "plus") qty = qty + 1;
    else qty = qty - 1;
    // alert(qty)
    setSelected({ ...selected, qty: qty });
  }

  function handleChange6(event) {
    setDrinkMenu(event);
  }

  const [sideMenu, setSideMenu] = useState({
    quantity: 1,
    sname: "",
    simage: "0",
    skind: "0",
    sprice: "",
    sid: 0,
  });

  const [drinkMenu, setDrinkMenu] = useState([
    {
      quantity: 1,
      bname: "없음",
      bimage: "0",
      bprice: 2000,
      bid: 0,
    },
  ]);

  const [order, setOrder] = useState({
    pizzaLeftName: "",
    pizzaRightName: "",
    pizzaQty: 1,
    doughName: "없음",
    edgeName: "없음",
    toppingName: "",
    sideName: "",
    drinkName: "",
    totalPrice: 0,
    user: "",
    orderTime: "",
    uid: 1,
  });

  const openAndClose = () => {
    setShowMore(!showMore);
  };

  function handleChange(e, d) {
    // console.log(e);
    // console.log(d.price);
    setSideMenu({ sname: e, sprice: d.price });
  }

  function settingOrder() {
    let sideName = "";
    let drinkName = "";
    for (let i = 0; i < sideMenu.length; i++) {
      sideName +=
        sideMenu[i].sname +
        " " +
        sideMenu[i].sprice +
        " " +
        sideMenu[i].quantity +
        " ";
      setOrder({
        ...order,
        sideName: sideName,
        drinkName: drinkName,
        user: userInfo.userId,
        totalPrice: tp,
        uid: 1,
      });
    }
    alert("주문이 완료되었습니다");
  } // FUNCT

  return (
    <>
      <PageTitle props={props} depth2={depth2} />
      <div className="content">
        <div className="side-detail-content">
          <div className="side-detail-image-box">
            <img
              className="side-detail-image"
              src={side.simage}
              alt={side.sname}
            />
            <button
              className="modalopenbtn-pizzaDetail"
              onClick={() => openModal(side)}
            >
              <FontAwesomeIcon icon={faExpand} /> <span>제품상세</span>
            </button>
            <div className="side-detail-image-text">
              <div>*모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.</div>
              <div>
                * 원산지 정보는 사진 우측 하단 돋보기 메뉴를 통해 확인
                가능합니다.
              </div>
            </div>
          </div>
          <div className="side-detail-info">
            <div className="side-detail-info-title">{side.sname}</div>
            <Allergy2 />
            <SideDetailOption id={id} onClick={handleChange} />
            <QtyoptionComp onClick={handleChange4} />
            <ChoiceDrink onClick={handleChange6} />
          </div>
        </div>
        <div className="step-order">
          <div
            className={`order-wrap inner-box ${
              showMore ? "show-more" : "order-wrap inner-box"
            }`}
          >
            <button
              className={`show-more-button ${
                showMore ? "more-open" : "show-more-button"
              }`}
              onClick={openAndClose}
            >
              전체 보기
            </button>
            <dl className="side">
              <dt>사이드디시</dt>
              <dd>
                {/* {pizzaRight && pizzaLeft && <p> </p>} */}
                <input type="hidden" />
                <input type="hidden" />
                <ul className="select-menu">
                  <li>
                    {sideMenu.sname}
                    {sideMenu.sprice}
                  </li>
                </ul>
              </dd>
            </dl>
            <dl className="drink-etc">
              <dt>음료 & 기타</dt>
              <dd>
                {/* {pizzaRight && pizzaLeft && <p> </p>} */}
                <input type="hidden" />
                <input type="hidden" />
                <ul className="select-menu">
                  {drinkMenu[1] && (
                    <li>
                      {drinkMenu[1].bname}(+
                      {drinkMenu[1].bprice.toLocaleString()}원)x
                      {drinkMenu[1].quantity}{" "}
                      <em hidden>
                        {(tp += drinkMenu[1].bprice * drinkMenu[1].quantity)}
                      </em>
                    </li>
                  )}
                  {drinkMenu[2] && (
                    <li>
                      {drinkMenu[2].bname}(+
                      {drinkMenu[2].bprice.toLocaleString()}원)x
                      {drinkMenu[2].quantity}
                      <em hidden>
                        {(tp += drinkMenu[2].bprice * drinkMenu[2].quantity)}
                      </em>
                    </li>
                  )}
                  {drinkMenu[3] && (
                    <li>
                      {drinkMenu[3].bname}(+
                      {drinkMenu[3].bprice.toLocaleString()}원)x
                      {drinkMenu[3].quantity}
                      <em hidden>
                        {(tp += drinkMenu[3].bprice * drinkMenu[3].quantity)}
                      </em>
                    </li>
                  )}
                  {drinkMenu[4] && (
                    <li>
                      {drinkMenu[4].bname}(+
                      {drinkMenu[4].bprice.toLocaleString()}원)x
                      {drinkMenu[4].quantity}
                      <em hidden>
                        {(tp += drinkMenu[4].bprice * drinkMenu[4].quantity)}
                      </em>
                    </li>
                  )}
                  {drinkMenu[5] && (
                    <li>
                      {drinkMenu[5].bname}(+
                      {drinkMenu[5].bprice.toLocaleString()}원)x
                      {drinkMenu[5].quantity}
                      <em hidden>
                        {(tp += drinkMenu[5].bprice * drinkMenu[5].quantity)}
                      </em>
                    </li>
                  )}
                </ul>
              </dd>
            </dl>
            <div className="total-price">
              <div id="login-order-btn">
                <span className="total-money">총 금액 </span>
                <stong className="money">{tp.toLocaleString()}원</stong>
              </div>

              {userInfo ? (
                <div className="btn-wrap">
                  <button onClick={settingOrder}>주문확정</button>
                  <Link
                    to={{
                      pathname: "/menu/halfnhalf/orderok",
                      state: { order },
                    }}
                  >
                    <div hidden>{/* <HnhOrder order={order} /> */}</div>
                    <button
                      type="button"
                      className="btn-type"
                      onClick={settingOrder}
                    >
                      주문확인{" "}
                    </button>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <div className="btn-wrap">
                    <button type="button" className="btn-type">
                      주문하기{" "}
                    </button>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
