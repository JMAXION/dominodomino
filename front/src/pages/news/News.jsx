import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../css/news.css";

export default function News({ depth2 }) {
  const [props, setprops] = useState({
    title: "공지사항",
    breadcrumb: "도미노뉴스",
    breadcrumbLink: "/news", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "도미노뉴스",
    nav2: "보도자료",
    link1: "/news",
    link2: "/announce",
  });
  return (
    <div>
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div className="content news">
        <div className="news-search">
          <select>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="tandc">제목+내용</option>
          </select>
          <input type="text" />
          <div className="news-search-btn">
            <button type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        <div className="news-board">
          <p>총 n건</p>
          <table>
            <tr>
              <th className="news-board-th1">번호</th>
              <th className="news-board-th2">제목</th>
              <th className="news-board-th3">등록일</th>
              <th className="news-board-th4">조회</th>
            </tr>
            <tr className="news-board-data">
              <td>1</td>
              <td>제목</td>
              <td>날짜</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
