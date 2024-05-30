import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import TabDetail from "../TabDetail";
import { useParams } from "react-router-dom";
import PageButtons2 from "../../components/PageButtons2";

export default function Company({ depth2 }) {
  const [props, setprops] = useState({
    title: "회사소개",
    breadcrumb: "한국도미노피자",
    breadcrumbLink: "/company/overView", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "한국도미노피자",
    nav2: "가맹점모집",
    nav3: "인재채용",
    link1: "/company/overView",
    link2: "/company/franchisee/info",
    link3: "/company/recruit/fullTime",
  });

  const [activeTab, setActiveTab] = useState("tab1");

  const { id } = useParams();

  /* TabButton에 넘길 배열 */
  const rootList = [
    { root: "overView", name: "Overview", tabNum: "tab1" },
    { root: "ceo", name: "CEO", tabNum: "tab2" },
    { root: "international", name: "International", tabNum: "tab3" },
    { root: "location", name: "Location", tabNum: "tab4" },
  ];

  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  const overViewList = [
    {
      title: "BEST SAFETY",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_vision4.png",
      subTitle: "안전하게!",
      desc: "도미노피자는 전 직원과 고객의 건강과 안전을 최우선으로 하며\n이를 위해 안전한 식자재 위생관리, 안전 운전 교육 등\n오토바이 배달 사고 예방을 위해 노력하고 있습니다.\n또한 사업장 위험요인 개선에 예산과 인력을 우선 배정,\n위험에 선제적으로 대처하여 전 임직원과 고객에게 신뢰받는\n도미노피자가 되기 위해 항상 최선을 다하고 있습니다.",
    },
  ];

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <PageButtons2
        rootList={rootList}
        basePath="/company"
        className="Company"
        handleTabClick={handleTabClick}
      />

      {activeTab === "tab1" && (
        <div>
          <img src="https://cdn.dominos.co.kr/renewal2018/w/img/visual_overview.jpg" />
          <p>
            배달피자의 개념이 전무했던 1990년, 한국도미노피자는 국내 최초 피자
            배달 전문 브랜드로서 1호점인 오금점을 시작으로 국내 피자
            소비자들에게 첫 선을 보인 이후, 2024년 현재 전국 480개 매장에서
            고객이 원하는 가장 맛있고 영양 높은 피자를 가장 친절하게 고객들에게
            제공하는 세계 배달 피자 리더 도미노피자로 자리매김하게 되었습니다.
          </p>
          <p>
            그리고 그 피자가 위생적이고 안전하게 고객에게 전달될 수 있도록 전
            과정에서 엄격한 시스템을 도입, 이러한 노력의 일환으로 업계 최초로
            ISO 22000을 획득하면서 맛과 영양, 그리고 안전과 위생 측면에서
            국제적인 표준을 인정받았습니다. 누구보다 피자를 잘 아는 피자분야의
            최고 전문가이자 피자 마스터인 한국 도미노피자는 앞으로도 지속적으로
            최고의 피자를 최상의 서비스로 제공하기 위한 노력을 아끼지 않을
            것입니다.
          </p>
          <p>
            한국도미노피자는 저온 숙성 도우와 최고급 프리미엄 치즈 등 가장
            신선한 최고급 식자재를 사용하여 고객들이 미처 생각하지 못했던
            혁신적인 피자를 만들어왔습니다.
          </p>
          <h1>VISION</h1>
          <p>Be the #1 Pizza Company in the world and in every neighborhood</p>
          <div className="red-line"></div>
          <div>
            <div>
              <p>
                ‘한 번 한다면 꼭 이루어낸다’라는 사명감과 책임감을 가진 BEST
                PEOPLE이 만드는 고객에게 사랑 받는 세계 배달 피자 리더
                도미노피자
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div>
          <h1>고객 여러분 안녕하십니까?</h1>
          <h1>한국도미노피자 회장 오광현입니다.</h1>
        </div>
      )}
      {activeTab === "tab3" && (
        <div>
          <h1>DOMINO’S PIZZA INTERNATIONAL</h1>
        </div>
      )}
      {activeTab === "tab4" && (
        <div>
          <p>DOMINO'S PIZZA COMPANY LOCATION</p>
          <img src="https://cdn.dominos.co.kr/renewal2018/w/img/img_location_p.jpg" />
          <ul>
            <label>주소</label>
            <li>서울특별시 강남구 역삼로25길 35(역삼동, 청오큐브타워)</li>
            <label>전화번호</label>
            <li>Tel: 02-6954-3082</li>
            <li>Fax: 02-6954-3077</li>
            <li>고객상담: 080-860-3082</li>
            <label>오시는 길</label>
            <li>
              지하철 2호선 역삼역 1번 출구로 나와서 도보 약 350M(5분 소요)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
