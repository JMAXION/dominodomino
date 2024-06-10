import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";

export default function BeverageMenuProduct({ depth2 }) {
  const [props, setProps] = useState({
    title: "메뉴",
    breadcrumb: "음료&기타",
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

  const [beverageList, setBeverageList] = useState([]);

  useEffect(() => {
    fetch("data/beverage.json")
      .then((res) => res.json())
      .then((result) => {
        // Initialize each beverage with a quantity property
        const beveragesWithQuantities = result.map((beverage) => ({
          ...beverage,
          quantity: 1,
        }));
        setBeverageList(beveragesWithQuantities);
      })
      .catch((error) => console.log(error));
  }, []);

  const increaseQuantity = (index) => {
    setBeverageList((prevList) => {
      const newList = [...prevList];
      newList[index] = {
        ...newList[index],
        quantity: newList[index].quantity + 1,
      };
      return newList;
    });
  };

  const decreaseQuantity = (index) => {
    setBeverageList((prevList) => {
      const newList = [...prevList];
      newList[index] = {
        ...newList[index],
        quantity:
          newList[index].quantity - 1 < 1 ? 1 : newList[index].quantity - 1,
      };
      return newList;
    });
  };

  const createRows = (beverageList) => {
    const rows = [];
    for (let i = 0; i < beverageList.length; i += 4) {
      rows.push(beverageList.slice(i, i + 4));
    }
    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="beverage-row">
        {row.map((beverage, beverageIndex) => (
          <div key={beverageIndex} className="beverage-box-in">
            <img
              className="beverage-box-in-image"
              src={beverage.image}
              alt={beverage.title}
            />
            <div className="beverage-product">
              <div className="beverage-title">{beverage.title}</div>
              <div className="beverage-price">
                {beverage.price.toLocaleString()}원
              </div>
              <div className="beverage-quantity-order">
                <div className="beverage-quantity-box">
                  <button
                    className="beverage-crease"
                    onClick={() =>
                      decreaseQuantity(rowIndex * 4 + beverageIndex)
                    }
                  >
                    -
                  </button>
                  <div className="beverage-crease-count">
                    {beverage.quantity}
                  </div>
                  <button
                    className="beverage-crease"
                    onClick={() =>
                      increaseQuantity(rowIndex * 4 + beverageIndex)
                    }
                  >
                    +
                  </button>
                </div>
                <button className="beverage-order-button">주문</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div className="beverage-box">{createRows(beverageList)}</div>
    </div>
  );
}
