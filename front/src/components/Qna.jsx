import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Qna() {
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
  return (
    <div className="content">
      <PageTitle props={props} />
      <ul className="qna">
        <li>
          <span>장현수</span>님께서 문의하신 내용입니다
        </li>
        <li></li>
        <li>장현수님께서 문의하신 내용은 총 0건입니다.</li>
      </ul>
      <table className="qna-table">
        {/* <colgroup>
          <col width="50%" />
          <col width="50%" />
        </colgroup> */}
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th>처리상태</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <ul className="qna-button">
        <button>문의/칭찬하기</button>
      </ul>
    </div>
  );
}
