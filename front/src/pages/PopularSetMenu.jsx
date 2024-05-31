import React, { useState } from "react";
import PopularSetMenuProduct from "../components/PopularSetMenuProduct";
import PageTitle from "../components/PageTitle";

export default function PopularSetMenu() {
  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: "사이드디시",
    breadcrumbLink: "/pizzas",
    nav1: "피자",
    nav2: "하프앤하프",
    nav3: "사이드디시",
    nav4: "인기세트메뉴",
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/popular",
  });
  return (
    <div>
      <PageTitle props={props} />
      <PopularSetMenuProduct />
    </div>
  );
}
