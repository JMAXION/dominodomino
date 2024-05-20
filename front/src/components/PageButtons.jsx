import React from "react";
import "../css/pageButtons.css";
import { Link } from "react-router-dom";

export default function PageButtons({ buttonList }) {
  return (
    <div className="content">
      <div className="page-buttons">
        {buttonList.map((obj) => (
          <Link to={`/service/${obj.root}`}>
            <button>{obj.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
