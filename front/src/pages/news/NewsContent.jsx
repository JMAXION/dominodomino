import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router-dom";

export default function NewsContent({ depth2 }) {
  const [props, setprops] = useState({
    title: "공지사항",
    breadcrumb: "도미노뉴스",
    breadcrumbLink: "/news", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "도미노뉴스",
    nav2: "보도자료",
    link1: "/news",
    link2: "/announce",
  });

  const { bid, rno } = useParams();

  /* 게시글 리스트 가져오기 */

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <h3>게시물 제목</h3>
      <div>
        <span>날짜</span>
        <span>조회 0</span>
      </div>
      <div>게시물 내용</div>
      <div>
        <button>이전</button>
        <span>이전 게시물 제목</span>
      </div>
      <div>
        <button>다음</button>
        <span>다음 게시물 제목</span>
      </div>
      <button>목록</button>
    </div>
  );
}
