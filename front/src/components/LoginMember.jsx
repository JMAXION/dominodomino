import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import * as cookie from "../util/cookies.js";
import PageTitle from "../components/PageTitle2";

export default function LoginMember() {
  const navigate = useNavigate();
  const userIdRef = useRef(null);
  const userPassRef = useRef(null);
  const [formData, setFormData] = useState({ userId: "", userPass: "" });
  const [props, setProps] = useState({
    title: "로그인",
    nav1: "로그인",
    link1: "/login",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      console.log(formData);
      const url = "http://127.0.0.1:8080/member/login";
      axios({
        method: "post",
        url: url,
        data: formData,
      })
        .then((res) => {
          if (res.data.cnt === 1) {
            console.log("token -->", res.data.token);
            cookie.setCookie("x-auth-jwt", res.data.token);
            const userInfo = jwtDecode(res.data.token);
            // alert(JSON.stringify(userInfo));
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            alert("로그인 성공!");
            navigate("/");
          } else {
            alert("로그인 실패!");
            setFormData({ userId: "", userPass: "" });
            userIdRef.current.focus();
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const validationCheck = () => {
    let checkFlag = true;
    if (!formData.userId.trim()) {
      alert("아이디를 입력해 주세요");
      userIdRef.current.focus();
      checkFlag = false;
    } else if (!formData.userPass.trim()) {
      alert("패스워드를 입력해주세요");
      userPassRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  const clickChange = () => {
    alert("비회원 로그인시 퀵오더, 특가제품 및 일부할인의 이용은 불가합니다.");
  };
  const clickAlert = () => {
    alert("도미노피자 회원가입 시 배달 20% 할인쿠폰 드립니다!");
  };
  return (
    <div className="content">
      <p className="login-title">
        <PageTitle props={props} />
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          <li className="login-lnlbutton">
            <Link to="/login" className="login-lnlbtn1">
              <button style={{ cursor: "pointer" }}>회원로그인</button>
            </Link>
            <Link
              to="/nonmember"
              className="login-lnlbtn2"
              onClick={clickChange}
            >
              <button style={{ cursor: "pointer" }}>비회원주문</button>
            </Link>
          </li>
          <li className="login-id">
            <input
              type="text"
              placeholder="아이디"
              name="userId"
              ref={userIdRef}
              value={formData.userId}
              onChange={handleChange}
            />
          </li>
          <li className="login-pass">
            <input
              type="password"
              placeholder="비밀번호"
              name="userPass"
              ref={userPassRef}
              value={formData.userPass}
              onChange={handleChange}
            />
          </li>

          <li className="login-button">
            <button type="submit" style={{ cursor: "pointer" }}>
              로그인
            </button>
          </li>
          <li className="signin-button">
            <Link to="/signup" onClick={clickAlert}>
              <button type="button" style={{ cursor: "pointer" }}>
                회원가입
              </button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
