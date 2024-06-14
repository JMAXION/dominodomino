import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {
  faChevronUp,
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import axios from "axios";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../util/localStorage";

export default function Header(props) {
  const navigate = useNavigate();
  const userInfo = getUser();
  const handleLogout = () => {
    removeUser();
    navigate("/");
  };
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  const [menuList, setMenuList] = useState([]);
  const [subMenuList, setSubMenuList] = useState([]);
  const [subMenuList2, setSubMenuList2] = useState([]);
  useEffect(() => {
    axios
      .get("/data/menu.json")
      .then((res) => {
        setMenuList(res.data.menu);
        setSubMenuList(res.data.subMenu);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(menuList);
  console.log(subMenuList);
  /* const list2 = ["도미노소개","매니아혜택","도미노 모멘트","퀵오더","단체주문 서비스"]
const list3 = ["고객센터","자주하는 질문","문의/칭찬하기","문의내역/답변"]
const list4 = ["회사소개","한국도미노피자","광고갤러리","사회공헌활동","가맹점 모집","인재채용"]
const list5 = ["공지사항","-도미노뉴스","-보도자료"] */

  return (
    <>
      <div className="header-container">
        <div className="hedaer-container-top">
          <div>
            <Link to="http://localhost:3000/">
              <img
                className="header-logo-img"
                src="http://localhost:3000/images/logo2.png"
              ></img>
            </Link>
          </div>
          <div className="header-promotion">
            <span>
              <FontAwesomeIcon icon={faLocationArrow} />
            </span>
            <input
              className="header-promotion-input"
              type="text"
              placeholder="주변 매장의 프로모션을 확인해보세요!"
            />
          </div>
          <div className="header-member">
            <ul className="header-member-list">
              {userInfo ? (
                <>
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="header-member-list-button"
                      style={{ cursor: "pointer" }}
                    >
                      로그아웃
                    </button>
                  </li>
                  <li className="header-signup">
                    <p>
                      <Link to="/mypage">나의정보</Link>
                    </p>
                  </li>
                  <li className="header-icon">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      onClick={() => navigate("/cart")}
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                </>
              ) : (
                <>
                  <li className="header-login">
                    <p>
                      <Link to="/login">로그인</Link>
                    </p>
                  </li>
                  <li className="header-signup">
                    <p>
                      <Link to="/signup">회원가입</Link>
                    </p>
                  </li>
                </>
              )}
              <li>
                <select className="header-langauge">
                  <option>KOR</option>
                  <option>ENG</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-menu-list-container">
        <ul className="header-menu-list">
          {menuList.map((obj) => (
            <Menu name={obj.name} link={obj.link} />
          ))}
          <li
            className="fromCenter header-show-more"
            onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
            style={{ cursor: "pointer" }}
          >
            더보기
            <span>
              {dropdownVisibility ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="header-show-more-icon"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="header-show-more-icon"
                />
              )}
            </span>
          </li>
        </ul>
        <hr></hr>

        <Dropdown visibility={dropdownVisibility}>
          <div
            className="header-slide-menu"
            onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
          >
            {subMenuList.map((subArray) => (
              <div className="header-slide-menu-sub">
                <ul className="header-slide-menu-sub-list">
                  {subArray.map((item) => (
                    <Menu name={item.name} link={item.link}></Menu>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </>
  );
}
