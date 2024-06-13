import React, { useEffect, useRef, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import PageTitle from "../components/PageTitle";
import PageButtons from "../components/PageButtons";
import "../css/service.css";
import "../css/csCenter.css";
import { getUser } from "../util/localStorage";

export default function TabDetail({
  buttonList,
  tabList,
  basePath,
  className,
  showQnA,
}) {
  const [activeIndex, setActiveIndex] = useState(-1); // 배열의 인덱스에서 -1 === 존재하지않음을 의미

  const answerRefs = useRef([]);
  const userInfo = getUser();

  const QnA = [
    { question: tabList.q1, answer: tabList.a1 },
    { question: tabList.q2, answer: tabList.a2 },
    { question: tabList.q3, answer: tabList.a3 },
    { question: tabList.q4, answer: tabList.a4 },
    { question: tabList.q5, answer: tabList.a5 },
  ];

  /*
   *  CsCenter
   */
  // 아코디언 열고 닫기
  const toggleIsActive = (index) => {
    console.log("index -->", index);
    setActiveIndex((prevIndex) => (index !== prevIndex ? index : -1)); //activeIndex의 이전의 값과 같지 않으면 누른 div의 index값 넣음
  };

  // 답변 크기 자동으로 받아오기
  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);

  // 탭 누를때마다 아코디언 전체 초기화
  const onPageBtnClick = (index) => {
    //index값과 상관없이 activeIndex 초기화(-1)
    setActiveIndex(-1);
  };

  return (
    <div className="content">
      <div className="tab-detail-outer">
        <PageButtons
          buttonList={buttonList}
          basePath={basePath}
          className={className}
          onPageBtnClick={onPageBtnClick}
        />
        {tabList.image && (
          <div className="tab-detail">
            <div className="tab-detail-1">
              <span>{tabList.title}</span>
              <h1>{tabList.sub_title}</h1>
              <div className="tab-detail-desc">
                <p>{tabList.desc1}</p>
                <p>{tabList.desc1_1}</p>
              </div>
              {tabList.root === "mania" ? (
                <img src={tabList.image} style={{ width: "1000px" }} />
              ) : (
                <img src={tabList.image} />
              )}
              {tabList.image2 && <img src={tabList.image2} />}
              {tabList.image3 && <img src={tabList.image3} />}
              <div className="tab-detail-desc2">
                <p>{tabList.desc2}</p>
                <p>{tabList.desc2_1}</p>
              </div>
            </div>
            <div className="tab-detail-2">
              <span>{tabList.title2}</span>
              <h1>{tabList.sub_title2}</h1>
              {tabList.special1 && (
                <div className="service-inner-bluebox">
                  <h2>{tabList.special1}</h2>
                  <div className="bluebox-p">
                    <p>{tabList.special1_desc}</p>
                    <p>{tabList.special1_1_desc}</p>
                  </div>
                  <h2>{tabList.special2}</h2>
                  <div className="bluebox-p">
                    <p>{tabList.special2_desc}</p>
                    <p>{tabList.special2_1_desc}</p>
                    <p>{tabList.special2_2_desc}</p>
                    <p>{tabList.special2_3_desc}</p>
                  </div>
                  <h2>{tabList.special3}</h2>
                  <p className="bluebox-p">{tabList.special3_desc}</p>
                </div>
              )}
            </div>
            {tabList.grade_btn &&
              (userInfo ? (
                <a
                  href="http://localhost:3000/mypage/coupon"
                  className="grade-btn"
                >
                  {tabList.grade_btn}
                </a>
              ) : (
                <a href="http://localhost:3000/login" className="grade-btn">
                  {tabList.grade_btn}
                </a>
              ))}
            {tabList.desc3 && (
              <div className="tab-detail-3">
                <p>{tabList.desc3}</p>
                <p>{tabList.desc3_1}</p>
              </div>
            )}
          </div>
        )}

        {showQnA && (
          <div className="cs-qnaBox">
            {QnA.filter((item) => item.question).map((item, index) => (
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
      </div>
    </div>
  );
}
