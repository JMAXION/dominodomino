import React from "react";
import "../css/pageTitle.css";
import { Link } from "react-router-dom";

export default function PageTitle2({ props }) {
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
    </div>
  );
}
