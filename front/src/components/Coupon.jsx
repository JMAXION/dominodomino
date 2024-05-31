import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Coupon() {
  const navigate = useNavigate();
  const [props, setprops] = useState({
    title: "나의 정보",
    nav1: "매니아 등급",
    nav2: "주문내역",
    nav3: "쿠폰함",
    nav4: "금액상품권",
    nav5: "1:1문의/칭찬",
    nav6: "정보수정",
    // breadcrumbLink: "/law",
    link1: "/mypage/mania",
    link2: "/mypage/order",
    link3: "/mypage/coupon",
    link4: "/mypage/certificate",
    link5: "/mypage/qna",
    link6: "/mypage/information",
  });
  return (
    <div className="content">
      <PageTitle props={props} />
      <ul className="coupon-now">
        <li>
          <span>장현수</span>님께서 보유하고 있는 할인쿠폰 내역입니다
        </li>
        <li></li>
        <li>쿠폰을 사용하여 피자를 주문해보세요!</li>
      </ul>
      <table className="coupon-table">
        <colgroup>
          <col width="50%" />
          <col width="50%" />
        </colgroup>
        <thead>
          <tr>
            <th>쿠폰명</th>
            <th>유효기간</th>
          </tr>
        </thead>
        <tbody>
          <tr height="50px">
            <td>[REGULAR쿠폰] 배달 피자 20% 할인</td>
            <td>2024.05.22 ~ 2024.05.31</td>
          </tr>
          <tr height="50px">
            <td>[마이키친] REGULAR 배달 20% 할인</td>
            <td>2024.05.22 ~ 2024.05.31</td>
          </tr>
          <tr height="50px">
            <td>[마이키친] REGULAR 배달 20% 할인</td>
            <td>2024.05.22 ~ 2024.05.31</td>
          </tr>
        </tbody>
      </table>
      <ul className="coupon-button">
        <button>도미노 모멘트 수정하기</button>
        <button onClick={() => navigate("/pizzas")}>피자 주문하기</button>
      </ul>
    </div>
  );
}
