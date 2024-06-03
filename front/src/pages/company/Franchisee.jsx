import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import PageButtons2 from "../../components/PageButtons2";
import "../../css/companyIntroduce/franchisee.css";

export default function Franchisee({ depth2 }) {
  const [activeTab, setActiveTab] = useState("tab1");
  const [props, setprops] = useState({
    title: "회사소개",
    breadcrumb: "가맹점모집",
    breadcrumbLink: "/company/overView", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "한국도미노피자",
    nav2: "가맹점모집",
    nav3: "인재채용",
    link1: "/company/overView",
    link2: "/company/franchisee/info",
    link3: "/company/recruit/fullTime",
  });
  const rootList = [
    { root: "info", name: "가맹점 개설안내", tabNum: "tab1" },
    { root: "process", name: "개설 절차", tabNum: "tab2" },
    { root: "price", name: "투자 비용", tabNum: "tab3" },
    { root: "region", name: "모집 지역", tabNum: "tab4" },
    { root: "inquiry", name: "개설 문의", tabNum: "tab5" },
  ];
  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <div className="content franchisee">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <PageButtons2
        rootList={rootList}
        className="Franchisee"
        handleTabClick={handleTabClick}
      />
      {activeTab === "tab1" && (
        <div className="company info">
          <img
            src="https://cdn.dominos.co.kr/renewal2018/w/img/visual_franchisee.png"
            alt="WhyDomino's"
          />
          <h3>매장 개발 전문가가 함께하는 도미노 매장 개발 전략 Point</h3>
          <ul>
            <li>
              <div className="info-point point1"></div>
              <label>Point 1</label>
              <p>
                점포면적이나 시설을 Dine-in 매장
                <br />
                투자비용의 ½만으로 개발해 드립니다.
              </p>
            </li>
            <li>
              <div className="info-point point2"></div>
              <label>Point 2</label>
              <p>
                다각적인 인터뷰 및 교육을 통해 점주 및<br />
                개개인에게 맞춤형 경영지도를 해드립니다.
              </p>
            </li>
            <li>
              <div className="info-point point3"></div>
              <label>Point 3</label>
              <p>
                체계적인 교육훈련을 통해 점주님들을
                <br />
                능숙한 Domino’s Pizza Manager로
                <br />
                변신시켜 드립니다.
              </p>
            </li>
          </ul>
          <h3>가맹점 개설 조건</h3>
          <div className="info-condition-box">
            <ul>
              <li>
                <div className="info-condition condition1"></div>
                <p>
                  1층 점포 기준 실평수 25평 이상
                  <br />
                  (층고 높이 2.7m 이상)
                </p>
              </li>
              <li>
                <div className="info-condition condition2"></div>
                <p>편도 2차선 왕복도로 이상</p>
              </li>
              <li>
                <div className="info-condition condition3"></div>
                <p>점포전면 길이 6m이상</p>
              </li>
              <li>
                <div className="info-condition condition4"></div>
                <p>
                  오토바이(5대기준)
                  <br /> 주차 확보 공간 여부
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div className="process">
          <h3>도미노 피자의 주인이 되어보세요!</h3>
          <ul>
            <li>
              <div className="process-li">
                <span>Step.1 가맹 상담</span>
                <p>
                  Domino’s Pizza 체인점 경영과 가맹에 대한 정보를
                  <br />
                  친절하게 알려드립니다.
                </p>
              </div>
              <div className="process-list list-1"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.2 상권조사</span>
                <p>
                  점포 후보지의 특성과 입지조건을 면밀히 분석한 후
                  <br />
                  투자 규모와 수익성을 검토합니다.
                </p>
              </div>
              <div className="process-list list-2"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.3 신청서접수</span>
                <p>
                  가맹점 희망자는 개점 의사를 확인한 후 본사에
                  <br />
                  가맹신청서를 접수하게 됩니다.
                </p>
              </div>
              <div className="process-list list-3"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.4 가맹계약체결</span>
                <p>
                  가맹계약을 체결함으로써 도미노피자와의
                  <br />
                  본격적인 파트너가 됩니다.
                </p>
              </div>
              <div className="process-list list-4"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.5 개점전 준비사항</span>
                <p>
                  가맹점주의 점포확보, 실내 외 공사 계약, 종업원확보, 점주와
                  <br />
                  종업원에 대한 교육을 준비해 드립니다.
                </p>
              </div>
              <div className="process-list list-5"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.6 점포공사실기</span>
                <p>
                  점주는 회사의 시방서에 따라 점포 내외부 공사, 전기 및
                  설비공사를
                  <br />
                  실시한 후 표준 점포 장비를 설치하고 집기 비품을 구입합니다.
                </p>
              </div>
              <div className="process-list list-6"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.7 개점준비</span>
                <p>
                  Sub Franchisee 영업에 필요한 각종 인허가를 취득하고 회사는
                  <br />
                  자재를 점포에 반입하여 Open을 준비합니다.
                </p>
              </div>
              <div className="process-list list-7"></div>
            </li>
            <li>
              <div className="process-li">
                <span>Step.8 점포개설</span>
                <p>
                  마케팅 홍보와 관련하여 본사의 지원 아래
                  <br />
                  점포를 개점합니다.
                </p>
              </div>
              <div className="process-list list-8"></div>
            </li>
          </ul>
        </div>
      )}
      {activeTab === "tab3" && (
        <div className="company price">
          <table border="1px">
            <tr>
              <td className="price-th th1">구분</td>
              <td className="price-th th2">비용 (원)</td>
              <td className="price-th th3">비고</td>
            </tr>
            <tr>
              <td>가맹비</td>
              <td>30,000,000</td>
              <td>반환 불가</td>
            </tr>
            <tr>
              <td>식자재 보증금</td>
              <td>5,000,000</td>
              <td>반환 가능</td>
            </tr>
            <tr>
              <td>설계 감리비</td>
              <td>2,000,000</td>
              <td>반환 불가</td>
            </tr>
            <tr>
              <td>교육비</td>
              <td>
                하절기 : 약 2,500,000
                <br />
                동절기 : 약 2,600,000
              </td>
              <td>2인기준</td>
            </tr>
            <tr>
              <td>인테리어 시설</td>
              <td>
                01. 오븐(2대 기준) <br />
                02. 주방기구
                <br />
                03. 인테리어
                <br />
                04. 오토바이(5대 기준) & 피자Box
                <br />
                05. 오토바이보험 및 화재보험 가입비
                <br />
                06. 전화가설(3회선기준)
                <br />
                07. 냉난방기(3대 기준)
                <br />
                08. 컴퓨터(3대 기준) - One Number System
                <br />
                09. 프린터 시스템
              </td>
            </tr>
            <tr>
              <td>총 개설 비용</td>
              <td>
                총개설비용 약 220,000,000 ~ 230,000,000 소요
                <br />※ 총 개설비용은 점포임차보증금 제외비용
              </td>
              <td>VAT별도</td>
            </tr>
          </table>
        </div>
      )}
      {activeTab === "tab4" && <div>모집지역</div>}
      {activeTab === "tab5" && <div>개설문의</div>}
    </div>
  );
}
