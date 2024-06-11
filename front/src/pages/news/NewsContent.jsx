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
    link1: "/news",
  });
  const [news, setNews] = useState({});
  console.log("news ==>", news);
  const [prevNextBids, setPrevNextBids] = useState({
    prevBid: null,
    nextBid: null,
  });
  const [prevNextBtitles, setPrevNextBtitles] = useState({
    prevBid: "",
    nextBid: "",
  });
  const { bid, rno } = useParams();
  const navigate = useNavigate();

  const handleNavigate = (type) => {
    console.log("prevNextBids.prevBid =>", prevNextBids.prevBid);
    console.log("prevNextBids.nextBid =>", prevNextBids.nextBid);
    let prevRno = parseInt(rno) - 1;
    let nextRno = parseInt(rno) + 1;
    if (type === "prev" && prevNextBids.prevBid !== null)
      navigate(`/news/${prevNextBids.prevBid}/${prevRno}`);
    else if (type === "next" && prevNextBids.nextBid !== null)
      navigate(`/news/${prevNextBids.nextBid}/${nextRno}`);
    else navigate("/news");
  };

  /* 게시글 리스트 가져오기 */
  const url = `http://localhost:8080/news/${bid}`;
  useEffect(() => {
    axios({
      method: "get",
      url: url,
    })
      .then((result) => setNews(result.data))
      .catch((error) => console.log(error));
  }, [bid]);

  /* 게시글 이전/다음 글 bid, btitle 가져오기 */
  useEffect(() => {
    const fetchPrevNextBids = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/news/prev-next/${bid}`
        );
        setPrevNextBids({
          prevBid: response.data["prevBid"],
          nextBid: response.data["nextBid"],
        });
        setPrevNextBtitles({
          prevBtitle: response.data["prevBtitle"],
          nextBtitle: response.data["nextBtitle"],
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrevNextBids();
  }, [bid]);

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
          /* 게시글 줄바꿈 처리 */
          news.bcontent.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </div>
      {prevNextBtitles.prevBtitle ? (
        <div
          className="newsContent-subBox"
          onClick={() => handleNavigate("prev")}
        >
          <span>이전</span>
          <span>{prevNextBtitles.prevBtitle}</span>
        </div>
      ) : (
        <div className="newsContent-noContent">
          <span>이전</span>
          <span>이전 글이 없습니다.</span>
        </div>
      )}
      {prevNextBtitles.nextBtitle ? (
        <div
          className="newsContent-subBox"
          onClick={() => handleNavigate("next")}
        >
          <span>다음</span>
          <span>{prevNextBtitles.nextBtitle}</span>
        </div>
      ) : (
        <div className="newsContent-subBox">
          <span>다음</span>
          <span className="newsContent-noContent">다음 글이 없습니다.</span>
        </div>
      )}
      <div className="newsContent-listBox">
        <button
          type="button"
          className="newsContent-list"
          onClick={() => handleNavigate("list")}
        >
          목록
        </button>
      </div>
    </div>
  );
}
