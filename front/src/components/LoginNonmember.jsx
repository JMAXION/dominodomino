import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle2 from "./PageTitle2";

export default function LoginNonmember() {
  const clickChange = () => {
    alert("비회원 로그인시 퀵오더, 특가제품 및 일부할인의 이용은 불가합니다.");
  };
  const clickAlert = () => {
    alert("도미노피자 회원가입 시 배달 20% 할인쿠폰 드립니다!");
  };
  const [props, setProps] = useState({
    title: "로그인",
    nav1: "로그인",
    link1: "/login",
  });
  return (
    <div className="content">
      <p className="login-title">
        <PageTitle2 props={props} />
      </p>
      <form className="login-nonmember-form">
        <ul>
          <li className="login-lnlbutton">
            <Link to="/login" className="login-lnlbtn2">
              <button>회원로그인</button>
            </Link>
            <Link
              to="/nonmember"
              className="login-lnlbtn1 "
              onClick={clickChange}
            >
              <button>비회원주문</button>
            </Link>
          </li>
          <li className="login-nonmember-term">
            <p className="login-nonmember-signup">
              아직 도미노피자 회원이 아니세요?{" "}
              <span>
                <Link to="/signup">회원가입</Link>
              </span>
            </p>
          </li>
          <li className="login-nonmember-term-agree">
            <p className="login-nonmember-checkbox1">
              <input type="checkbox" /> 비회원 약관 전체 동의
            </p>
            <p className="login-nonmember-checkbox2">
              <input type="checkbox" /> 비회원 개인정보 수집 및 이용 동의 (필수)
            </p>
            <p className="login-nonmember-checkbox3">
              <input type="checkbox" /> 이용약관 동의 (필수)
            </p>
            <p className="login-nonmember-checkbox4">
              <input type="checkbox" /> 본인은 만 14세 이상입니다 (필수)
            </p>
            <p className="login-nonmember-warning">
              개인정보 수집 및 이용약관에 대한 동의를 거부하실 수 있으나, <br />
              거부 시 주문 등 주요 서비스 등의 이용이 불가합니다.
            </p>
          </li>
          <li className="login-nonmember-access">
            <p className="login-nonmember-name">
              <input type="text" placeholder="이름" />
            </p>
            <p className="login-nonmember-phone">
              <select>
                <option value="010">010</option>
              </select>
              <input type="number" />
              <input type="number" />
              <button>인증번호</button>
            </p>
            <p className="login-nonmember-accesscode">
              <input type="text" placeholder="인증번호" />
            </p>
          </li>
          <p className="login-nonmember-orderbutton">
            <button>주문하기</button>
          </p>
          <li className="login-nonmember-event">
            <p>비회원 주문 시 매니아 및 제휴할인 혜택을 받을 수 없습니다.</p>
            <p>
              도미노피자의 특별한 매니아 혜택을 누려보세요!{" "}
              <Link to="/service/mania">매니아 혜택</Link>
            </p>
            <p>
              10대 고객에게만 드리는 특별한 혜택을 마음껏 누려보세요!{" "}
              <Link to="/service/teen">틴 매니아</Link>
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
}
