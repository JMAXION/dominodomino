import React, { useState } from "react";
import "../css/pageStyle.css";

export default function PageButtons2({
  rootList,
  className,
  handleTabClick,
  onPageBtnClick,
  handleCid,
}) {
  const [clicked, setClicked] = useState(rootList[0].root);
  return (
    <div className={`content ${className}`}>
      <div className="page-buttons">
        {rootList.map((obj) => (
          <button
            onClick={(index) => {
              setClicked(obj.root);
              handleTabClick(obj.tabNum);
              onPageBtnClick(index);
              handleCid(obj.cid);
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
