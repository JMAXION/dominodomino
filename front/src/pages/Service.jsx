import React, { useEffect, useState } from "react";
import PageTitle from "../component/PageTitle";
import PageButtons from "../component/PageButtons";
import { Link } from "react-router-dom";

export default function Service() {
  const [props, setprops] = useState({
    title: "도미노 서비스",
    breadcrumb: "매니아 혜택",
    breadcrumbLink: "/service",
    nav1: "매니아 혜택",
    nav2: "도미노 모멘트",
    nav3: "퀵오더",
    nav4: "단체주문 서비스",
    link1: "/service",
    link2: "/service/moment",
    link3: "/service/quickOrder",
    link4: "/service/groupOrder",
  });

  const [buttonList, setButtonList] = useState([]);
  useEffect(() => {
    fetch("/data/dominoService.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("list ->", result);
        setButtonList(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} />
      {/* ----- 본문 ----- */}
      <PageButtons buttonList={buttonList} />
    </div>
  );
}
