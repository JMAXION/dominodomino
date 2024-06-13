import { useEffect, useState } from "react";
import axios from "axios";
export default function ChoiceSide({ onClick }) {
  const [drinkMenu, setDrinkMenu] = useState([]);
  const [checkQty, setCheckQty] = useState(0);
  const initialDrinkQty = [
    {
      quantity: "",
      bname: "",
      bimage: "0",
      bkind: "0",
      bprice: "",
      bid: 0,
    },
  ];

  const [drinkQty, setDrinkQty] = useState(initialDrinkQty);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/halfnhalf/drink`;
    axios({
      method: "POST",
      url: url,
      data: drinkMenu,
    })
      .then((result) => setDrinkMenu(result.data))
      .catch((error) => console.log(error));
  }, []);

  const increase = (bid) => {
    if (drinkQty.length === 0) {
      // toppingQty가 빈 배열일 경우 초기 항목 추가
      let toppingFilter = drinkMenu.filter((t) => t.bid === bid);
      setDrinkQty([
        {
          quantity: 1,
          bname: toppingFilter[0].bname,
          bimage: toppingFilter[0].bimage,
          bkind: toppingFilter[0].bkind,
          bprice: toppingFilter[0].bprice,
          bid: toppingFilter[0].bid,
        },
      ]);
      setCheckQty(1);
      return;
    }

    let existingToppingIndex = drinkQty.findIndex((t) => t.bid === bid);
    let toppingFilter = drinkMenu.filter((t) => t.bid === bid);
    let toppingFilter2 = drinkQty.filter((t) => t.quantity >= 5);

    // checkQty 증가
    setCheckQty(checkQty + 1);

    // checkQty가 5를 넘으면 알림 표시 후 onClick 호출
    if (checkQty >= 5) {
      alert("5개까지만 담을 수 있습니다");
      return onClick(drinkQty);
    }

    // topping 배열에서 quantity 업데이트
    setDrinkMenu((prevToppings) =>
      prevToppings.map((t) =>
        t.bid === bid ? { ...t, quantity: t.quantity + 1 } : t
      )
    );

    // toppingQty 배열에서 quantity가 5를 넘는 경우 1 감소
    if (toppingFilter2.length > 0) {
      setDrinkQty((prevToppings) =>
        prevToppings.map((t) =>
          t.bid === bid && t.quantity >= 6
            ? { ...t, quantity: t.quantity - 1 }
            : t
        )
      );
    } else if (existingToppingIndex !== -1) {
      // 동일한 tid를 가진 항목이 있으면 quantity 증가
      setDrinkQty((prevToppings) =>
        prevToppings.map((t) =>
          t.bid === bid ? { ...t, quantity: t.quantity + 1 } : t
        )
      );
    } else {
      // 동일한 tid를 가진 항목이 없으면 새로운 항목 추가
      setDrinkQty((prevToppings) => [
        ...prevToppings,
        {
          quantity: toppingFilter[0].quantity + 1, // 새로운 항목의 초기 수량을 1로 설정
          bname: toppingFilter[0].bname,
          bimage: toppingFilter[0].bimage,
          bkind: toppingFilter[0].bkind,
          bprice: toppingFilter[0].bprice,
          bid: toppingFilter[0].bid,
        },
      ]);
      onClick(drinkQty);
    }

    // 상태 업데이트 후 onClick 호출
    onClick(drinkQty);
  };

  const decrease = (bid) => {
    // If checkQty is 0 or less, just return
    if (checkQty === 0) {
      return onClick(drinkQty);
    }

    // Decrease checkQty
    setCheckQty(checkQty - 1);

    // Update the topping array
    setDrinkMenu((prevToppings) =>
      prevToppings.map((t) =>
        t.bid === bid ? { ...t, quantity: t.quantity - 1 } : t
      )
    );

    // Update the toppingQty array
    setDrinkQty((prevToppingQty) => {
      let updatedToppings = prevToppingQty.map((t) =>
        t.bid === bid ? { ...t, quantity: t.quantity - 1 } : t
      );
      onClick(drinkQty, drinkMenu[0].quantity);

      // Remove items with quantity 0
      return updatedToppings.filter((t) => t.quantity > 0);
    });
  };

  return (
    <div className="step-wrap-side">
      <div className="title-wrap-topping">
        <div className="title-type-edge2">음료&기타 </div>
      </div>
      <div id="topping1" className="tab-content-side">
        {drinkMenu.map((obj) => (
          <ul>
            <li className="topping-img">
              <img src={obj.bimage} alt="" />
            </li>
            <div className="topping-name">
              <li>
                {obj.bname}
                <p>{obj.bprice}</p>
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
                  decrease(obj.bid);
                }}
              >
                -
              </button>
              <button
                className="qty-plus"
                onClick={() => {
                  increase(obj.bid);
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
