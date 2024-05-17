import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import PageButtons from "../components/PageButtons";

export default function TabDetail() {
  const { id } = useParams();
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

  const [tabList, setTabList] = useState({});
  useEffect(() => {
    fetch("/data/dominoService.json")
      .then((res) => res.json())
      .then((result) => {
        console.log("tab list->", result);
        const foundTab = result.find((item) => {
          return item.root === id;
        });
        console.log("foundTab ->", foundTab);
        setTabList(foundTab);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} />
      <PageButtons buttonList={buttonList} />
      <h1>{tabList.title}</h1>
    </div>
  );
}
