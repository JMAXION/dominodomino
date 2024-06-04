import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";

export default function EcouponUsage({ depth2 }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [couponData, setCouponData] = useState([]); // 원본 데이터를 저장할 상태
  const [filteredCoupon, setFilteredCoupon] = useState([]); // 필터링된 데이터를 저장할 상태

  const handleClick = (index) => {
    setActiveIndex(index); // 클릭된 <p> 태그의 인덱스를 상태에 저장
    filterCouponData(index); // 클릭된 인덱스에 따라 데이터를 필터링
  };

  const [props, setProps] = useState({
    title: "e-쿠폰",
    nav1: "e-쿠폰 주문",
    nav2: "e-쿠폰 사용 안내",
    link1: "/ecoupon/index",
    link2: "/ecouponusage",
  });

  useEffect(() => {
    fetch("data/ecoupon.json")
      .then((res) => res.json())
      .then((result) => {
        setCouponData(result);
        setFilteredCoupon(result); // 처음 로드 시 모든 데이터를 표시
      })
      .catch((error) => console.log(error));
  }, []);

  const filterCouponData = (index) => {
    // index에 따라 데이터를 필터링합니다.
    let filtered;
    if (index === null) {
      filtered = couponData;
    } else {
      filtered = couponData.filter(
        (item) => item.index === (index + 1).toString()
      );
    }
    setFilteredCoupon(filtered);
  };

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <ul>
        <li className="ecoupon-usage-button">
          {[
            "쿠폰메뉴와 다른 메뉴로 변경해서 주문하는 방법",
            "메뉴 변경 없이 쿠폰 구성대로 주문하는 방법",
            "금액상품권으로 주문하는 방법",
          ].map((text, index) => (
            <p key={index}>
              <button
                onClick={() => handleClick(index)}
                className={activeIndex === index ? "active" : ""}
              >
                {text}
              </button>
            </p>
          ))}
        </li>
      </ul>
      <ul>
        {filteredCoupon.map((coupon) => (
          <li key={coupon.index}>
            <div>
              <img src={coupon.image} alt={`Coupon ${coupon.index}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
