import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "../../css/news.css";
import axios from "axios";
// paging navigation
import Pagination from "rc-pagination";
// import "bootstrap/dist/css/bootstrap.css";
import "rc-pagination/assets/index.css";

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

  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);
  const [countNews, setCountNews] = useState(0);
  /* paging - 현재 페이지, 총 데이터 수, 페이지사이즈(한 페이지당 rows수) */
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [totalCount, setTotalCount] = useState(15); //총 데이터 수
  const [pageSize, setPageSize] = useState(10); //페이지 사이즈

  /*
   * 게시글 리스트 가져오기 */
  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;
    startIndex = (currentPage - 1) * pageSize + 1;
    endIndex = currentPage * pageSize;

    const url = "http://localhost:8080/news";
    axios({
      method: "post",
      url: url,
      data: { startIndex: startIndex, endIndex: endIndex },
    })
      .then((result) => {
        setNewsList(result.data);
        // console.log("result=>", result.data);
        setTotalCount(result.data[0].total);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  /*
   * 조회수 업데이트 */
  const handleUpdateHits = (bid, rno) => {
    const url = "http://localhost:8080/news/updateHits";
    axios({
      method: "post",
      url: url,
      data: { bid: bid },
    })
      .then((result) => {
        if (result.data.cnt === 1) navigate(`/news/${bid}/${rno}`);
      })
      .catch((error) => console.log(error));
  };

  /*
   * 총 게시글 개수 */
  useEffect(() => {
    const url = "http://localhost:8080/news/countNews";
    axios({
      method: "post",
      url: url,
    })
      .then((result) => setCountNews(result.data))
      .catch((error) => console.log(error));
  });

  /*
   * 페이지네이션 커스텀 */
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>이전</a>;
    }
    if (type === "next") {
      return <a>다음</a>;
    }
    return originalElement;
  };

  const locale = {
    prev_page: "", // 이전 페이지 툴팁
    next_page: "", // 다음 페이지 툴팁
  };

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
          <p>총 {countNews.count}건</p>
          <table>
            <tr>
              <th className="news-board-th1">번호</th>
              <th className="news-board-th2">제목</th>
              <th className="news-board-th3">등록일</th>
              <th className="news-board-th4">조회</th>
            </tr>
            {newsList.map((news) => (
              <tr className="news-board-data">
                <td>{news.rno}</td>
                <td
                  className="news-board-data-title"
                  onClick={() => handleUpdateHits(news.bid, news.rno)}
                >
                  {news.btitle}
                </td>
                <td>{news.bdate}</td>
                <td>{news.bhits}</td>
              </tr>
            ))}
          </table>
          <div className="news-pagingBox">
            <Pagination
              className="d-flex justify-content-left news-paging"
              current={currentPage} //현재 페이지
              total={totalCount} //전체 행 수
              pageSize={pageSize} //페이지 사이즈
              onChange={(page) => setCurrentPage(page)}
              itemRender={itemRender}
              locale={locale}
            />
          </div>
        </div>

        <Link to="/news/write">
          <button type="button" className="news-write">
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  );
}
