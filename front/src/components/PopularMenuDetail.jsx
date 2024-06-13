import React, { useState } from "react";

import PageTitle from "./PageTitle";

export default function PopularMenuDetail({ depth2 }) {
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
  return (
    <>
      <PageTitle props={props} depth2={depth2} />
      <h1>야호</h1>
    </>
  );
}
