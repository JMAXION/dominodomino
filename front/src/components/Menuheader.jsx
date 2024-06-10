import React, { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";

import axios from "axios";
import { Link } from "react-router-dom";
import { boldControl } from "./boldControl";

export default function Menuheader({
  name,
  depth1,
  depth2,
  depth3,
  headerName,
}) {
  const [menuList, setMenuList] = useState([]);

  const [isAllVaild, setIsAllVaild] = useState(false);
  useEffect(() => {
    axios
      .get("/data/menu.json")
      .then((res) => {
        if (headerName === "menu") {
          setMenuList(res.data.pizzamenu);
        } else if (headerName === "event/discount" || "event") {
          setMenuList(res.data.eventmenu);
        }
      })
      .catch((error) => console.log(error));
  });

  const handleBtnClick = (e) => {
    console.log(e);

    setIsAllVaild(!isAllVaild);
  };

  return (
    <div className="menu-header-container">
      <div className="menu-header-name-bread-container">
        <div className="menu-header-name">
          <h1>{name}</h1>
        </div>
        <div className="menu-header-bread-crumb">
          <Breadcrumb
            depth1={depth1}
            depth2={depth2}
            depth3={depth3}
            headerName={headerName}
          />
        </div>
      </div>
      <div className="menu-header">
        <ul className="menu-header-list">
          {menuList.map((obj) => (
            <li className="menu-header-list-name sub-list-name">
              <Link
                to={obj.link}
                value={obj.name}
                className={depth3 === obj.name ? "abc" : "bbc"}
              >
                {obj.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <hr></hr>
    </div>
  );
}
