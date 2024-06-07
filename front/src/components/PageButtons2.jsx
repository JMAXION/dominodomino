import React, { useState } from "react";
import "../css/pageStyle.css";

export default function PageButtons2({ rootList, className, handleTabClick }) {
  const [clicked, setClicked] = useState(rootList[0].root);
  return (
    <div className={`content ${className}`}>
      <div className="page-buttons">
        {rootList.map((obj) => (
          <button
            onClick={() => {
              setClicked(obj.root);
              handleTabClick(obj.tabNum);
            }}
            className={clicked === obj.root ? "active" : ""}
          >
            {obj.name}
            <span>〉</span>
          </button>
        ))}
      </div>
    </div>
  );
}
