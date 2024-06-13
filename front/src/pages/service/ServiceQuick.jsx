import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faFileInvoice,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getUser } from "../../util/localStorage";

export default function ServiceQuick({ depth2 }) {
  const [props, setprops] = useState({
    title: "도미노 서비스",
    breadcrumb: "퀵오더", //브레드크럼 경로가 3개 이상일때 사용
    breadcrumbLink: "/service/mania", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "매니아 혜택",
    nav2: "도미노 모멘트",
    nav3: "퀵오더",
    nav4: "단체주문 서비스",
    link1: "/service/mania",
    link2: "/service/moment",
    link3: "/service/quickOrder",
    link4: "/service/groupOrder",
  });

  const userInfo = getUser();

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div className="quickOrder-innerbox">
        <h1>
          나만의 도미노 메뉴를 퀵오더로 등록하고 간편하고 빠르게 주문하세요!
        </h1>
        <div className="quickOrer-imgBox">
          <div className="quickOrder-img">
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/quick/img-quick_main.png"
              alt="quickOrder"
            />
            <ul className="quickOrer-imgBox-desc">
              <li>더 빠르게! Quick Order 하세요</li>
              <li>나만의 도미노 메뉴를 퀵오더로 미리 등록 후</li>
              <li>
                <span>모바일 메인화면에서 </span>
                <span>퀵오더 버튼을 꾸욱 누르면</span>
              </li>
              <li>가장 최근의 퀵오더로 주문이 진행됩니다!</li>
            </ul>
          </div>
        </div>
        <div className="quickOrder-line">
          <span className="quickOrder-innerbox-span">
            &nbsp;&nbsp;등록방법 자세히 보기&nbsp;&nbsp;
          </span>
          <div className="quickOrder-div-line"></div>
        </div>
        <div className="quickOrder-btns">
          <a href="/" className="quickOrder-btn">
            <div className="quickOrder-btns-img">
              <FontAwesomeIcon icon={faFileInvoice} />
            </div>
            <span>장바구니에서 등록</span>
          </a>
          <a href="/" className="quickOrder-btn">
            <div className="quickOrder-btns-img">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <span>주문내역에서 등록</span>
          </a>
          <a href="/" className="quickOrder-btn">
            <div className="quickOrder-btns-img">
              <FontAwesomeIcon icon={faReceipt} />
            </div>
            <span>주문상세내역에서 등록</span>
          </a>
        </div>
        <div className="quickOrder-desc">
          각 화면의 '퀵오더 등록하기' 버튼을 통해 나만의 메뉴를 퀵오더로
          등록해주세요!
        </div>
        <div className="quickOrder-div-line"></div>
        <div className="quickOrder-info">
          <p>퀵오더 이용안내</p>
          <ul>
            <li>
              세트메뉴, 특가메뉴 등의 할인제품과 주류제품은 퀵오더 등록이
              불가합니다.
            </li>
            <li>할인은 주문하는 시점의 추천할인이 적용됩니다.</li>
            <li>퀵오더는 최대 5개까지 등록 가능합니다.</li>
          </ul>
        </div>
        <div className="quickOrder-div-line"></div>
        {userInfo ? (
          <a href="/pizzas">
            <button className="quickOrder-lastBtn">
              <span>퀵오더 등록하기</span>
            </button>
          </a>
        ) : (
          <a href="/login">
            <button className="quickOrder-lastBtn">
              <span>퀵오더 등록하기</span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
