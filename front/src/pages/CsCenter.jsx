import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TabDetail from "./TabDetail";
import { useParams } from "react-router-dom";
import "../css/csCenter.css";

export default function CsCenter({ depth2 }) {
  const [props, setprops] = useState({
    title: "고객센터",
    breadcrumb: "자주하는 질문",
    breadcrumbLink: "/csCenter", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "자주하는 질문",
    nav2: "1:1문의/칭찬",
    link1: "/csCenter",
    link2: "/",
  });

  const { id } = useParams();

  const [buttonList, setButtonList] = useState([]);
  useEffect(() => {
    fetch("/data/dominoCsCenter.json")
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
    fetch("/data/dominoCsCenter.json")
      .then((res) => res.json())
      .then((result) => {
        console.log("tab list->", result);
        const foundTab = result.find((item) => {
          return item.root === id;
        });
        console.log("id->", id);
        // console.log("foundTab ->", foundTab);
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
        <div className="cs-topBox">
          <div className="cs-topBox-desc">
            <p>도미노피자에 대한 궁금증을 바로 확인하실 수 있습니다.</p>
            <p>도미노피자 고객만족센터 080-860-3082</p>
          </div>
          <div className="cs-topBox-search">
            <select>
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="tandc">제목+내용</option>
            </select>
            <input type="text" />
            <div className="cs-search-btn">
              <button type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div className="div-line"></div>
        <TabDetail
          buttonList={buttonList}
          tabList={tabList}
          basePath="/cs"
          className="CsCenter"
          showQnA={true}
        />
      </div>
    </div>
  );
}
