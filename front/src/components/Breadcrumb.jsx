import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ depth1, depth2, depth3, headerName }) {
  return (
    <div className="bread-crumb-container">
      <Link to="/">
        {" "}
        <span className="bread-crumb-depth1">{`${depth1} >`} </span>{" "}
      </Link>
      <Link to={`/${headerName}`}>
        {" "}
        <span className="bread-crumb-depth2">{`${depth2} >`} </span>{" "}
      </Link>
      <Link to="">
        <span className="bread-crumb-depth3">{`${depth3} `} </span>{" "}
      </Link>
    </div>
  );
}
