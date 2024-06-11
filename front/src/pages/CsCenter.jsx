import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/csCenter.css";
import PageButtons2 from "../components/PageButtons2";
import axios from "axios";

export default function CsCenter({ depth2 }) {
  const [props, setprops] = useState({
    title: "고객센터",
    breadcrumb: "자주하는 질문",
    breadcrumbLink: "/csCenter", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "자주하는 질문",
    nav2: "1:1문의/칭찬",
    link1: "/csCenter",
    link2: "/mypage/qna",
  });
  // 페이지네이션
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeIndex, setActiveIndex] = useState(-1); // 배열의 인덱스에서 -1 === 존재하지않음을 의미
  const [activeCid, setActiveCid] = useState(1);
  // 질문 답변 리스트
  const [qnaList, setQnaList] = useState([]);
  // 검색 기능 구현
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [dbFilteredResults, setDbFilteredResults] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  // 토글 답변 크기용
  const answerRefs = useRef([]);

  /* TabButton에 넘길 배열 */
  const rootList = [
    { root: "order", name: "피자 주문하기", tabNum: "tab1", cid: 1 },
    { root: "checkOrder", name: "주문확인", tabNum: "tab2", cid: 2 },
    { root: "takeout", name: "포장주문", tabNum: "tab3", cid: 3 },
    { root: "discount", name: "할인/쿠폰", tabNum: "tab4", cid: 4 },
    { root: "present", name: "상품권/도미노콘/선물", tabNum: "tab5", cid: 5 },
    { root: "pay", name: "도미노페이/퀵오더", tabNum: "tab6", cid: 6 },
    { root: "member", name: "회원/로그인", tabNum: "tab7", cid: 7 },
    { root: "etc", name: "기타", tabNum: "tab8", cid: 8 },
  ];

  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
    setIsFiltered(false);
    setDbFilteredResults([]);
  };

  /* 검색 value 저장 */
  // useEffect(() => {
  //   if (searchInput) {
  //     setFilteredResults(searchInput);
  //   } else {
  //     setFilteredResults([]);
  //   }
  // }, [searchInput]);

  /* 검색 결과 가져오기 */
  const searchDatabase = async (searchInput) => {
    try {
      const url = "http://localhost:8080/cs/search";
      const response = await axios.post(url, { searchInput: searchInput });
      console.log("response.data => ", response.data);

      const data = response.data;
      const transformedData = [];
      let question = null;

      data.forEach((item) => {
        if (item.type === "Q") {
          question = item.content;
        } else if (item.type === "A" && question) {
          transformedData.push({ question, answer: item.content });
          question = null;
        }
      });

      setDbFilteredResults(transformedData);
      // console.log("response.data => ", response.data);
      // setDbFilteredResults(response.data);
    } catch (error) {
      console.error("Error in searchDatabase:", error);
    }
  };

  // 순환 참조 감지 및 제거 함수
  const removeCircularReferences = (obj) => {
    const seen = new WeakSet();
    return JSON.parse(
      JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      })
    );
  };

  const handleSubmit = async () => {
    const input = searchInput; // 예시 입력값
    const sanitizedInput = removeCircularReferences(input);
    await searchDatabase(sanitizedInput);
  };

  /*
   * 질문 답변 가져오기 */
  useEffect(() => {
    const url = "http://localhost:8080/cs/order";
    axios
      .post(url, { cid: activeCid })
      .then((result) => {
        const data = result.data;
        const transformedData = [];
        let question = null;

        data.forEach((item) => {
          if (item.type === "Q") {
            question = item.content;
          } else if (item.type === "A" && question) {
            transformedData.push({ question, answer: item.content });
            question = null;
          }
        });

        setQnaList(transformedData);
      })
      .catch((error) => console.log(error));
  }, [activeCid]);

  const handleCid = (cid) => {
    setActiveCid(cid);
  };

  /*
   * 아코디언 열고 닫기 */
  const toggleIsActive = (index) => {
    // console.log("index -->", index);
    setActiveIndex((prevIndex) => (index !== prevIndex ? index : -1)); //activeIndex의 이전의 값과 같지 않으면 누른 div의 index값 넣음
  };

  /*
   * 답변 크기 자동으로 받아오기 */
  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex, qnaList]);

  /*
   * 탭 누를때마다 아코디언 전체 초기화 */
  const onPageBtnClick = (index) => {
    //index값과 상관없이 activeIndex 초기화(-1)
    setActiveIndex(-1);
  };

  /*
   * 검색 버튼 */
  const handleSearch = () => {
    const result = qnaList.filter(
      (item) =>
        item.question.includes(searchInput) || item.answer.includes(searchInput)
    );
    setFilteredResults(result);
    setIsFiltered(true);
    if (searchInput) {
      const filteredData = qnaList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(qnaList);
    }
  };

  console.log("dbFilteredResults =>", dbFilteredResults);
  console.log("qnaList =>", qnaList);

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div>
        <div className="cs-topBox">
          <div className="cs-topBox-desc">
            <p>도미노피자에 대한 궁금증을 바로 확인하실 수 있습니다.</p>
            <p>도미노피자 고객만족센터 080-860-3082</p>
          </div>
          <div className="cs-topBox-search">
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="cs-search-btn">
              <button type="submit" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div className="div-line"></div>
        <PageButtons2
          rootList={rootList}
          className="CsCenter"
          handleTabClick={handleTabClick}
          onPageBtnClick={onPageBtnClick}
          handleCid={handleCid}
        />

        {dbFilteredResults.length > 0 ? (
          <div className="cs-qnaBox">
            {dbFilteredResults
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <>
            {activeTab === "tab1" && (
              <div className="cs-qnaBox">
                {
                  // (isFiltered ? filteredResults : qnaList)
                  qnaList
                    .filter((item) => item.question)
                    .map((item, index) => (
                      <div key={index} className="cs-qna">
                        <div
                          className="cs-qna-toggle"
                          onClick={() => toggleIsActive(index)}
                        >
                          <button>
                            <div className="cs-qna-text">
                              <span>Q</span>
                              <span>{item.question}</span>
                              <span className="cs-qna-text-v">
                                {activeIndex === index ? "ᐱ" : "ᐯ"}
                              </span>
                            </div>
                          </button>
                        </div>
                        {item.answer && (
                          <div
                            className={`cs-qna-answerBox ${
                              activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                            }`}
                            ref={(el) => (answerRefs.current[index] = el)}
                          >
                            <div>
                              <span>A</span>
                              <div className="cs-answer-line">
                                {item.answer.split("\n").map((text) => (
                                  <div>
                                    {text}
                                    <br />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                }
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="cs-qnaBox">
                {
                  // (isFiltered ? filteredResults : qnaList)
                  qnaList
                    .filter((item) => item.question)
                    .map((item, index) => (
                      <div key={index} className="cs-qna">
                        <div
                          className="cs-qna-toggle"
                          onClick={() => toggleIsActive(index)}
                        >
                          <button>
                            <div className="cs-qna-text">
                              <span>Q</span>
                              <span>{item.question}</span>
                              <span className="cs-qna-text-v">
                                {activeIndex === index ? "ᐱ" : "ᐯ"}
                              </span>
                            </div>
                          </button>
                        </div>
                        {item.answer && (
                          <div
                            className={`cs-qna-answerBox ${
                              activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                            }`}
                            ref={(el) => (answerRefs.current[index] = el)}
                          >
                            <div>
                              <span>A</span>
                              <div className="cs-answer-line">
                                {item.answer.split("\n").map((text) => (
                                  <div>
                                    {text}
                                    <br />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                }
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="cs-qnaBox">
                {(isFiltered ? filteredResults : qnaList)
                  .filter((item) => item.question)
                  .map((item, index) => (
                    <div key={index} className="cs-qna">
                      <div
                        className="cs-qna-toggle"
                        onClick={() => toggleIsActive(index)}
                      >
                        <button>
                          <div className="cs-qna-text">
                            <span>Q</span>
                            <span>{item.question}</span>
                            <span className="cs-qna-text-v">
                              {activeIndex === index ? "ᐱ" : "ᐯ"}
                            </span>
                          </div>
                        </button>
                      </div>
                      {item.answer && (
                        <div
                          className={`cs-qna-answerBox ${
                            activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                          }`}
                          ref={(el) => (answerRefs.current[index] = el)}
                        >
                          <div>
                            <span>A</span>
                            <div className="cs-answer-line">
                              {item.answer.split("\n").map((text) => (
                                <div>
                                  {text}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="cs-qnaBox">
                {(isFiltered ? filteredResults : qnaList)
                  .filter((item) => item.question)
                  .map((item, index) => (
                    <div key={index} className="cs-qna">
                      <div
                        className="cs-qna-toggle"
                        onClick={() => toggleIsActive(index)}
                      >
                        <button>
                          <div className="cs-qna-text">
                            <span>Q</span>
                            <span>{item.question}</span>
                            <span className="cs-qna-text-v">
                              {activeIndex === index ? "ᐱ" : "ᐯ"}
                            </span>
                          </div>
                        </button>
                      </div>
                      {item.answer && (
                        <div
                          className={`cs-qna-answerBox ${
                            activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                          }`}
                          ref={(el) => (answerRefs.current[index] = el)}
                        >
                          <div>
                            <span>A</span>
                            <div className="cs-answer-line">
                              {item.answer.split("\n").map((text) => (
                                <div>
                                  {text}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {activeTab === "tab5" && (
              <div className="cs-qnaBox">
                {(isFiltered ? filteredResults : qnaList)
                  .filter((item) => item.question)
                  .map((item, index) => (
                    <div key={index} className="cs-qna">
                      <div
                        className="cs-qna-toggle"
                        onClick={() => toggleIsActive(index)}
                      >
                        <button>
                          <div className="cs-qna-text">
                            <span>Q</span>
                            <span>{item.question}</span>
                            <span className="cs-qna-text-v">
                              {activeIndex === index ? "ᐱ" : "ᐯ"}
                            </span>
                          </div>
                        </button>
                      </div>
                      {item.answer && (
                        <div
                          className={`cs-qna-answerBox ${
                            activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                          }`}
                          ref={(el) => (answerRefs.current[index] = el)}
                        >
                          <div>
                            <span>A</span>
                            <div className="cs-answer-line">
                              {item.answer.split("\n").map((text) => (
                                <div>
                                  {text}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {activeTab === "tab6" && (
              <div className="cs-qnaBox">
                {(isFiltered ? filteredResults : qnaList)
                  .filter((item) => item.question)
                  .map((item, index) => (
                    <div key={index} className="cs-qna">
                      <div
                        className="cs-qna-toggle"
                        onClick={() => toggleIsActive(index)}
                      >
                        <button>
                          <div className="cs-qna-text">
                            <span>Q</span>
                            <span>{item.question}</span>
                            <span className="cs-qna-text-v">
                              {activeIndex === index ? "ᐱ" : "ᐯ"}
                            </span>
                          </div>
                        </button>
                      </div>
                      {item.answer && (
                        <div
                          className={`cs-qna-answerBox ${
                            activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                          }`}
                          ref={(el) => (answerRefs.current[index] = el)}
                        >
                          <div>
                            <span>A</span>
                            <div className="cs-answer-line">
                              {item.answer.split("\n").map((text) => (
                                <div>
                                  {text}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {activeTab === "tab7" && (
              <div className="cs-qnaBox">
                {(isFiltered ? filteredResults : qnaList)
                  .filter((item) => item.question)
                  .map((item, index) => (
                    <div key={index} className="cs-qna">
                      <div
                        className="cs-qna-toggle"
                        onClick={() => toggleIsActive(index)}
                      >
                        <button>
                          <div className="cs-qna-text">
                            <span>Q</span>
                            <span>{item.question}</span>
                            <span className="cs-qna-text-v">
                              {activeIndex === index ? "ᐱ" : "ᐯ"}
                            </span>
                          </div>
                        </button>
                      </div>
                      {item.answer && (
                        <div
                          className={`cs-qna-answerBox ${
                            activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                          }`}
                          ref={(el) => (answerRefs.current[index] = el)}
                        >
                          <div>
                            <span>A</span>
                            <div className="cs-answer-line">
                              {item.answer.split("\n").map((text) => (
                                <div>
                                  {text}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {activeTab === "tab8" && (
              <div className="cs-qnaBox">
                {(isFiltered ? filteredResults : qnaList)
                  .filter((item) => item.question)
                  .map((item, index) => (
                    <div key={index} className="cs-qna">
                      <div
                        className="cs-qna-toggle"
                        onClick={() => toggleIsActive(index)}
                      >
                        <button>
                          <div className="cs-qna-text">
                            <span>Q</span>
                            <span>{item.question}</span>
                            <span className="cs-qna-text-v">
                              {activeIndex === index ? "ᐱ" : "ᐯ"}
                            </span>
                          </div>
                        </button>
                      </div>
                      {item.answer && (
                        <div
                          className={`cs-qna-answerBox ${
                            activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                          }`}
                          ref={(el) => (answerRefs.current[index] = el)}
                        >
                          <div>
                            <span>A</span>
                            <div className="cs-answer-line">
                              {item.answer.split("\n").map((text) => (
                                <div>
                                  {text}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </>
        )}
        {/* {activeTab === "tab1" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab4" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab5" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab6" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab7" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
        {activeTab === "tab8" && (
          <div className="cs-qnaBox">
            {(isFiltered ? filteredResults : qnaList)
              .filter((item) => item.question)
              .map((item, index) => (
                <div key={index} className="cs-qna">
                  <div
                    className="cs-qna-toggle"
                    onClick={() => toggleIsActive(index)}
                  >
                    <button>
                      <div className="cs-qna-text">
                        <span>Q</span>
                        <span>{item.question}</span>
                        <span className="cs-qna-text-v">
                          {activeIndex === index ? "ᐱ" : "ᐯ"}
                        </span>
                      </div>
                    </button>
                  </div>
                  {item.answer && (
                    <div
                      className={`cs-qna-answerBox ${
                        activeIndex === index ? "active" : "" //activeIndex에 넣은 index값과 누른 div의 index값 비교
                      }`}
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <div>
                        <span>A</span>
                        <div className="cs-answer-line">
                          {item.answer.split("\n").map((text) => (
                            <div>
                              {text}
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )} */}
      </div>
    </div>
  );
}
