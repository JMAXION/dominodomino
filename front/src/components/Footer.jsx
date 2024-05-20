import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faBloggerB,
  faFacebookF,
  faGooglePlay,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMobile, faServer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-innerBox">
          <div className="footer-info">
            <div className="footer-contact">
              <img
                className="footer-logo-img"
                src="https://blog.kakaocdn.net/dn/oEGJ0/btqF1nPvKZe/gbG6kfqcCT14RfgmxEuyVk/img.jpg"
              />
              <span>1577-3082</span>
            </div>
            <ul className="footer-nav">
              <Link to="/law">
                <li className="footer-nav-li">이용약관</li>
              </Link>
              <Link to="/law/personal">
                <li className="footer-nav-li footer-nav-li-accent">
                  개인정보 처리방침
                </li>
              </Link>
              <Link to="/law/navi">
                <li className="footer-nav-li footer-nav-li-accent">
                  위치기반 서비스
                </li>
              </Link>
              <Link to="/law/teen">
                <li className="footer-nav-li">청소년 보호방침</li>
              </Link>
              <Link to="/law/video">
                <li className="footer-nav-li">영상정보처리기기 운영관리방침</li>
              </Link>
              <Link to="/">
                <li className="footer-nav-li">고객센터</li>
              </Link>
              <Link to="/">
                <li className="footer-nav-li">인재채용</li>
              </Link>
              <Link to="/">
                <li className="footer-nav-li">가맹점모집</li>
              </Link>
              <Link to="/">
                <li className="footer-nav-li">단체주문</li>
              </Link>
            </ul>
            <div className="footer-desc">
              <div className="footer-desc-1">
                <p>
                  06223 서울특별시 강남구 역삼로25길 35(역삼동, 청오큐브타워)
                  청오디피케이㈜｜대표이사 : 오광현,김영훈
                </p>
                <p>
                  사업자 등록번호: 220-81-03371｜통신판매업신고: 강남
                  5064호｜개인정보 보호책임자 : 윤여진｜민원 책임자 : 임영길
                </p>
                <p>문의 : webmaster@dominos.co.kr</p>
                <p>Copyright ⓒ Domino’s Pizza. All rights reserved.</p>
              </div>
              <div className="footer-desc-2">
                <p>
                  청오디피케이㈜의 사전 서면동의 없이 도미노피자 사이트(PC,
                  모바일, 앱)의 일체의 정보, 콘텐츠 및 UI 등을 상업적 목적으로
                  전재, 전송, 스크래핑 등 무단 사용할 수 없습니다.
                </p>
                <p>
                  도미노피자에서 판매되는 모든 상품은 청오디피케이㈜에서
                  책임지고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div>
              <p className="content-lang">
                <select className="content-lang-select">
                  <option value="KOR">KOR</option>
                  <option value="ENG">ENG</option>
                </select>
              </p>
              <div className="content-apps">
                <span>DOWNLOAD APP</span>
                <a href="https://apps.apple.com/kr/app/%EB%8F%84%EB%AF%B8%EB%85%B8%ED%94%BC%EC%9E%90-dominos-pizza/id371008429">
                  <FontAwesomeIcon
                    icon={faApple}
                    className="content-app-apple"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=kr.co.d2.dominos&pli=1">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="content-app-play"
                  />
                </a>
              </div>
              <div className="content-snss">
                <a href="https://blog.naver.com/dominostory">
                  <FontAwesomeIcon className="content-sns" icon={faBloggerB} />
                </a>
                <a href="https://www.instagram.com/dominostory/">
                  <FontAwesomeIcon className="content-sns" icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com/dominostory/">
                  <FontAwesomeIcon className="content-sns" icon={faFacebookF} />
                </a>
                <a href="https://www.youtube.com/user/dominostory3082">
                  <FontAwesomeIcon className="content-sns" icon={faYoutube} />
                </a>
                <a href="https://twitter.com/dominostory">
                  <FontAwesomeIcon className="content-sns" icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
        -------- footer - sub(awards) ---------
      */}
      <div className="footer-sub">
        <ul className="footer-awards">
          <li className="footer-award">
            <img src="https://cdn.dominos.co.kr/domino/pc/images/list_awards.png" />
            <div>
              <p>식품안전</p>
              <p>경영시스템 인증</p>
            </div>
          </li>
          <li className="footer-award">
            <img src="https://cdn.dominos.co.kr/domino/pc/images/list_awards2.png" />
            <div>
              <p>지식경제부</p>
              <p>우수디자인 선정</p>
            </div>
          </li>
          <li className="footer-award">
            <img src="https://cdn.dominos.co.kr/domino/pc/images/list_awards3.png" />
            <div>
              <p>2022년 고객이 가장 추천하는 기업</p>
              <p>피자전문점 부문 10년 연속 1위</p>
            </div>
          </li>
          <li className="footer-award">
            <img src="https://cdn.dominos.co.kr/domino/pc/images/list_awards4.png" />
            <div>
              <p>2023년 한국산업 고객만족도</p>
              <p>피자전문점 부문 9년 연속 1위</p>
            </div>
          </li>
          <li className="footer-award">
            <img src="https://cdn.dominos.co.kr/domino/pc/images/list_awards5.png" />
            <div>
              <p>2023 프리미엄브랜드지수</p>
              <p>피자전문점 부문 8년 연속 1위 수상</p>
            </div>
          </li>
          <li className="footer-award">
            <img src="https://cdn.dominos.co.kr/domino/pc/images/list_awards6.png" />
            <div>
              <p>대학생 1000명이 선택한</p>
              <p>2019 올해의 핫 브랜드 캠퍼스 잡앤조이 선정</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
