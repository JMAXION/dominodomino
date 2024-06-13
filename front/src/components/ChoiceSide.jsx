import { useEffect, useState } from "react";
import axios from "axios";
export default function ChoiceSide({ onClick }) {
  const [sideMenu, setSideMenu] = useState([]);
  const [checkQty, setCheckQty] = useState(0);
  const initialSideQty = [
    {
      quantity: "",
      sname: "",
      simage: "0",
      skind: "0",
      sprice: "",
      sid: 0,
    },
  ];

  const [sideQty, setSideQty] = useState(initialSideQty);
  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/halfnhalf/side`;
    axios({
      method: "POST",
      url: url,
      data: sideMenu,
    })
      .then((result) => setSideMenu(result.data))
      .catch((error) => console.log(error));
  }, []);

  const increase = (sid) => {
    if (sideQty.length === 0) {
      // toppingQty가 빈 배열일 경우 초기 항목 추가
      let toppingFilter = sideMenu.filter((t) => t.sid === sid);
      setSideQty([
        {
          quantity: 1,
          sname: toppingFilter[0].sname,
          simage: toppingFilter[0].simage,
          skind: toppingFilter[0].skind,
          sprice: toppingFilter[0].sprice,
          sid: toppingFilter[0].sid,
        },
      ]);
      setCheckQty(1);
      return;
    }

    let existingToppingIndex = sideQty.findIndex((t) => t.sid === sid);
    let toppingFilter = sideMenu.filter((t) => t.sid === sid);
    let toppingFilter2 = sideQty.filter((t) => t.quantity >= 5);

    // checkQty 증가
    setCheckQty(checkQty + 1);

    // checkQty가 5를 넘으면 알림 표시 후 onClick 호출
    if (checkQty >= 5) {
      alert("5개까지만 담을 수 있습니다");
      return onClick(sideQty);
    }

    // topping 배열에서 quantity 업데이트
    setSideMenu((prevToppings) =>
      prevToppings.map((t) =>
        t.sid === sid ? { ...t, quantity: t.quantity + 1 } : t
      )
    );

    // toppingQty 배열에서 quantity가 5를 넘는 경우 1 감소
    if (toppingFilter2.length > 0) {
      setSideQty((prevToppings) =>
        prevToppings.map((t) =>
          t.sid === sid && t.quantity >= 6
            ? { ...t, quantity: t.quantity - 1 }
            : t
        )
      );
    } else if (existingToppingIndex !== -1) {
      // 동일한 tid를 가진 항목이 있으면 quantity 증가
      setSideQty((prevToppings) =>
        prevToppings.map((t) =>
          t.sid === sid ? { ...t, quantity: t.quantity + 1 } : t
        )
      );
    } else {
      // 동일한 tid를 가진 항목이 없으면 새로운 항목 추가
      setSideQty((prevToppings) => [
        ...prevToppings,
        {
          quantity: toppingFilter[0].quantity + 1, // 새로운 항목의 초기 수량을 1로 설정
          sname: toppingFilter[0].sname,
          simage: toppingFilter[0].simage,
          skind: toppingFilter[0].skind,
          sprice: toppingFilter[0].sprice,
          sid: toppingFilter[0].sid,
        },
      ]);
      onClick(sideQty);
    }

    // 상태 업데이트 후 onClick 호출
    onClick(sideQty);
  };

  const decrease = (sid) => {
    // If checkQty is 0 or less, just return
    if (checkQty === 0) {
      return onClick(sideQty);
    }

    // Decrease checkQty
    setCheckQty(checkQty - 1);

    // Update the topping array
    setSideMenu((prevToppings) =>
      prevToppings.map((t) =>
        t.sid === sid ? { ...t, quantity: t.quantity - 1 } : t
      )
    );

    // Update the toppingQty array
    setSideQty((prevToppingQty) => {
      const updatedToppings = prevToppingQty.map((t) =>
        t.sid === sid ? { ...t, quantity: t.quantity - 1 } : t
      );
      onClick(sideQty, sideMenu[0].quantity);

      // Remove items with quantity 0
      return updatedToppings.filter((t) => t.quantity > 0);
    });
  };

  return (
    <div className="step-wrap-side">
      <div className="title-wrap-topping">
        <div className="title-type-edge2">사이드디시 </div>
      </div>
      <div id="topping1" className="tab-content-side">
        {sideMenu.map((obj) => (
          <ul>
            <li className="topping-img">
              <img src={obj.simage} alt="" />
            </li>
            <div className="topping-name">
              <li>
                {obj.sname}
                <p>{obj.sprice}</p>
              </li>
            </div>
            <div className="qty-box">
              <input
                type="text"
                className="topping-qty-txt"
                value={obj.quantity - 1}
              ></input>
              <button
                className="qty-minus"
                onClick={() => {
                  decrease(obj.sid);
                }}
              >
                -
              </button>
              <button
                className="qty-plus"
                onClick={() => {
                  increase(obj.sid);
                }}
              >
                +
              </button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
