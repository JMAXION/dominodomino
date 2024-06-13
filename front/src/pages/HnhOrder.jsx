import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/hnh.css";
import { getUser } from "../util/localStorage";
export default function HnhOrder() {
  const location = useLocation();
  const userInfo = getUser();
  const { orderNumber } = location.state || {}; // location.state가 없을 경우를 대비하여 기본값을 설정
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/halfnhalf/orderresult`;
    axios({
      method: "POST",
      url: url,
      data: { orderNumber: orderNumber },
    }).then((result) => setOrderList(result.data));
  });

  return (
    <div className="order-container">
      {userInfo ? (
        <>
          <h1>주문 확인</h1>
          <h3>
            {" "}
            <span className="order-name">{userInfo.userId}</span>님의 주문이
            완료되었습니다<br></br> 주문번호 {orderNumber}
          </h3>
          <div className="order-list">
            <h1>구매정보</h1>
            <ul>
              <li>
                {orderList.pizzaLeft}+{orderList.pizzaRight}x
                {orderList.pizzaQty}
              </li>
              <li>{orderList.doughName}</li>
              <li>{orderList.edgeName}</li>
              <li>{orderList.toppingName}</li>
              <li>{orderList.sideName}</li>
              <li>{orderList.drinkName}</li>
              {orderList.totalPrice && (
                <li>
                  총 금액
                  <span className="result-money">{orderList.totalPrice}</span>원
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <h1>주문에 실패 했습니다 로그인 후 다시 시도해 주세요</h1>
        </div>
      )}
    </div>
  );
}
