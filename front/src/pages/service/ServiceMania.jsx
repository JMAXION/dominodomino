import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
// import PageButtons from "../../components/PageButtons";
import TabDetail from "../TabDetail.jsx";
import { Link } from "react-router-dom";

export default function ServiceMania() {
  const [props, setprops] = useState({
    title: "도미노 서비스",
    // breadcrumb: "매니아 혜택",
    breadcrumbLink: "/service/mania",
    nav1: "매니아 혜택",
    nav2: "도미노 모멘트",
    nav3: "퀵오더",
    nav4: "단체주문 서비스",
    link1: "/service/mania",
    link2: "/service/moment",
    link3: "/service/quickOrder",
    link4: "/service/groupOrder",
  });

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} />
      {/* ----- 본문 ----- */}
      <div>
        <TabDetail />
      </div>
    </div>
  );
}
