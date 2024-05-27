import React, { useEffect, useState } from "react";
import "../css/pageStyle.css";
import { Link, useLocation } from "react-router-dom";

export default function PageButtons({ basePath, buttonList, className }) {
  const [clicked, setClicked] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (buttonList && buttonList.length > 0) {
      const currentPath = location.pathname.split("/").pop();
      // console.log("currentPath->", currentPath);
      const matchedPath = buttonList.find((obj) => obj.root === currentPath);
      // console.log("matchedPath->", matchedPath);
      if (matchedPath) {
        setClicked(matchedPath.root);
      } else {
        setClicked(buttonList[0].root);
      }
    }
  }, [buttonList, location.pathname]);
  return (
    <div className={`content ${className}`}>
      <div className="page-buttons">
        {buttonList.map((obj) => (
          <Link to={`${basePath}/${obj.root}`}>
            <button
              onClick={() => {
                setClicked(obj.root);
              }}
              className={clicked === obj.root ? "active" : ""}
            >
              {obj.name}
              <span>〉</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
