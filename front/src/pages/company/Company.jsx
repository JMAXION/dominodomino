import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import PageButtons2 from "../../components/PageButtons2";
import "../../css/companyIntroduce/company.css";

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
  const [yearSelect, setYearSelect] = useState("2024");

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

  /* 연혁 select */
  const handleSelect = (e) => {
    setYearSelect(e.target.value);
  };

  const overViewList = [
    {
      title: "BEST SAFETY",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_vision4.png",
      subTitle: "안전하게!",
      desc: "도미노피자는 전 직원과 고객의 건강과 안전을 최우선으로 하며\n이를 위해 안전한 식자재 위생관리, 안전 운전 교육 등\n오토바이 배달 사고 예방을 위해 노력하고 있습니다.\n또한 사업장 위험요인 개선에 예산과 인력을 우선 배정,\n위험에 선제적으로 대처하여 전 임직원과 고객에게 신뢰받는\n도미노피자가 되기 위해 항상 최선을 다하고 있습니다.",
    },
    {
      title: "BEST PRODUCT",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_vision.png",
      subTitle: "맛있게!",
      desc: "쫄깃하고 고소한 저온숙성도우, 손으로 직접 만드는 HAND\nTOSSED 방식, 재료 본연의 맛을 살린 스크린 방식,\n신선한 토핑, 풍부하고 깊은 맛의 고급프리미엄 치즈.\n도미노피자만의 특별한 노하우! 도우와 토핑의 차이가\n맛의 차이를 만듭니다.",
    },
    {
      title: "BEST SERVICE",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_vision2.png",
      subTitle: "친절하게!",
      desc: "도미노피자는 밝고 환한 표정으로 고객을 맞이하고\n적극적으로 소통합니다. 고객이 최우선으로 환대받고\n있음을 느끼게 하기 위해 최선을 다해 노력하고 있습니다.",
    },
    {
      title: "BEST IMAGE",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_vision3.png",
      subTitle: "깨끗하게!",
      desc: "365일 늘 변함없이 고객에게 최상의 제품과 서비스를\n제공하기 위하여 노력하고 있습니다.\n엄격한 OER평가를 통해 피자 메이킹에서부터 위생적인\n매장, 시설 이미지까지 완벽한 Operation관리\n실시하고 있습니다.",
    },
  ];

  const yearSelectList = {
    2024: [
      { date: "2024.05", content: "손흥민 모델 발탁" },
      {
        date: "2024.04",
        content: "월드비전의 ‘교실에서 찾은 희망’ 캠페인 후원 2회차",
      },
      { date: "2024.03", content: "해피 데일리 피자 하프앤하프 4종 출시" },
      { date: "2024.02", content: "고구마쥬 엣지 출시" },
    ],
    2022: [
      {
        date: "2023.12",
        content: "삼성서울병원, 강남세브란스 병원 각 5천만원 기부",
      },
      { date: "2023.11", content: "브리스킷 바비Q 피자 출시" },
      { date: "2023.09", content: "KCSI 9년 연속 1위" },
      { date: "2023.08", content: "더블 치즈 페퍼로니 엣지 출시" },
    ],
    2020: [
      { date: "2021.12", content: "'마스터 트리플 코스 피자' 출시" },
      { date: "2021.10", content: "KCSI 7년 연속 1위 선정" },
      { date: "2021.09", content: "'치즈 퐁듀 파이어 미트 피자' 출시" },
      { date: "2021.06", content: "'블록버스터 4 피자' 출시" },
      {
        date: "2021.03",
        content:
          "'뉴욕 오리진 피자', '캐롤라이나 핫치킨 피자', '하와이안 슈림프 피자' 출시",
      },
    ],
  };

  const internationalList = [
    {
      title: "도미노피자 탄생과 성장",
      content:
        "도미노피자는 1960년 미국 미시건주에서 ‘도미닉스 피자(Domi-Nick’s Pizza) 라는/n이름으로 톰 모나한 (Tomas S. Monoghan)과 그의 남동생에 의해서 탄생! 이후\n도미닉스 피자는 1965년 현재의 도미노피자 (Domino’s Pizza)로 이름을\n바꾸었습니다.",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_international.png",
    },
    {
      title: "비틀 한 대로 시작하여 세계 18,000개 매장 오픈까지",
      content:
        "1960년 당시 도미노피자의 유일한 배달 수단은 작은 폭스바겐 비틀(Volkswagen Beetle)\n한 대! 비틀 한대로 시작한 도미노피자는 1983년 캐나다 위니팩에 해외 1호점을 오픈하면서\n해외진출을 시작했고, 2021년 미국 콜로라도에 18,000번째 매장을 오픈하며\n전세계인들의 사랑을 받고 있습니다.\n",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_international2.png",
    },
    {
      title: "LOGO 이야기",
      content:
        "1965년 상호를 ‘Domi-Nick’’s’ 에서 ‘Domino’s’로 변경하면서, 당시 소유하고\n있던 3개의 매장을 상징하는 세 개의 점을 사각 로고에 넣게 되었습니다.\n도미노피자만의 서체와 레드와 블루로 구성된 밝고 선명한 컬러, 정확한 45도의\n앵글로 이루어진 로고는 도미노피자만의 목표를 상징하며, 따뜻하고 현대적이며,\n강한 이미지와 잘 조화를 이루고 있습니다.",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_international3.png",
    },
    {
      title: "Heatwave System",
      content:
        "1998년 갓 구워낸 피자의 맛을 유지하기 위해 피자배달 가방 내부에 전기 충전식\n열선시스템을 부착한 ‘Heatwave System’을 개발하게 됨으로써, 피자의 맛을\n결정하는 가장 이상적인 온도인 65~70°C를 45분 이상 유지시켜줄 수 있게 되었습니다.",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_international4.png",
    },
    {
      title: "‘World’s FPM(Fastest Pizza Maker)’ Competition",
      content:
        "1982년 ‘Two Tray Time’ 이라는 명칭으로 처음 시작된 이 대회는 3가지 피자(페퍼로니,\n머쉬룸, 치즈)를 맛있고 Perfect 하면서도 가장 빨리 만드는 최고의 피자 메이커를 가리는\n경기로, 도미노피자가 피자를 맛있고 빨리 만들면서도 안전하고 신속하게 배달해 줄 수\n있다는 것을 알리기 위해서 시작되었습니다. 이후 ‘World’s Fastest Pizza Maker’로\n확장 개최, 2년마다 전 세계에서 선발된 도미노피자의 피자 메이커들이 최고의 피자 메이커에\n도전하고 있습니다.",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_international5.png",
    },
  ];

  const internationalHistory = [
    {
      year: "1960",
      content:
        "미국 미시건주 입실런티에 ‘Domi-Nick’s Pizza’로 첫번째 매장 오픈",
    },
    { year: "1965", content: "Domino’s Pizza로 공식명칭 변경" },
    { year: "1967", content: "가맹 1호점 오픈" },
    { year: "1975", content: "도미노피자 100호점 오픈" },
    {
      year: "1983",
      content: "도미노피자 1,000호점 오픈, 캐나다 위니팩에 첫 해외매장 오픈",
    },
    { year: "1985", content: "호주, 유럽(영국), 아시아(일본) 매장 오픈" },
    { year: "1988", content: "남미(콜롬비아) 매장 오픈" },
    { year: "1989", content: "5,000호점 오픈" },
    {
      year: "1990",
      content:
        "한국 진출 / 고객만족보증제도(Cumtomer Satisfaction Guarantee) 도입",
    },
    { year: "1995", content: "아프리카(이집트) 매장 오픈" },
    { year: "1998", content: "‘Bain Capital’ 도미노피자 인수" },
    { year: "2004", content: "뉴욕증권거래소 내 도미노피자 주식 상장" },
    {
      year: "2005",
      content: "호주 및 영국 내 각 400번째 매장 오픈 / 8,000호점 오픈",
    },
    { year: "2006", content: "파나마 / 8,000호점 오픈" },
    { year: "2008", content: "배달업계 최초 Domino‘s Tracker 출시" },
    { year: "2010", content: "도미노피자 설립 50주년 / 9,000호점 오픈" },
    { year: "2015", content: "미국 오클라호마 시티 / 12,000호점 오픈" },
    { year: "2016", content: "미국 오번 / 13,000호점 오픈" },
    { year: "2017", content: "말레이시아 / 14,000호점 오픈" },
    { year: "2018", content: "미국 텍사스 / 15,000호점 오픈" },
    { year: "2019", content: "미국 뉴욕 / 16,000호점 오픈" },
    { year: "2020", content: "호주 / 17,000호점 오픈" },
    { year: "2021", content: "미국 콜로라도 / 18,000호점 오픈" },
  ];

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <PageButtons2
        rootList={rootList}
        className="Company"
        handleTabClick={handleTabClick}
      />

      {activeTab === "tab1" && (
        <div className="company overview">
          <img
            src="https://cdn.dominos.co.kr/renewal2018/w/img/visual_overview.jpg"
            alt="DominoPizza"
            className="overview-img"
          />
          <div className="overview-desc">
            <p>
              배달피자의 개념이 전무했던 1990년, 한국도미노피자는 국내 최초 피자
              <br />
              배달 전문 브랜드로서 1호점인 오금점을 시작으로 국내 피자
              소비자들에게
              <br /> 첫 선을 보인 이후, 2024년 현재 전국 480개 매장에서 고객이
              원하는 가장 맛있고 영양 높은
              <br /> 피자를 가장 친절하게 고객들에게 제공하는 세계 배달 피자
              리더 도미노피자로 자리매김하게
              <br />
              되었습니다.
            </p>
            <p>
              그리고 그 피자가 위생적이고 안전하게 고객에게 전달될 수 있도록 전
              과정에서
              <br /> 엄격한 시스템을 도입, 이러한 노력의 일환으로 업계 최초로
              ISO
              <br /> 22000을 획득하면서 맛과 영양, 그리고 안전과 위생 측면에서
              국제적인
              <br /> 표준을 인정받았습니다. 누구보다 피자를 잘 아는 피자분야의
              최고
              <br /> 전문가이자 피자 마스터인 한국 도미노피자는 앞으로도
              지속적으로 최고의
              <br /> 피자를 최상의 서비스로 제공하기 위한 노력을 아끼지 않을
              것입니다.
            </p>
            <p>
              한국도미노피자는 저온 숙성 도우와 최고급 프리미엄 치즈 등 가장
              신선한
              <br /> 최고급 식자재를 사용하여 고객들이 미처 생각하지 못했던
              혁신적인
              <br /> 피자를 만들어왔습니다.
            </p>
          </div>
          <div className="overview-titleBox">
            <h1>VISION</h1>
            <p>
              Be the #1 Pizza Company in the world and in every neighborhood
            </p>
            <div className="overview-redLine"></div>
          </div>
          <div className="overview-blueBox">
            <p className="overview-blueBox-title">
              ‘한 번 한다면 꼭 이루어낸다’라는 사명감과
              <br /> 책임감을 가진 BEST PEOPLE이 만드는
              <br /> 고객에게 사랑 받는 세계 배달 피자 리더 도미노피자
            </p>
            <div className="overview-blueBox-best">
              {overViewList.map((item) => (
                <div className="overview-blueBox-lists">
                  <p>{item.title}</p>
                  <div className="overview-blueBox-list">
                    <img src={item.img} alt="DominoPizza_bluebox" />
                    <div>
                      <p>{item.subTitle}</p>
                      <p>
                        {item.desc.split("\n").map((text) => (
                          <div>
                            {text}
                            <br />
                          </div>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overview-yearList">
            <div>
              {/* <img
                src="https://cdn.dominos.co.kr/renewal2018/w/img/bg/bg_dot_repeat.png"
                alt="dot-img"
              /> */}
              {yearSelectList[yearSelect] &&
                yearSelectList[yearSelect].map((obj) => (
                  <ul>
                    <li>
                      <span>{obj.date}</span>
                      <span>{obj.content}</span>
                    </li>
                  </ul>
                ))}
            </div>
            <select onChange={(value) => handleSelect(value)}>
              <option value="2024">2024 ~ 2025</option>
              <option value="2022">2022 ~ 2023</option>
              <option value="2020">2020 ~ 2021</option>
            </select>
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div className="company ceo">
          <h1>고객 여러분 안녕하십니까?</h1>
          <h1>한국도미노피자 회장 오광현입니다.</h1>
          <div className="ceo-redLine"></div>
          <div className="ceo-desc">
            <p>
              세계 배달 피자 리더 한국도미노피자는 배달 피자 개념이 전무했던
              1990년 1호점 오금점을 시작으로 한국 시장에 진출한 이후 지난 34년간
              피자 대중화를 선도하였습니다.
            </p>
            <p>
              도미노피자는 완벽한 제품을 완벽한 서비스로 고객들에게 제공해 항상
              즐거움을 줄 수 있도록 하자는 의지를 담은 새로운 브랜드 슬로건
              ‘Have More Fun. Life Food, Domino’s’’와 고객들에게 가장 맛있고
              영양가 높은 피자를 제공”한다는 원칙 아래, 최고급 식자재와 새로운
              맛을 선보이며 프리미엄 피자 시장을 개척하였습니다. 업계 최초
              국내산 오이로 만든 우리 피클 도입 및 기존 슈퍼시드 함유 도우를
              업그레이드한 슈퍼시드 화이버 함유 도우를 출시해 더욱 건강한 피자를
              만들기 위해 최선을 다하고 있습니다. 또한 이종간의 협업과 새로운
              서비스를 도입해 고객들의 다양한 니즈를 충족시킬 뿐 아니라, 항상
              새롭고 즐거운 모습으로 다가가기 위해 노력하고 있습니다.
            </p>
            <p>
              도미노피자는 “고객들이 편하고 쉽게 주문할 수 있도록 최상의
              서비스를 제공한다”는 목표 아래 주문, 배달을 혁신하였습니다. 2010년
              업계 최초 주문형 애플리케이션 출시, 2015년 업계 최초 고객 맞춤형
              DIY 주문 서비스 마이키친(My Kitchen), 2018년에는 배달업계 최초 GPS
              트래커 등을 선보였습니다. 또한 전국 1,300여개 지역에서 피자 시식이
              가능한 “도미노스팟” 과 2019년 피자 업계 최초로 차량을 이용해 매장
              방문 포장 시 직원이 고객의 차량까지 직접 피자를 전달하는 “도미노
              드라이빙 픽업 서비스”를 실시하며 고객들의 편의를 증대를 위해
              노력하고 있습니다. 이 외에도 지난 2020년 자율주행 배달 로봇을
              활용한 도미런과 2021년 국내 최초 드론배달 서비스를 세종시에서
              진행하였으며, 2023년에는 대구 수성구 수성못에서 드론 및 로봇
              배달을 진행하기도 했습니다.
            </p>
            <p>
              또한, 도미노피자는 ESG 경영에도 앞장서고 있습니다. 지난 2006년부터
              지금까지 서울대 어린이 병원, 삼성서울병원, 강남 세브란스 병원 환아
              치료비를 지원할 뿐 아니라 지난 2023년 집중 호우로 피해를 입은
              이재민을 돕기 위한 성금을 기부하기도 했습니다 . 또한 월드비전 학교
              폭력 예방 캠페인에 참여하고 세계 스카우트 잼버리 대회 참여자에게
              피자를 기부하는 등 다양한 곳에 피자를 후원했으며, 참여형 사회공헌
              활동의 일환인 ‘다 함께 피자교실’, 필요한 곳이면 어디든 달려가
              피자를 지원하는 ‘도미노 희망 파티카’ 등을 통해 ESG 경영 실천에
              힘쓰고 있습니다.
            </p>
            <p>
              이러한 노력을 인정받아, 도미노피자는 2023년 &lt;한국 산업의 고객
              만족도(KCSI)피자부문 1위 9년 연속 수상&gt;, &lt;Korean Standard
              프리미엄 브랜드 지수 8년 연속 1위 &gt; 라는 쾌거를 거두었습니다.
            </p>
            <p>
              한국도미노피자는 앞으로도 세계 배달피자 리더로써 건강한 외식문화를
              리드하기 위해 최상의 식재료, 제품, 주문 및 배달 서비스를 제공하며,
              언제나 고객들이 믿고 먹을 수 있는 웰빙 먹거리 문화를 만들 수
              있도록 최선을 다할 것입니다.
            </p>
            <p>고객 여러분의 많은 사랑과 관심 부탁 드립니다.</p>
            <p>한국도미노피자 회장 오광현</p>
          </div>
          <img
            src="https://cdn.dominos.co.kr/renewal2018/w/img/img_ceo_sign.jpg"
            alt="DominoPizza_signiture"
          />
        </div>
      )}
      {activeTab === "tab3" && (
        <div className="company interna">
          <div className="interna-title-box">
            <h1>DOMINO’S PIZZA INTERNATIONAL</h1>
            <p>
              도미노피자는 1960년 1호점 창업 이래 오늘날 피자배달 사업의
              선구자로서 전 세계 90개국
            </p>
            <p>
              18,000여 개 매장에서 매일 300만개 이상의 피자를 판매하고 있는 세계
              최대 피자배달 전문 브랜드입니다.
            </p>
            <p>
              세계 각 국의 고객들이 맛있고 따뜻한 도미노피자를 즐기고 있습니다.
            </p>
            <a href="https://www.dominos.com/index.intl.html">
              INTERNATIONAL WEBSITE 바로가기
            </a>
            <div className="interna-redLine"></div>
          </div>
          <div className="interna-list-box">
            <ul>
              <li className="interna-list-1">
                <h1>도미노피자 탄생과 성장</h1>
                <p>
                  도미노피자는 1960년 미국 미시건주에서 ‘도미닉스
                  피자(Domi-Nick’s Pizza) 라는
                  <br /> 이름으로 톰 모나한 (Tomas S. Monoghan)과 그의 남동생에
                  의해서 탄생! 이후
                  <br /> 도미닉스 피자는 1965년 현재의 도미노피자 (Domino’s
                  Pizza)로 이름을
                  <br /> 바꾸었습니다.
                </p>
              </li>
              <li className="interna-list-2">
                <h1>비틀 한 대로 시작하여 세계 18,000개 매장 오픈까지</h1>
                <p>
                  1960년 당시 도미노피자의 유일한 배달 수단은 작은 폭스바겐
                  비틀(Volkswagen Beetle)
                  <br /> 한 대! 비틀 한대로 시작한 도미노피자는 1983년 캐나다
                  위니팩에 해외 1호점을 오픈하면서
                  <br /> 해외진출을 시작했고, 2021년 미국 콜로라도에 18,000번째
                  매장을 오픈하며
                  <br />
                  전세계인들의 사랑을 받고 있습니다.
                </p>
              </li>
              <li className="interna-list-3">
                <h1>LOGO 이야기</h1>
                <p>
                  1965년 상호를 ‘Domi-Nick’’s’ 에서 ‘Domino’s’로 변경하면서,
                  당시 소유하고
                  <br /> 있던 3개의 매장을 상징하는 세 개의 점을 사각 로고에
                  넣게 되었습니다.
                  <br /> 도미노피자만의 서체와 레드와 블루로 구성된 밝고 선명한
                  컬러, 정확한 45도의
                  <br /> 앵글로 이루어진 로고는 도미노피자만의 목표를 상징하며,
                  따뜻하고 현대적이며,
                  <br /> 강한 이미지와 잘 조화를 이루고 있습니다.
                </p>
              </li>
              <li className="interna-list-4">
                <h1>Heatwave System</h1>
                <p>
                  1998년 갓 구워낸 피자의 맛을 유지하기 위해 피자배달 가방
                  내부에 전기 충전식
                  <br /> 열선시스템을 부착한 ‘Heatwave System’을 개발하게
                  됨으로써, 피자의 맛을
                  <br /> 결정하는 가장 이상적인 온도인 65~70°C를 45분 이상
                  유지시켜줄 수 있게 되었습니다.
                </p>
              </li>
              <li className="interna-list-5">
                <h1>‘World’s FPM(Fastest Pizza Maker)’ Competition</h1>
                <p>
                  1982년 ‘Two Tray Time’ 이라는 명칭으로 처음 시작된 이 대회는
                  3가지 피자(페퍼로니,
                  <br /> 머쉬룸, 치즈)를 맛있고 Perfect 하면서도 가장 빨리
                  만드는 최고의 피자 메이커를 가리는
                  <br /> 경기로, 도미노피자가 피자를 맛있고 빨리 만들면서도
                  안전하고 신속하게 배달해 줄 수<br /> 있다는 것을 알리기 위해서
                  시작되었습니다. 이후 ‘World’s Fastest Pizza Maker’로
                  <br /> 확장 개최, 2년마다 전 세계에서 선발된 도미노피자의 피자
                  메이커들이 최고의 피자 메이커에
                  <br />
                  도전하고 있습니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="interna-history-box">
            <p>International history of Domino’s Pizza</p>
            <ul>
              {internationalHistory.map((obj) => (
                <li>
                  <span>{obj.year}</span>
                  <span>{obj.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {activeTab === "tab4" && (
        <div className="company location">
          <h1>DOMINO'S PIZZA COMPANY LOCATION</h1>
          <div className="location-content">
            <img src="https://cdn.dominos.co.kr/renewal2018/w/img/img_location_p.jpg" />
            <ul>
              <li>
                <label>주소</label>
                <p>서울특별시 강남구 역삼로25길 35(역삼동, 청오큐브타워)</p>
              </li>
              <li>
                <label>전화번호</label>
                <p>Tel: 02-6954-3082</p>
                <p>Fax: 02-6954-3077</p>
                <p>고객상담: 080-860-3082</p>
              </li>
              <li>
                <label>오시는 길</label>
                <p>
                  지하철 2호선 역삼역 1번 출구로 나와서 도보 약 350M(5분 소요)
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
