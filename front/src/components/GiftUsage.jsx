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
  return (
    <div className="content">
      <PageTitle depth2={depth2} props={props} />
      <div>
        <button>도미노콘(세트&단품)/지류상품권 사용 방법</button>
        <button>도미노콘 금액상품권 사용 방법</button>
      </div>
      <div>
        <img
          src="https://cdn.dominos.co.kr/domino/pc/images/coupon/howto_gift.jpg"
          alt=""
        />
        <img
          src="https://cdn.dominos.co.kr/domino/pc/images/coupon/howto_dominocon3.png"
          alt=""
        />
      </div>
    </div>
  );
}
