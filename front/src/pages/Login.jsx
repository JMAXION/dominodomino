import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle2 from "../components/PageTitle2";
import LoginMember from "../components/LoginMember";

export default function Login() {
  const clickChange = () => {
    alert("비회원 로그인시 퀵오더, 특가제품 및 일부할인의 이용은 불가합니다.");
  };
  const clickAlert = () => {
    alert("도미노피자 회원가입 시 배달 20% 할인쿠폰 드립니다!");
  };
  return <LoginMember />;
}
