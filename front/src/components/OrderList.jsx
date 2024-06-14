import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { getUser, removeUser } from "../util/localStorage";

export default function OrderList({ depth2 }) {
  const userInfo = getUser();
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
      <PageTitle props={props} depth2={depth2} />
      <ul className="order-info">
        <ul className="order-information">
          <li>
            <span>{userInfo.userId}</span>님이 주문하신 내역입니다
          </li>
          <li></li>
          <li>주문을 취소하시려면 해당 매장으로 전화하셔야 합니다.</li>
          <li>
            예약 주문 취소는 4판 이하 주문, 예약시간 기준
            <span> 1시간 이상</span> 남았을 시 취소 가능합니다
          </li>
        </ul>
        <ul className="order-useinfo">
          <li>
            이용안내
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        </ul>
      </ul>
      <ul className="order-pizza-or-certificate">
        <li>피자 주문</li>
        <li>상품권 주문 </li>
      </ul>
      <ul className="order-info-personal">
        <li>주문내역이 없습니다.</li>
      </ul>
      <ul className="order-buttons">
        <button>
          <Link to="/pizzas">
            <span className="order-button-text">신제품 보러가기</span>
          </Link>
        </button>
        <button>
          <Link to="/pizzas">
            <span className="order-button-text">다른제품 보러가기</span>
          </Link>
        </button>
      </ul>
    </div>
  );
}
