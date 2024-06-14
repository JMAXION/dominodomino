import React, { useState } from "react";
import PageTitle from "./PageTitle";

export default function GiftUsage({ depth2 }) {
  const [props, setProps] = useState({
    title: "상품권 선물",
    nav1: "금액상품권",
    nav2: "상품권 사용 안내",
    link1: "/moneygift",
    link2: "/giftusage",
  });

  // 이미지 상태 관리
  const [currentImage, setCurrentImage] = useState(0);
  const [activeButton, setActiveButton] = useState(0); // 활성화된 버튼 인덱스 상태 추가
  const images = [
    "https://cdn.dominos.co.kr/domino/pc/images/coupon/howto_gift.jpg",
    "https://cdn.dominos.co.kr/domino/pc/images/coupon/howto_dominocon3.png",
  ];

  // 버튼 클릭 핸들러
  const handleButtonClick = (index) => {
    setCurrentImage(index);
    setActiveButton(index); // 버튼 클릭 시 활성화된 버튼 인덱스 상태 업데이트
  };

  return (
    <div className="content">
      <PageTitle depth2={depth2} props={props} />
      <div className="giftusage-button">
        <button
          onClick={() => handleButtonClick(0)}
          className={activeButton === 0 ? "active" : ""}
          style={{ cursor: "pointer" }}
        >
          도미노콘(세트&단품)/지류상품권 사용 방법
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={activeButton === 1 ? "active" : ""}
          style={{ cursor: "pointer" }}
        >
          도미노콘 금액상품권 사용 방법
        </button>
      </div>
      <div>
        <img src={images[currentImage]} alt="" />
      </div>
    </div>
  );
}
