import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/news.css";
import axios from "axios";

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
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/news");
  };

  /* 게시글 줄바꿈 처리 */

  /* 게시글 리스트 가져오기 */
  const [news, setNews] = useState({});
  const url = `http://localhost:8080/news/${bid}`;
  useEffect(() => {
    axios({
      method: "get",
      url: url,
    })
      .then((result) => setNews(result.data))
      .catch((error) => console.log(error));
  }, [bid]);

  // console.log("news =>", news[0].btitle);

  return (
    <div className="content newsContent">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div className="newsContent-titleBox">
        <h3>{news.btitle}</h3>
        <div>
          <span className="newsContent-titleBox-date">{news.bdate}</span>
          <span className="newsContent-titleBox-hits">조회 {news.bhits}</span>
        </div>
      </div>
      <div className="newsContent-contents">
        {news.bcontent &&
          news.bcontent.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </div>
      <div className="newsContent-subBox">
        <button>이전</button>
        <span>이전 게시물 제목</span>
      </div>
      <div className="newsContent-subBox">
        <button>다음</button>
        <span>다음 게시물 제목</span>
      </div>
      <div className="newsContent-listBox">
        <button
          type="button"
          className="newsContent-list"
          onClick={handleNavigate}
        >
          목록
        </button>
      </div>
    </div>
  );
}
