import React from "react";
import "../css/pageTitle.css";
import { Link } from "react-router-dom";

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
          <li>
            <Link to={props.link1} className="pageTitle-link">
              {props.nav1}
            </Link>
          </li>
          <li>
            <Link to={props.link2} className="pageTitle-link">
              {props.nav2}
            </Link>
          </li>
          <li>
            <Link to={props.link3} className="pageTitle-link">
              {props.nav3}
            </Link>
          </li>
          <li>
            <Link to={props.link4} className="pageTitle-link">
              {props.nav4}
            </Link>
          </li>
          <li>
            <Link to={props.link5} className="pageTitle-link">
              {props.nav5}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
