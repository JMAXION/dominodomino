import React from "react";
import "../css/pageStyle.css";
import { Link } from "react-router-dom";

/* 브레드크럼, 퀵 네비게이션 개수 => 상황에 맞게 조절해서 사용하세요 */
/** 사용방법 
 * 
 * 1. 컴포넌트에서 props로 아래 사항을 넘겨주세요
  const [props, setprops] = useState({
    title: "페이지 타이틀",
    breadcrumb : "2번째 브레드크럼"  //브레드크럼 경로가 3개 이상일때 사용
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

  * 2. App.js에서 파일 넘기실 때, 브레드크럼의 마지막 이름을 depth2로 함께 넘겨주세요
*/

export default function PageTitle({ props, depth2 }) {
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
          {props.breadcrumb && <li>{props.breadcrumb}</li>}
        </ul>
      </div>
      <div>
        {/* ------- 메뉴 네비게이션 ------- */}
        <ul className="pageTitle-nav">
          {props.nav1 && (
            <li>
              <Link
                to={props.link1}
                className={`pageTitle-link ${
                  props.nav1 === depth2 ? "bold" : ""
                }`}
              >
                {props.nav1}
              </Link>
            </li>
          )}
          {props.nav2 && (
            <li>
              <Link
                to={props.link2}
                className={`pageTitle-link ${
                  props.nav2 === depth2 ? "bold" : ""
                }`}
              >
                {props.nav2}
              </Link>
            </li>
          )}
          {props.nav3 && (
            <li>
              <Link
                to={props.link3}
                className={`pageTitle-link ${
                  props.nav3 === depth2 ? "bold" : ""
                }`}
              >
                {props.nav3}
              </Link>
            </li>
          )}
          {props.nav4 && (
            <li>
              <Link
                to={props.link4}
                className={`pageTitle-link ${
                  props.nav4 === depth2 ? "bold" : ""
                }`}
              >
                {props.nav4}
              </Link>
            </li>
          )}
          {props.nav5 && (
            <li>
              <Link
                to={props.link5}
                className={`pageTitle-link ${
                  props.nav5 === depth2 ? "bold" : ""
                }`}
              >
                {props.nav5}
              </Link>
            </li>
          )}
          {props.nav6 && (
            <li>
              <Link
                to={props.link6}
                className={`pageTitle-link ${
                  props.nav6 === depth2 ? "bold" : ""
                }`}
              >
                {props.nav6}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
