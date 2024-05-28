import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import PageTitle from "../components/PageTitle";
import PageButtons from "../components/PageButtons";
import "../css/service.css";

export default function TabDetail({
  buttonList,
  tabList,
  basePath,
  className,
  showQnA,
}) {
  console.log("tabList -> ", tabList);

  const [isChecked, setIsChecked] = useState([false, false, false]);

  const toggleIsChecked = (index) => {
    setIsChecked((prevState) => {
      const newState = [...prevState]; // [false, false, false]
      newState[index] = !newState[index]; //해당 index번지만 반대값으로 바꾸기
      return newState;
    });
  };

  const QnA = [
    { question: tabList.q1, answer: tabList.a1 },
    { question: tabList.q2, answer: tabList.a1 },
    { question: tabList.q3, answer: tabList.a1 },
  ];

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      {/* <PageTitle props={props} depth1={depth1} depth2={depth2} /> */}
      {/* ----- 본문 ----- */}
      <div className="tab-detail-outer">
        <PageButtons
          buttonList={buttonList}
          basePath={basePath}
          className={className}
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
            {tabList.grade_btn && (
              <a href="http://localhost:3000/login" className="grade-btn">
                {tabList.grade_btn}
              </a>
            )}
            {tabList.desc3 && (
              <div className="tab-detail-3">
                <p>{tabList.desc3}</p>
                <p>{tabList.desc3_1}</p>
              </div>
            )}
          </div>
        )}

        {showQnA &&
          QnA.map((item, index) => (
            <div key={index}>
              <button onClick={() => toggleIsChecked(index)}>
                <span>Q</span>
                {item.question}
                <span>{isChecked[index] ? "ᐱ" : "ᐯ"}</span>
              </button>
              {isChecked[index] && <div>{item.answer}</div>}
            </div>
          ))}
      </div>
    </div>
  );
}
