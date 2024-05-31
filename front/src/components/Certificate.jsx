import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTitle from "./PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Certificate() {
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
      <ul className="certificate">
        <li className="certificate-info">
          <li>
            <span>장현수</span>님께서 보유하고 있는 금액상품권 내역입니다.
          </li>
          <li></li>
          <li>선물받은 금액상품권을 등록하고 피자 주문 시 사용하세요!</li>
        </li>
        <li className="certificate-access">
          금액상품권 등록
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
      <ul className="certificate-own">
        <li>금액상품권 보유내역</li>
        <li>금액상품권 전체 사용 내역</li>
      </ul>
    </div>
  );
}
