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
    link1: "/mania",
    link2: "/order",
    link3: "/coupon",
    link4: "/certificate",
    link5: "/qna",
    link6: "/information",
  });
  return (
    <div className="content">
      <PageTitle props={props} />
      <h1>INFORMATION</h1>
    </div>
  );
}
