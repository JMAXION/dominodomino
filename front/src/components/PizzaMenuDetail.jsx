import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ChoiceSide from "./ChoiceSide";
import PizzaModal from "./PizzaModal";
import PageTitle from "./PageTitle";
import { getUser } from "../util/localStorage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons";

import "../css/pizzaMenuDetail.css";
import Allergy2 from "./Allergy2";
import PizzaDetailDough from "./PizzaDetailDough";
import PizzaDetailEdge from "./PizzaDetailEdge";
import PizzaDetailTopping from "./PizzaDetailTopping";
import ChoiceDrink from "../components/ChoiceDrink";
import QtyoptionComp from "./QtyoptionComp";

export default function PizzaMenuDetail({ depth2 }) {
  const { id } = useParams();
  const [pizza, setPizza] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [showMore, setShowMore] = useState(false);
  const userInfo = getUser();

  let tp = 0;
  const initialToppingQty = [
    {
      quantity: 0,
      tname: "",
      timage: "0",
      tkind: "0",
      tprice: "",
      tid: 0,
    },
  ];

  const [topping, setTopping] = useState([
    {
      quantity: 1,
      tname: "",
      timage: "0",
      tkind: "0",
      tprice: 2000,
      tid: 0,
    },
  ]);
  const [sideMenu, setSideMenu] = useState([
    {
      quantity: 1,
      sname: "없음",
      simage: "0",
      skind: "0",
      sprice: 2000,
      sid: 0,
    },
  ]);
  const [drinkMenu, setDrinkMenu] = useState([
    {
      quantity: 1,
      bname: "없음",
      bimage: "0",
      bprice: 2000,
      bid: 0,
    },
  ]);
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
  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: pizza ? pizza.pname : "피자", // 여기를 상품의 이름으로 바꾸고 싶은거야 {pizza.pname}이 출력되게
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

  useEffect(() => {
    if (pizza) {
      setprops((prevProps) => ({
        ...prevProps,
        breadcrumb: pizza.pname,
      }));
    }
  }, [pizza]);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/pizzas/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPizza(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  /* console.log(pizza.etype); */

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

  const openAndClose = () => {
    setShowMore(!showMore);
  };
  function check3() {
    let price = 0;

    let priceREsult = 0;
    if (selected.size === "L") {
      price = parseInt(pizza.lprice);

      if (topping[1]) {
        price +=
          topping[1].quantity * topping[1].tprice +
          selected.doughPrice +
          selected.edgePrice;
        tp += price * selected.qty;
        if (topping[2]) {
          price +=
            topping[2].quantity * topping[2].tprice +
            selected.doughPrice +
            selected.edgePrice;
          tp += price * selected.qty;
        }
        if (topping[3]) {
          price +=
            topping[3].quantity * topping[3].tprice +
            selected.doughPrice +
            selected.edgePrice;
          tp += price * selected.qty;
        }
        if (topping[4]) {
          price +=
            topping[4].quantity * topping[4].tprice +
            selected.doughPrice +
            selected.edgePrice;
          tp += price * selected.qty;
        }
        if (topping[5]) {
          price +=
            topping[5].quantity * topping[5].tprice +
            selected.doughPrice +
            selected.edgePrice;
          tp += price * selected.qty;
        }
      } else {
        price =
          parseInt(pizza.lprice) + selected.doughPrice + selected.edgePrice;
        tp += price * selected.qty;
      }

      priceREsult = price.toLocaleString();
    } else if (selected.size === "M") {
      price = parseInt(pizza.lprice);
      if (topping[1]) {
        price +=
          topping[1].quantity * topping[1].tprice +
          selected.doughPrice +
          selected.edgePrice;
        if (topping[2]) {
          price +=
            topping[2].quantity * topping[2].tprice +
            selected.doughPrice +
            selected.edgePrice;
        }
        if (topping[3]) {
          price +=
            topping[3].quantity * topping[3].tprice +
            selected.doughPrice +
            selected.edgePrice;
        }
        if (topping[4]) {
          price +=
            topping[4].quantity * topping[4].tprice +
            selected.doughPrice +
            selected.edgePrice;
        }
        if (topping[5]) {
          price +=
            topping[5].quantity * topping[5].tprice +
            selected.doughPrice +
            selected.edgePrice;
        }
      } else {
        if (selected.doughPrice >= 0) {
          price = parseInt(pizza.mprice) + selected.doughPrice;
        } else if (selected.edgePrice >= 0) {
          price = parseInt(pizza.mprice) + selected.edgePrice;
        } else if (selected.doughPrice >= 0 && selected.edgePrice >= 0)
          price =
            parseInt(pizza.mprice) + selected.doughPrice + selected.edgePrice;
        else {
          price = parseInt(pizza.mprice);
        }
      }
      tp += priceREsult;
      priceREsult = price.toLocaleString();
    }
    let title = "";
    if (pizza.pname) {
      title = pizza.pname.concat(
        selected.size,
        `(${priceREsult}원)x${selected.qty}`
      );
    } else {
      title = "없음";
    }
    return title;
  }

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  // 수량 증가 함수
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // 수량 감소 함수
  const decreaseQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); // 수량이 1보다 작아지지 않도록 함
  };

  function handleChange({ type, data }) {
    console.log("[data]===>", data);
    let result = "";
    if (data > 0) {
      result = result.concat("+", data + "원");
      setSelected({ ...selected, dough: "- 도우 : " + type, doughPrice: data });
    } else {
      result = 0;
      setSelected({
        ...selected,
        dough: "- 도우 : " + type,
        doughPrice: result,
      });
    }
  }

  function handleChange2({ type, data }) {
    let result = "";
    if (data > 0) {
      result = result.concat("+", data + "원");

      setSelected({ ...selected, edge: "- 엣지 : " + type, edgePrice: data });
    } else {
      result = 0;
      setSelected({ ...selected, edge: "- 엣지 : " + type, edgePrice: result });
    }
  }

  function handleChange3(toppingQty) {
    setTopping(toppingQty);
  }
  function handleChange4({ type, count }) {
    let qty = count;
    //  alert(type+count)
    if (type === "plus") qty = qty + 1;
    else qty = qty - 1;
    // alert(qty)
    setSelected({ ...selected, qty: qty });
  }

  function handleChange4({ type, count }) {
    let qty = count;
    //  alert(type+count)
    if (type === "plus") qty = qty + 1;
    else qty = qty - 1;
    // alert(qty)
    setSelected({ ...selected, qty: qty });
  }

  function handleChange5(event) {
    setSideMenu(event);
  }

  function handleChange6(event) {
    setDrinkMenu(event);
  }

  function settingOrder() {
    let tpName = "";
    let dringName = "";
    for (let i = 0; i < topping.length; i++) {
      tpName +=
        topping[i].tname +
        " " +
        topping[i].tprice +
        " " +
        topping[i].quantity +
        " ";
    }
    for (let i = 0; i < drinkMenu.length; i++) {
      dringName +=
        drinkMenu[i].bname +
        " " +
        drinkMenu[i].bprice +
        " " +
        drinkMenu[i].quantity +
        " ";
    }

    let sideName = "";
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
        pizzaName: pizza.pname,
        pizzaQty: selected.qty,
        doughName: selected.dough,
        edgeName: selected.edge,
        toppingName: tpName,
        sideName: sideName,
        drinkName: dringName,
        user: userInfo.userId,
        totalPrice: tp,
        uid: 1,
      });
    }
    alert("주문이 완료되었습니다");
  } // FUNCTION settingOrder 변경이 되면

  console.log(order);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageTitle props={props} depth2={depth2} />
      <div className="content">
        <div className="pizza-detail-content">
          <div className="pizza-detail-image-box">
            <img
              className="pizza-detail-image"
              src={pizza.menuimg}
              alt={pizza.pname}
            />
            <button
              className="modalopenbtn-pizzaDetail"
              onClick={() => openModal(pizza)}
            >
              <FontAwesomeIcon icon={faExpand} /> <span>제품상세</span>
            </button>
            <div className="pizza-detail-image-text">
              <div>
                * 모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.
              </div>
              <div>
                * 원산지 정보는 사진 우측 하단 돋보기 메뉴를 통해 확인
                가능합니다.
              </div>
            </div>
          </div>
          <div className="pizza-detail-info">
            <div className="pizza-detail-info-title">{pizza.pname}</div>
            <div className="pizza-detail-info-text">
              <div className="pizza-detail-info-text-1">{pizza.desc1}</div>
              <div className="pizza-detail-info-text-2">{pizza.desc2}</div>
            </div>
            <Allergy2 />
            <div className={`step-wrap`}>
              <div className="pizza-detail-wrap">
                <div className="pizza-detail-wrap-size">사이즈 선택</div>
              </div>
              <div className="pizza-detail-size-price-box">
                <div className="pizza-detail-size-price">
                  <div className="pizza-detail-size-price-text">
                    L {pizza.lprice}
                  </div>
                  {pizza.mprice ? <div>M {pizza.mprice}</div> : null}
                </div>
              </div>
              <div>
                <PizzaDetailDough id={id} onClick={handleChange} />
                <PizzaDetailEdge id={pizza.etype} onClick={handleChange2} />
                <PizzaDetailTopping onClick={handleChange3} />
                <div className="pizza-detail-rec-topping">
                  {pizza.pname}에 잘 어울리는 <span>추천 토핑 TOP3</span>
                </div>
                <QtyoptionComp onClick={handleChange4} />
                <ChoiceSide onClick={handleChange5} />
                <ChoiceDrink onClick={handleChange6} />
              </div>
              <ChoiceSide />
            </div>
          </div>
        </div>
        {selectedPizza && isModalOpen && (
          <PizzaModal pizza={selectedPizza} onClose={closeModal} />
        )}
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

            <dl className="pizza">
              <dt>피자</dt>
              <dd>
                {pizza && <p>{check3()} </p>}
                <input type="hidden" />
                <input type="hidden" />
                <ul className="select-menu">
                  {selected.dough !== "없음" && (
                    <li>
                      {selected.dough}(+{selected.doughPrice}원)
                    </li>
                  )}
                  {selected.edge !== "" && (
                    <li>
                      {selected.edge}(+{selected.edgePrice}원)
                    </li>
                  )}

                  {topping[1] && (
                    <li>
                      {topping[1].tname}+{topping[1].tprice}원x
                      {topping[1].quantity}
                    </li>
                  )}
                  {topping[2] && (
                    <li>
                      {topping[2].tname}+{topping[2].tprice}원x
                      {topping[2].quantity}
                    </li>
                  )}
                  {topping[3] && (
                    <li>
                      {topping[3].tname}+{topping[3].tprice}원x
                      {topping[3].quantity}
                    </li>
                  )}
                  {topping[4] && (
                    <li>
                      {topping[4].tname}+{topping[4].tprice}원x
                      {topping[4].quantity}
                    </li>
                  )}
                  {topping[5] && (
                    <li>
                      {topping[5].tname}+{topping[5].tprice}원x
                      {topping[5].quantity}
                    </li>
                  )}
                </ul>
              </dd>
            </dl>
            <dl className="side">
              <dt>사이드디시</dt>
              <dd>
                {/* {pizzaRight && pizzaLeft && <p> </p>} */}
                <input type="hidden" />
                <input type="hidden" />
                <ul className="select-menu">
                  {sideMenu[1] && (
                    <li>
                      {sideMenu[1].sname}(+{sideMenu[1].sprice.toLocaleString()}
                      원)x{sideMenu[1].quantity}
                      <em hidden>
                        {(tp += sideMenu[1].sprice * sideMenu[1].quantity)}
                      </em>
                    </li>
                  )}
                  {sideMenu[2] && (
                    <li>
                      {sideMenu[2].sname}(+{sideMenu[2].sprice.toLocaleString()}
                      원)x{sideMenu[2].quantity}
                      <em hidden>
                        {(tp += sideMenu[2].sprice * sideMenu[2].quantity)}
                      </em>
                    </li>
                  )}
                  {sideMenu[3] && (
                    <li>
                      {sideMenu[3].sname}(+{sideMenu[3].sprice.toLocaleString()}
                      원)x{sideMenu[3].quantity}
                      <em hidden>
                        {(tp += sideMenu[3].sprice * sideMenu[3].quantity)}
                      </em>
                    </li>
                  )}
                  {sideMenu[4] && (
                    <li>
                      {sideMenu[4].sname}(+{sideMenu[4].sprice.toLocaleString()}
                      원)x{sideMenu[4].quantity}
                      <em hidden>
                        {(tp += sideMenu[4].sprice * sideMenu[4].quantity)}
                      </em>
                    </li>
                  )}
                  {sideMenu[5] && (
                    <li>
                      {sideMenu[5].sname}(+{sideMenu[5].sprice.toLocaleString()}
                      원)x{sideMenu[5].quantity}
                      <em hidden>
                        {(tp += sideMenu[5].sprice * sideMenu[5].quantity)}
                      </em>
                    </li>
                  )}
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
        </div>{" "}
        // step-order
      </div>
    </>
  );
}
