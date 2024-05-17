import React from "react";
import { Link } from "react-router-dom";

export default function LoginMember() {
  const clickChange = () => {
    alert("비회원 로그인시 퀵오더, 특가제품 및 일부할인의 이용은 불가합니다.");
  };
  const clickAlert = () => {
    alert("도미노피자 회원가입 시 배달 20% 할인쿠폰 드립니다!");
  };
  return (
    <div className="content">
      <h2 className="login-h2">로그인</h2>
      <form className="login-form">
        <ul>
          <li className="login-lnlbutton">
            <Link to="/login" className="login-lnlbtn1">
              <button>회원로그인</button>
            </Link>
            <Link
              to="/nonmember"
              className="login-lnlbtn2"
              onClick={clickChange}
            >
              <button>비회원주문</button>
            </Link>
          </li>
          <li className="login-id">
            <input type="text" placeholder="아이디" />
          </li>
          <li className="login-pass">
            <input type="text" placeholder="비밀번호" />
          </li>
          <li className="login-save-find">
            <li className="login-save-id">
              <input type="checkbox" />
              아이디저장
            </li>
            <li className="login-find">
              <button>아이디 찾기</button>
              <button>비밀번호 찾기</button>
            </li>
          </li>
          <li className="login-button">
            <button>로그인</button>
          </li>
          <li className="signin-button">
            <Link to="/signup" onClick={clickAlert}>
              <button>회원가입</button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
