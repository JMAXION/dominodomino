import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Qna() {
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
      <ul className="mania-info">
        <ul className="mania-info-name">
          <li>장현수님</li>
          <li>REGULAR</li>
          <li></li>
          <li>등급별 혜택 보기</li>
        </ul>
        <ul className="mania-info-order">
          <li>주문</li>
          <li>2024.02 ~ 2024.04</li>
          <li>0</li>
        </ul>
        <ul className="mania-info-cash">
          <li>주문금액</li>
          <li>2024.01 ~ 2024.05</li>
          <li>0</li>
        </ul>
      </ul>
    </div>
  );
}
