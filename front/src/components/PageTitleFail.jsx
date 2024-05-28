import React, { useState } from "react";
import "../css/pageStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* 브레드크럼, 퀵 네비게이션 개수 => 상황에 맞게 조절해서 사용하세요 */
/** 사용방법 (컴포넌트에서 props로 아래 사항을 넘겨주세요)
const [props, setprops] = useState({
    title: "페이지 타이틀",
    breadcrumb: "3번째 브레드크럼 이름-ex)매니아혜택",       //브레드크럼 경로가 3개 이상일때 사용
    breadcrumbLink: "2번째 브레드크럼 경로-ex)/service",    //브레드크럼 경로가 3개 이상일때 사용
    nav1: "페이지 퀵 네비게이션 이름1",
    nav2: "페이지 퀵 네비게이션 이름2",
    nav3: "페이지 퀵 네비게이션 이름3",
    nav4: "페이지 퀵 네비게이션 이름4",
    link1: "페이지 퀵 네비게이션 경로1 -/service",
    link2: "페이지 퀵 네비게이션 경로2 -/service/moment",
    link3: "페이지 퀵 네비게이션 경로3 -/service/quickOrder",
    link4: "페이지 퀵 네비게이션 경로4 -/service/groupOrder",
  });

*/

export default function PageTitle({ props }) {
  const [clicked, setClicked] = useState(null);
  const navigate = useNavigate();
  console.log("clicked !!!!!!!!!!!!!!!", clicked);

  const navLinks = [
    { nav: props.nav1, link: props.link1 },
    { nav: props.nav2, link: props.link2 },
    { nav: props.nav3, link: props.link3 },
    { nav: props.nav4, link: props.link4 },
    props.nav5 && { nav: props.nav5, link: props.link5 },
  ].filter(Boolean); // null 또는 undefined 항목을 제거

  const handleClick = (event, nav, link) => {
    event.preventDefault(); // 기본 앵커 동작 방지
    setClicked(nav); // 상태 업데이트
    navigate(link); // 페이지 이동
  };

  return (
    <div className="content">
      <div className="pageTitle-innerbox">
        <h1 className="title">{props.title}</h1>
        {/* ------- 브레드크럼 ------- */}
        <ul className="breadCrumb">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            {props.breadcrumbLink ? (
              <Link to={props.breadcrumbLink}>{props.title}</Link>
            ) : (
              props.title
            )}
          </li>
          {props.breadcrumb && (
            <li className="last-breadcrumb">{props.breadcrumb}</li>
          )}
        </ul>
      </div>
      <div>
        {/* ------- 메뉴 네비게이션 ------- */}
        <ul className="pageTitle-nav">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={`http://localhost:3000${item.link}`}
                className="pageTitle-link"
                onClick={(event) => handleClick(event, item.nav, item.link)}
              >
                <span
                  style={{
                    fontWeight: clicked === item.nav ? "bold" : "normal",
                  }}
                >
                  {item.nav}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
