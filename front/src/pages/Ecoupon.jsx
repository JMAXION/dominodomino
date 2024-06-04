import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

export default function Ecoupon() {
  const [props, setProps] = useState({
    title: "e-쿠폰",
    nav1: "e-쿠폰 주문",
    nav2: "e-쿠폰 사용 안내",
    link1: "/ecoupon/index",
    link2: "/ecouponusage",
  });
  return (
    <div>
      <PageTitle props={props} />
      <p className="ecoupon-button">
        <ul className="ecoupon-button-menu">
          <Link to="/pizzas">
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/coupon/e-coupon-lunch.png"
              alt=""
            />
          </Link>
        </ul>
        <ul className="ecoupon-button-coupon">
          <Link to="/ecoupon/index">
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/coupon/e-coupon-number.png"
              alt=""
            />
          </Link>
        </ul>
      </p>
    </div>
  );
}
