import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/hnh.css";
import { getUser } from "../util/localStorage";
import PageTitle from "../components/PageTitle";
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

  const [props, setprops] = useState({
    title: "주문", // 여기를 상품의 이름으로 바꾸고 싶은거야 {pizza.pname}이 출력되게
  });
  console.log(orderList);

  return (
    <div className="order-container">
      {userInfo ? (
        <>
          <PageTitle props={props} />
          <li>
            <p className="order-done">
              <span className="order-name">{userInfo.userId}</span>님의 주문이
              완료되었습니다<br></br>
            </p>{" "}
            <p className="order-number">
              주문번호 <span>{orderNumber}</span>
            </p>
          </li>
          <div className="order-list">
            <h1>구매정보</h1>
            <table className="order-tables">
              <thead>
                <tr>
                  <th>아이템</th>
                  <th>상세 정보</th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>피자</td>
                  <td>
                    {orderList.pizzaLeft} + {orderList.pizzaRight}
                  </td>
                  <td>{orderList.pizzaQty}</td>
                </tr>
                <tr>
                  <td>도우</td>
                  <td colSpan={2}>{orderList.doughName}</td>
                </tr>
                <tr>
                  <td>엣지</td>
                  <td colSpan={2}>{orderList.edgeName}</td>
                </tr>
                <tr>
                  <td>토핑</td>
                  <td colSpan={2}>{orderList.toppingName}</td>
                </tr>
                <tr>
                  <td>사이드</td>
                  <td colSpan={2}>{orderList.sideName}</td>
                </tr>
                <tr>
                  <td>음료</td>
                  <td colSpan={2}>{orderList.drinkName}</td>
                </tr>
                {orderList.totalPrice && (
                  <tr>
                    <td colSpan="2">총 금액</td>
                    <td>
                      <span className="result-money">
                        {orderList.totalPrice}
                      </span>
                      원
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* <ul>
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
            </ul> */}
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
