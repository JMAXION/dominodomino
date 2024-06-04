import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUser, removeUser } from "../util/localStorage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function HomeCoupon() {
  const userInfo = getUser();
  return (
    <div className="homecoupon">
      <ul className="homecoupon-nowlevel">
        {userInfo ? (
          <>
            <li className="homecoupon-nowlevel-text">
              <li>{userInfo.userId} 님의</li>
              <span>특별한 매니아 혜택</span>
              <li>누려보세요!</li>
            </li>
            <li className="homecoupon-nowlevel-text-button">
              <button>
                <Link
                  to="/mypage"
                  className="hcnltb-link"
                  onClick={() => ScrollToTop()}
                >
                  혜택보기
                </Link>
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="homecoupon-nowlevel-text">
              <li>도미노피자의</li>
              <span>특별한 매니아 혜택</span>
              <li>누려보세요!</li>
            </li>
            <li className="homecoupon-nowlevel-text-button">
              <button>
                <Link
                  to="/login"
                  className="hcnltb-link"
                  onClick={() => ScrollToTop()}
                >
                  로그인
                </Link>
              </button>
            </li>
          </>
        )}
      </ul>
      <ul className="homecoupon-button">
        {userInfo ? (
          <>
            <li className="homecoupon-coupon">
              <Link to="/mypage/coupon">
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card1.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link to="/service/mania">
                <li className="homecoupon-coupon-mylevel"></li>
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card2.gif"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <li>
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card5.png"
                  alt=""
                />
              </li>
            </li>
          </>
        ) : (
          <>
            <li className="homecoupon-coupon">
              <Link to="/login">
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card1.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link to="/service/mania">
                <li className="homecoupon-coupon-mylevel"></li>
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card2.gif"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <li>
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card5.png"
                  alt=""
                />
              </li>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
