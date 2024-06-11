import React, { useState } from "react";
import PageTitle from "./PageTitle";

export default function EcouponUsage({ depth2 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [props, setProps] = useState({
    title: "e-쿠폰",
    nav1: "e-쿠폰 주문",
    nav2: "e-쿠폰 사용 안내",
    link1: "/ecoupon/index",
    link2: "/ecouponusage",
  });

  const couponData = [
    {
      index: 1,
      image:
        "https://cdn.dominos.co.kr/domino/pc/images/coupon/e-coupon-menu-change.png",
      text: "쿠폰메뉴와 다른 메뉴로 변경해서 주문하는 방법",
    },
    {
      index: 2,
      image:
        "https://cdn.dominos.co.kr/domino/pc/images/coupon/e-coupon-menu.png",
      text: "메뉴 변경 없이 쿠폰 구성대로 주문하는 방법",
    },
    {
      index: 3,
      image:
        "https://cdn.dominos.co.kr/domino/pc/images/coupon/howto_dominocon3.png",
      text: "금액상품권으로 주문하는 방법",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index); // 클릭된 <p> 태그의 인덱스를 상태에 저장
  };

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <ul>
        <li className="ecoupon-usage-button">
          {couponData.map((item, index) => (
            <p key={index}>
              <button
                onClick={() => handleClick(index)}
                className={activeIndex === index ? "active" : ""}
              >
                {item.text}
              </button>
            </p>
          ))}
        </li>
      </ul>
      <ul>
        <li key={couponData[activeIndex].index}>
          <div>
            <img
              src={couponData[activeIndex].image}
              alt={`Coupon ${couponData[activeIndex].index}`}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
