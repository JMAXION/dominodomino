import React, { useEffect, useState } from "react";
import "../css/pageStyle.css";
import { Link, useLocation } from "react-router-dom";

export default function PageButtons2({
  basePath,
  rootList,
  className,
  handleTabClick,
  // onPageBtnClick,
}) {
  const [clicked, setClicked] = useState(rootList[0].root);
  // const location = useLocation();
  // useEffect(() => {
  //   if (rootList && rootList.length > 0) {
  //     const currentPath = location.pathname.split("/").pop();
  //     // console.log("currentPath->", currentPath);
  //     const matchedPath = rootList.find((obj) => obj.root === currentPath);
  //     // console.log("matchedPath->", matchedPath);
  //     if (matchedPath) {
  //       setClicked(matchedPath.root);
  //     } else {
  //       setClicked(rootList[0].root);
  //     }
  //   }
  // }, [rootList, location.pathname]);
  return (
    <div className={`content ${className}`}>
      <div className="page-buttons">
        {rootList.map((obj) => (
          // <Link to={`${basePath}/${obj.root}`}>
          <button
            onClick={(index) => {
              setClicked(obj.root);
              // onPageBtnClick(index);
              handleTabClick(obj.tabNum);
            }}
            className={clicked === obj.root ? "active" : ""}
          >
            {obj.name}
            <span>〉</span>
          </button>
          // </Link>
        ))}
      </div>
    </div>
  );
}
