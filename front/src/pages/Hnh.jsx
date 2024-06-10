import { useParams } from "react-router-dom";
import HalfNhalfSwiper from "../components/HalfNhalfSwiper";
import HnfInfoModal from "../components/HnfInfoModal";
import Menuheader from "../components/Menuheader";
import "../css/hnh.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HnhCautionModal from "../components/hnhCautionModal";
import PageTitle from "../components/PageTitle";

export default function Hnh({ depth2 }) {
  const [navActive, setNavActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [halfchoice, setHalfChoice] = useState([]);
  const [pizzaLeft, setPizzaLeft] = useState({
    id: "",
    img: "",
    title: "없음",
    price: "",
  });
  const [pizzaRight, setPizzaRight] = useState({
    id: "",
    img: "",
    title: "",
    price: "",
  });
  const [selected, setSelected] = useState({
    large: true,
    mideum: false,
    size: "L",
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
          console.log("res==>", res);
          setHalfChoice(res.data);
        })
        .catch((error) => console.log(error));
    },
    [pizzaLeft],
    [selected]
  );

  console.log("피자 왼쪽 ==>", pizzaLeft);
  console.log("피자 오른쪽 ==>", pizzaRight);
  const scrollFixed = () => {
    if (scrollY > 200) {
      setScrollY(window.scrollY);
      setScrollActive(true);
      console.log(scrollY);
    } else {
      setScrollY(window.scrollY);
      setScrollActive(false);
    }
  };
  console.log(pizzaLeft);
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
    const filter = halfchoice.filter((item) => item.id === t);

    setPizzaLeft(...filter);
    console.log("new ARr ==>", filter);
  }

  function check2(t) {
    const filter = halfchoice.filter((item) => item.id === t);
    setPizzaRight(...filter);
  }
  function check3() {
    let price = 0;
    let priceREsult = 0;
    if (selected.size === "L") {
      price = parseInt(pizzaLeft.price) + parseInt(pizzaRight.price);
      priceREsult = price.toLocaleString();
    } else if (selected.size === "M") {
      price = parseInt(pizzaLeft.price) + parseInt(pizzaRight.price) - 4500;
      priceREsult = price.toLocaleString();
    }
    let title = "";
    if (pizzaLeft.title && pizzaRight.title) {
      title = pizzaLeft.title.concat(
        "+",
        pizzaRight.title,
        "/",
        selected.size,
        priceREsult
      );
    } else {
      title = "없음";
    }
    return title;
  }

  function selectChange(e) {
    if (e === "라지") {
      setSelected({ large: true, mideum: false, size: "L" });
    } else if (e === "미디움") {
      console.log(e);
      setSelected({ large: false, mideum: true, size: "M" });
    }
  }
  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: "하프앤하프",
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
    <>
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
                    {<img src={pizzaLeft.img} alt="" />}
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
                      <option value="0" data-id="3000">
                        {" "}
                        첫번째 피자를 선택하세요
                      </option>
                      <option value="1">뉴욕불고기</option>
                      <option value="2">한우불고기</option>
                    </select>
                  </div>
                </div>
                <div className="form-item">
                  <div className="select-type2">
                    <select
                      className="pizza-select2"
                      onChange={(e) => check2(e.target.value)}
                    >
                      <option value="0"> 두번째 피자를 선택하세요</option>
                      <option value="1">뉴욕불고기</option>
                      <option value="2">한우불고기</option>
                    </select>
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

          <div className="step-wrap">
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
            </div>
          </div>
        </div>
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

        <div className="step-order">
          <div className="order-wrap inner-box">
            <dl className="pizza">
              <dt>피자</dt>
              <dd>
                {pizzaLeft.title && <p>{check3()} </p>}
                <input type="hidden" />
                <input type="hidden" />
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
