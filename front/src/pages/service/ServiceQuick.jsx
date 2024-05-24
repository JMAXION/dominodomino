import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";

export default function ServiceQuick({ depth2 }) {
  const [props, setprops] = useState({
    title: "도미노 서비스",
    breadcrumb: "퀵오더", //브레드크럼 경로가 3개 이상일때 사용
    breadcrumbLink: "/service/mania", //브레드크럼 경로가 3개 이상일때 사용
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
    <div>
      <PageTitle props={props} depth2={depth2} />
    </div>
  );
}
