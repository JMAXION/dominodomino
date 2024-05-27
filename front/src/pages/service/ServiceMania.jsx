import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
// import PageButtons from "../../components/PageButtons";
import TabDetail from "../TabDetail.jsx";
import { Link, useParams } from "react-router-dom";

export default function ServiceMania({ depth2 }) {
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

  const { id } = useParams();

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

  const [tabList, setTabList] = useState({});
  useEffect(() => {
    fetch("/data/dominoService.json")
      .then((res) => res.json())
      .then((result) => {
        console.log("tab list->", result);
        const foundTab = result.find((item) => {
          return item.root === id;
        });
        console.log("id->", id);
        console.log("foundTab ->", foundTab);
        setTabList(foundTab);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div>
        <TabDetail
          buttonList={buttonList}
          tabList={tabList}
          basePath="/service"
          className="ServiceMania"
        />
      </div>
    </div>
  );
}
