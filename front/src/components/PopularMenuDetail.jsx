import React, { useState } from "react";

import PageTitle from "./PageTitle";
import { useLocation } from "react-router-dom";
import HnfInfoModal from "./HnfInfoModal";

export default function PopularMenuDetail({ depth2 }) {
  const location = useLocation({});
  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: "인기세트메뉴",
    breadcrumbLink: "/popular",
    nav1: "피자",
    nav2: "하프앤하프",
    nav3: "사이드디시",
    nav4: "인기세트메뉴",
    nav5: "음료&기타",
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/popular",
    link5: "/beverage",
  });
  console.log(location);
  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <ul className="popular-setmenu">
        <li>
          <img src={location.state.combo.image2} alt="" />
          <p>*모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.</p>
        </li>
        <li>
          <p>
            <h3>{location.state.combo.name}</h3>
            <p>{location.state.combo.text}</p>
            <HnfInfoModal />
          </p>
          <p>
            <p>세트 선택</p>
          </p>
        </li>
      </ul>
    </div>
  );
}
