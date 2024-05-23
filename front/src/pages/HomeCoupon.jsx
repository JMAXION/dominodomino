import React from "react";
import { Link } from "react-router-dom";

export default function HomeCoupon() {
  return (
    <div className="homecoupon">
      <ul className="homecoupon-nowlevel">
        <li>장현수님 현재 등급</li>
        <li>REGULAR</li>
        <li className="homecoupon-nowlevel-button">
          <Link to="/mypage/mania">
            <button>혜택보기</button>
          </Link>
          <Link to="/mypage/order">
            <button>주문내역</button>
          </Link>
        </li>
      </ul>
      <ul className="homecoupon-button">
        <li className="homecoupon-coupon">
          <Link to="/mypage/coupon">
            <li className="homecoupon-couponihave">
              <p>보유쿠폰</p>
              <p>0개</p>
            </li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card1_bg.png"
              alt=""
            />
          </Link>
        </li>
        <li className="homecoupon-coupon-mylevel">
          <Link to="/mypage/mania">
            <li>2번만 더 주문하면 등급 UP</li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card2_bg.gif"
              alt=""
            />
          </Link>
        </li>
        <li>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card5.png"
              alt=""
            />
          </li>
        </li>
      </ul>
    </div>
  );
}
