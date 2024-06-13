import { useParams } from "react-router-dom";
import HalfNhalfSwiper from "../components/HalfNhalfSwiper";
import HnfInfoModal from "../components/HnfInfoModal";
import Menuheader from "../components/Menuheader";
import Choicedough from "../components/Choicedough";
import ChoiceEdge from "../components/ChoiceEdge";
import ChoiceTopping from "../components/ChoiceTopping";
import "../css/hnh.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HnhCautionModal from "../components/hnhCautionModal";
import PageTitle from "../components/PageTitle";
import QtyoptionComp from "../components/QtyoptionComp";
import ChoiceSide from "../components/ChoiceSide";
import ChoiceDrink from "../components/ChoiceDrink";
import { Link } from "react-router-dom";
import { getUser } from "../util/localStorage";

import HnhOrder from "./HnhOrder";
export default function Hnh({ depth2 }) {
  /* const [navActive, setNavActive] = useState(false); */
  const [sendState, setSendState] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [halfchoice, setHalfChoice] = useState([]);
  const [secondSelect, setSecondSelect] = useState();
  const [pizzaLeft, setPizzaLeft] = useState("");
  const [pizzaRight, setPizzaRight] = useState("");
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

  const [topping, setTopping] = useState(initialToppingQty);
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
    breadcrumb: "하프앤하프", //브레드크럼 경로가 3개 이상일때 사용
    breadcrumbLink: "/menu/halfnhalf", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "피자",
    nav2: "하프앤하프",
    nav3: "사이드디시",
    nav4: "인기세트메뉴",
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/popular",
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

  useEffect(
    () => {
      const url = "http://127.0.0.1:8080/menu/halfnhalf/";
      axios({
        method: "POST",
        url: url,
        data: halfchoice,
      })
        .then((res) => {
          setHalfChoice(res.data);
        })
        .catch((error) => console.log(error));
    },
    [pizzaLeft],
    [pizzaRight],
    [selected]
  );

  const scrollFixed = () => {
    if (scrollY > 200) {
      setScrollY(window.scrollY);
      setScrollActive(true);
    } else {
      setScrollY(window.scrollY);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

  function check(t) {
    const url = "http://127.0.0.1:8080/menu/halfnhalf/pizzaleft";
    axios({
      method: "POST",
      url: url,
      data: { id: t },
    }).then((result) => {
      setPizzaLeft(result.data);

      if (
        result.data.pname === "클래식 리코타" ||
        result.data.pname === "맥콘 베이컨" ||
        result.data.pname === "맵퍼로니" ||
        result.data.pname === "마라 불고기" ||
        result.data.pname === "소시지 맥스"
      ) {
        setSelected({
          ...selected,
          dough: "- 도우 : 나폴리도우",
          doughPrice: "",
        });
      }
    });
    if (selected.dough !== undefined && selected.doughPrice) {
      setSelected({ ...selected });
    }
  }

  function check2(t) {
    const url = "http://127.0.0.1:8080/menu/halfnhalf/pizzaright";
    axios({
      method: "POST",
      url: url,
      data: { id: t },
    }).then((result) => {
      setPizzaRight(result.data);
      setSelected({ ...selected, pizzaRighId: result.data.id });

      if (selected.dough !== undefined && selected.doughPrice) {
        setSelected({ ...selected });
      }
    });
  }

  function selectChange(e) {
    if (e === "라지") {
      setSelected({ large: true, mideum: false, size: "L", qty: 1 });
    } else if (e === "미디움") {
      setSelected({ large: false, mideum: true, size: "M", qty: 1 });
    }
  }

  function handleChange({ type, data }) {
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

  function handleChange5(event) {
    setSideMenu(event);
  }

  function handleChange6(event) {
    setDrinkMenu(event);
  }

  /*  */
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
        pizzaLeftName: pizzaLeft.pname,
        pizzaRightName: pizzaRight.pname,
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

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/halfnhalf/orderinsert`;
    axios({
      method: "POST",
      url: url,
      data: order,
    }).then((result) => {
      if (result.data.cnt === 1) {
      }
    });
  }, [order]);

  const secondChoice = (t) => {
    const url = "http://127.0.0.1:8080/menu/halfnhalf/secondchoice";
    axios({
      method: "POST",
      url: url,
      data: { id: t },
    }).then((result) => setSecondSelect(result.data));
  };

  const openAndClose = () => {
    setShowMore(!showMore);
  };
  function check3() {
    let price = 0;

    let priceREsult = 0;
    if (selected.size === "L") {
      price = (parseInt(pizzaLeft.lprice) + parseInt(pizzaRight.lprice)) / 2;

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
          (parseInt(pizzaLeft.lprice) + parseInt(pizzaRight.lprice)) / 2 +
          selected.doughPrice +
          selected.edgePrice;
        tp += price * selected.qty;
      }

      priceREsult = price.toLocaleString();
    } else if (selected.size === "M") {
      price = (parseInt(pizzaLeft.lprice) + parseInt(pizzaRight.lprice)) / 2;
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
          price =
            (parseInt(pizzaLeft.mprice) + parseInt(pizzaRight.mprice)) / 2 +
            selected.doughPrice;
        } else if (selected.edgePrice >= 0) {
          price =
            (parseInt(pizzaLeft.mprice) + parseInt(pizzaRight.mprice)) / 2 +
            selected.edgePrice;
        } else if (selected.doughPrice >= 0 && selected.edgePrice >= 0)
          price =
            (parseInt(pizzaLeft.mprice) + parseInt(pizzaRight.mprice)) / 2 +
            selected.doughPrice +
            selected.edgePrice;
        else {
          price =
            (parseInt(pizzaLeft.mprice) + parseInt(pizzaRight.mprice)) / 2;
        }
      }
      tp += priceREsult;
      priceREsult = price.toLocaleString();
    }
    let title = "";
    if (pizzaLeft.pname && pizzaRight.pname) {
      title = pizzaLeft.pname.concat(
        "+",
        pizzaRight.pname,
        "/",
        selected.size,
        `(${priceREsult}원)x${selected.qty}`
      );
    } else {
      title = "없음";
    }
    return title;
  }

  const checkState = () => {
    setSendState(!sendState);
  };

  return (
    <>
      {/* <Menuheader
        name={name}
        depth1={depth1}
        depth2={depth2}
        depth3={depth3}
        headerName={headerName}
        location1={location1}
      /> */}
      <PageTitle props={props} depth2={depth2} />

      <div className="hnh-container">
        <div className={`img-wrap ${scrollActive ? "fixed" : "img-wrap"}`}>
          {scrollActive && (
            <div style={{ width: "100px", height: "100px" }}></div>
          )}
          <div className="view-box">
            <div className="half-box">
              <div className="pizza-box">
                <div className="pizza-left-box">
                  <span className="sel-pizza">
                    <h1></h1>
                    {<img src={halfchoice.img} alt="" />}
                    {pizzaLeft && (
                      <>
                        <h1></h1>
                        <img src={pizzaLeft.img} alt="" />
                      </>
                    )}
                  </span>
                </div>
                <div className="pizza-right-box">
                  <span className="sel-pizza">
                    <h1></h1>
                    {pizzaRight && <img src={pizzaRight.img} alt="" />}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-wrap">
          <p className="hnh-title">피자 한 판으로 두 가지 맛을 동시에!</p>
          <HalfNhalfSwiper />
          <HnfInfoModal />
          <HnhCautionModal />
          <div className="select-box">
            <div className="step-wrap">
              <div className="title-wrap">
                <div className="title-type2">피자선택</div>
                <span className="text-type1">
                  총 열량 (1,580 kcal~ 7,785 kcal)
                </span>
              </div>
              <div className="form-group3">
                <div className="form-item">
                  <div className="select-type2">
                    <select
                      className="pizza-select1"
                      onChange={(e) => check(e.target.value)}
                    >
                      <option value="0">첫번째 피자를 선택하세요</option>
                      {halfchoice.map((obj) => (
                        <option value={obj.id}>{obj.pname}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-item">
                  <div className="select-type2">
                    {pizzaLeft && (
                      <select
                        onClick={() => {
                          secondChoice(pizzaLeft.category);
                        }}
                        className="pizza-select2"
                        onChange={(e) => check2(e.target.value)}
                      >
                        <option value="0">두번째 피자를 선택하세요</option>
                        {secondSelect &&
                          secondSelect.map((obj) => (
                            <option value={obj.id}>{obj.pname}</option>
                          ))}
                      </select>
                    )}
                  </div>
                </div>
                <p className="half-guide">
                  하프앤하프 시그니처는 [메뉴] &gt; [피자] 카테고리 또는 상단의
                  추천 메뉴에서 주문가능합니다.
                </p>
                <p className="half-guide">
                  제품 조합 및 사이즈에 따라 주문할 수 있는 도우와 엣지가
                  달라집니다.
                </p>
              </div>
            </div>
          </div>

          <div className={`step-wrap `}>
            <div className="title-wrap">
              <div className="title-type2">사이즈 선택</div>
            </div>
            <div className="size-box">
              <div
                className={`chk-box2 ${
                  selected.large ? "selected" : "chk-box2"
                }`}
                onClick={(e) => selectChange("라지")}
              >
                <input type="radio" id="size1" value="L"></input>
                <label className="checkbox" for="size1"></label>
                <label for="size1">L</label>
              </div>
              {pizzaLeft.mprice !== null && (
                <div
                  className={`chk-box2 ${
                    selected.large ? "chk-box2" : "selected"
                  }`}
                  onClick={(e) => selectChange("미디움")}
                >
                  <input type="radio" id="size1" value="M"></input>
                  <label className="checkbox" for="size2"></label>
                  <label for="size2">M</label>
                </div>
              )}
            </div>

            {pizzaRight.id && (
              <Choicedough id={pizzaLeft.id} onClick={handleChange} />
            )}
            {pizzaRight.id && (
              <ChoiceEdge id={pizzaLeft.etype} onClick={handleChange2} />
            )}
            {
              <ChoiceTopping
                pizzaRight={pizzaRight.id}
                onClick={handleChange3}
              />
            }
            <QtyoptionComp onClick={handleChange4} />
            <ChoiceSide onClick={handleChange5} />
            <ChoiceDrink onClick={handleChange6} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="step-order">
          <div
            className={`order-wrap inner-box ${
              showMore ? "show-more" : "order-wrap inner-box"
            }`}
          >
            {pizzaRight.id && (
              <button
                className={`show-more-button ${
                  showMore ? "more-open" : "show-more-button"
                }`}
                onClick={openAndClose}
              >
                전체 보기
              </button>
            )}
            <dl className="pizza">
              <dt>피자</dt>
              <dd>
                {pizzaRight && pizzaLeft && <p>{check3()} </p>}
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
                {pizzaRight && pizzaLeft && <p> </p>}
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
                {pizzaRight && pizzaLeft && <p> </p>}
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
                    <div hidden>
                      <HnhOrder order={order} />
                    </div>
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
