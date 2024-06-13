import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { getUser } from "../util/localStorage";
import axios from "axios";

export default function Information() {
  const [props, setprops] = useState({
    title: "나의 정보",
    nav1: "매니아 등급",
    nav2: "주문내역",
    nav3: "쿠폰함",
    nav4: "금액상품권",
    nav5: "1:1문의/칭찬",
    nav6: "정보수정",
    // breadcrumbLink: "/law",
    link1: "/mypage/mania",
    link2: "/mypage/order",
    link3: "/mypage/coupon",
    link4: "/mypage/certificate",
    link5: "/mypage/qna",
    link6: "/mypage/information",
  });
  const userInfo = getUser();
  console.log(userInfo.userId);
  const userId = userInfo.userId;
  const [info, setInfo] = useState({});
  useEffect(() => {
    const url = `http://localhost:8080/member/info/${userId}`;
    // console.log(url);
    axios
      .get(`http://localhost:8080/member/info/${userId}`)
      .then((result) => setInfo(result.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(userInfo);
  return (
    <div className="content">
      <PageTitle props={props} />
      <ul className="mania-info personal">
        <li className="personal-info">
          <p>개인정보 확인</p>
          <p></p>
          <p>
            회원정보를 정확히 기입하시면 다양한 서비스를 원활하게 이용할 수
            있습니다.
          </p>
        </li>
      </ul>
      <p className="personal-information">
        <ul>
          <li>이름</li>
          <li>아이디</li>
          <li>비밀번호</li>
          <li>전화번호</li>
          <li>이메일</li>
          <li>주소</li>
        </ul>
        <ul>
          <li>{info.user_name}</li>
          <li>{info.user_id}</li>
          <li>{userInfo.iat}</li>
          <li>{info.phone}</li>
          <li>
            {info.email_id}@{info.email_domain}
          </li>
          <li>{info.address}</li>
        </ul>
      </p>
    </div>
  );
}
