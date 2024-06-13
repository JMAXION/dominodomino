import React, { useRef, useState } from "react";
import PageTitle from "../../components/PageTitle";
import PageButtons2 from "../../components/PageButtons2";
import RecruitSlider from "./RecruitSlider";
import "../../css/companyIntroduce/recruit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Recruit({ depth2 }) {
  const [props, setprops] = useState({
    title: "회사소개",
    breadcrumb: "인재채용",
    breadcrumbLink: "/company/overView", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "한국도미노피자",
    nav2: "가맹점모집",
    nav3: "인재채용",
    link1: "/company/overView",
    link2: "/company/franchisee/info",
    link3: "/company/recruit/fullTime",
  });

  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRegion, setModalRegion] = useState("지역");
  const [modalRegion2, setModalRegion2] = useState("지역");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const refs = useRef();
  const modalBackground = useRef();

  /* TabButton에 넘길 배열 */
  const rootList = [
    { root: "fulltime", name: "정규직", tabNum: "tab1" },
    { root: "parttime", name: "아르바이트직", tabNum: "tab2" },
  ];
  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  /* 출력용 리스트 */
  const recruitInfo = [
    {
      num: "1. 개인정보의 수집 및 이용목적",
      content:
        "* 정규직 입사지원에 대한 정보를 위해 개인정보를 수집하고 있습니다.",
    },
    {
      num: "2. 수집하는 개인정보의 항목",
      content:
        "* 필수입력사항 : 성명, 영문성명, 생년월일, 주소, 성별, 휴대전화번호, 장애사항, 보훈사항, 학력사항\n* 선택입력사항 : 사진, 이메일, 병역, 외국어/자격/면허, 경력사항",
    },
    {
      num: "3. 개인정보의 보유 및 이용기간",
      content:
        "* 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.\n　다만, 입사지원에 대한 원활한 서비스 제공을 위하여 6개월간 보관 합니다. 입사지원서에 대한 삭제를 원하시면 담당자에게 연락 주시기 바랍니다.",
    },
    {
      num: "4. 귀하는 위와 같은 개인정보 수집이용에 동의하지 않을 수 있습니다.",
      content: "단, 동의 거부시에는 해당 서비스 참여가 제한됩니다.",
    },
  ];
  const wantPerson = [
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_talented.png",
      title: "고객 지향적인 사람",
      desc: "얼굴에 늘 환한 미소를 담고 고객만족을 넘어\n고객 감동을 위해 항상 노력하며, 항상 고객의\n입장을 먼저 생각하고 행동하는 사람입니다.",
    },
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_talented2.png",
      title: "창의적인 사람",
      desc: "청년정신을 갖고 항상 보다 나은 서비스를 위해\n창의적인 아이디어로서 끊임없이 변화에 도전\n하는 사람입니다.",
    },
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_talented3.png",
      title: "즐겁게 일하는 사람",
      desc: "항상 긍정적인 생각으로 주어진 상황을 즐길 줄\n아는 사람으로서 함께 일하는 동료 뿐 아니라\n고객에게도 즐거움을 선사하는 사람입니다.",
    },
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_talented4.png",
      title: "성실하고 책임감이 강한 사람",
      desc: "주어진 일에 대해 사명감을 갖고 세심한\n부분까지 성공적으로 처리해 내기 위해\n노력하며, 최선과 최고를 향한 Professional\n로서 끊임없이 노력하는 사람입니다.",
    },
  ];
  const rankSystem = [
    {
      engName: "Area\nSupervisor",
      korName: "지역관리자",
      desc: "8~10개 매장의 운영을 지도, 관리하는 Operation 전문가입니다.",
    },
    {
      engName: "Manager",
      korName: "점장",
      desc: "한 매장의 운영 책임자로서 영업, 재고, 인원 관리를 수행하고 Supervisor에 버금가는 운영능력을 배양합니다.",
    },
    {
      engName: "Sr. Assistant\nManager",
      korName: "선임 부점장",
      desc: "입사 후 1.5~2년이 되면 선임부점장으로서 점장을 보조하나 언제든지 점장 대신 매장 관리를 수행할 수 있는 역량을 가진 중요한 위치로서의 역할을 수행합니다.",
    },
    {
      engName: "Assistant\nManager",
      korName: "부점장",
      desc: "매장의 정규직원이 되면 부점장으로서 점장급 선임직원과 스탭의 중간역할자로서 실질적인 매장 운영의 원동력으로서 역할을 수행합니다.",
    },
    {
      engName: "Staff",
      korName: "아르바이트",
      desc: "스탭은 시간제 직원 으로서 배달직과 CSR직으로 구분되어 있으며, CSR은 매장 내 주문 접수, 피자메이킹, 주방 보조 등 정규직원의 보조 업무를 수행합니다. 일정기간 이상 성실히 근무하고 점장의 추천을 받아 정규직원으로 채용되는 경우가 많습니다.",
    },
  ];
  const workCondition = [
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_working.png",
      engTitle: "SALARY",
      korTitle: "보수",
      list: "초봉 : 연간 3,530만원 수준(인센티브 별도)\n근무시간 : 1주 46시간 기준(고정연장시간 포함)\n연장근로수당,배달수당,마감교통비,개인별시상금 별도지급\n주 5일 근무가능(매장별 상황에 따라 근무/휴무 스케줄 탄력적 운영)",
    },
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_working2.png",
      engTitle: "BENEFITS",
      korTitle: "복리후생",
      list: "생일자 도미노콘 지급\n자사 직영점 매장 방문 포장 할인 쿠폰 매월 지급\n경조사 지원(화환 및 경조금 지급,상조서비스 지원)\n복지휴가 추가 부여(연간 5일 제공)\n법인휴양시설 이용(전국 콘도 제휴운영)\n선택적 복리후생비 지급(근속 1년이상직원)\n명절선물(설/추석) 지급\n장기근속자 시상금 지급\n단체상해보험 가입",
    },
    {
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_working3.png",
      engTitle: "RE-ENTER",
      korTitle: "재입사 시 혜택",
      list: "경력 및 급여 ½ 인정, (단, 3년 內 재입사 직원 대상)\n자세한 내용은 매장 및 SPV 문의",
    },
  ];
  const recruitProcess = [
    {
      num: "Step 1",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_jop_step.png",
      title: "서류전형",
      desc: "입사지원서류에 대해 기본적인 입사 가능성 확인 절차. 최적의 직무 배치가 될 수 있도록 검토합니다.",
    },
    {
      num: "Step 2",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_jop_step.png",
      title: "면접",
      desc: "면접 당일 가까운 매장견학을 통해 실무에 대한 안내를 드립니다. 근무의지에 대해 확인하는 절차를 통해 합격여부를 결정합니다.",
    },
    {
      num: "Step 3",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_jop_step.png",
      title: "채용 전 교육",
      desc: "면접에 합격하면 약 20일간 소정의 교육과정을 이수해야 합니다. 매장 운영에 대한 기본 실무 소양을 학습하는 과정입니다.",
    },
    {
      num: "Step 4",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/lst_jop_step.png",
      title: "수료 및 배치",
      desc: "교육을 정상적으로 이수하면 정식으로 매장에서 근무하게 됩니다. 거주지를 고려하여 출,퇴근이 용이한 매장으로 배치됩니다.",
    },
  ];
  const partTimeCondition = [
    {
      title: "1. 직원 채용",
      desc: "→ 근무기간 중 근무성과가 우수하고 동료 간의 팀웍 및 리더십을 보이는 아르바이트 직원에게는 우선 채용이 주어집니다.",
    },
    {
      title: "2. 사회보험가입",
      desc: "→ 도미노피자는 일정 조건이 충족하는 근로자에게 건강보험, 고용보험, 국민연금에 가입해 드리며 1년에 한번 건강검진도 실시하고 있습니다.\n※ 산재보험은 모든 직원이 가입됩니다.",
    },
    {
      title: "3. 인센티브 현황",
      desc: " 1) 일정기간 무사고 1,000건 피자 상품권 지급(도미노콘)\n2) 장기근속에 따른 시급 인상\n※ 근로기준법에 명시된 모든 근무관련 수당(주휴, 연장, 야간, 연차휴가, 퇴직금 등)을 준수하고 있습니다.",
    },
    {
      title: "4. 식대 지원",
      desc: "→ 1일 4.5시간 이상 근무 시 식대(6천원), 8시간 이상 근무 시 간식비(1,500원) 지원",
    },
    {
      title: "5. 기타 지원",
      desc: "1) 보건증 발급비 지원\n2) 명절 선물 지급(설, 추석)\n3) 배달근무자 악천후 수당 지급\n4) 피자 50% 할인쿠폰 월2매, 친절사원 등 피자무료시식권 지급\n5) 법인 콘도 이용가능",
    },
  ];

  const onPageBtnClick = () => {
    console.log(activeTab);
  };

  const handleCid = () => {
    console.log(activeTab);
  };

  /* 모달 */
  const regionList = {
    서울: [{ store: "가락점" }, { store: "가산점" }, { store: "가좌점" }],
    인천: [{ store: "간석점" }, { store: "검단점" }, { store: "계양점" }],
    경기: [
      { store: "갈매점" },
      { store: "경기광주점" },
      { store: "고양원종점" },
    ],
  };

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <PageButtons2
        rootList={rootList}
        className="Recruit"
        handleTabClick={handleTabClick}
        onPageBtnClick={onPageBtnClick}
        handleCid={handleCid}
      />

      {activeTab === "tab1" && (
        <div className="company fulltime">
          <img
            src="https://cdn.dominos.co.kr/renewal2018/w/img/visual_jop.png"
            alt="recruit_img"
          />
          <RecruitSlider className="fulltime" />
          <div className="recruit">
            <h3>채용안내</h3>
            <div className="recruit-info">
              <ul>
                {recruitInfo.map((obj) => (
                  <li className="recruit-info-map">
                    <p>{obj.num}</p>
                    <p>
                      {obj.content.split("\n").map((item) => (
                        <p>{item}</p>
                      ))}
                    </p>
                  </li>
                ))}
                <li>채용/반환문의 : 인사담당자 02-6954-3032</li>
                <li>
                  - [채용절차의 공정화에 관한 법률] 제11조 제1항에 따라, 당사
                  채용에 지원한 구직자 중 최종합격이 되지 못한 구직자는 제출하신
                  채용서류의 반환을 청구할 수 있음을 알려드립니다.
                </li>
                <li>
                  - 채용서류 반환 청구 요청 기간 : 합격자 발표(공고마감) 후 30일
                  이내.채용서류 반환 청구 요청기간 이후에는 서류 즉시 파기
                </li>
                <li>
                  - 반환 서류 대상 : 오프라인으로 제출한 이력서, 자기소개서 등
                  법률에서 지정하는 모든 채용서류(홈페이지 또는 전자우편으로
                  제출된 온라인 제출 서류는 해당되지 않음. [채용절차의 공정화에
                  관한 법률 제2조 제6항] 참고)
                </li>
                <li>
                  - 반환방법 : 인사담당자 문의 바람. 채용서류 반환에 소요되는
                  비용은 회사 부담.
                </li>
              </ul>
            </div>
            <div className="recruit-search">
              <select>
                <option value="제목">제목</option>
                <option value="내용">내용</option>
                <option value="제목+내용">제목+내용</option>
              </select>
              <input type="text" />
              <button type="button">검색</button>
              <span>총 0건</span>

              <table>
                <tr>
                  <th className="recruit-th1">번호</th>
                  <th className="recruit-th2">제목</th>
                  <th className="recruit-th3">등록일</th>
                  <th className="recruit-th4">조회</th>
                </tr>
                <tr className="recruit-tr">
                  <td rowSpan={4}>검색결과가 없습니다.</td>
                </tr>
              </table>
              <div className="recruit-line"></div>
            </div>
            <h3>인재상</h3>
            <div className="recruit-wantPerson">
              {wantPerson.map((obj) => (
                <>
                  <img src={obj.img} alt="recruit-wantPerson" />
                  <div>
                    <p>{obj.title}</p>
                    <p>{obj.desc}</p>
                  </div>
                </>
              ))}
            </div>
            <h3>직급체계</h3>
            {rankSystem.map((obj) => (
              <div className="recruit-rankSystem">
                <div>
                  <p className="recruit-rankSystem-engName">
                    {obj.engName.split("\n").map((item) => (
                      <p>{item}</p>
                    ))}
                  </p>
                  <p className="recruit-rankSystem-korName">{obj.korName}</p>
                </div>
                <p>{obj.desc}</p>
              </div>
            ))}
            <h3>근무조건</h3>
            <div className="recruit-workCondition">
              {workCondition.map((obj) => (
                <>
                  <div className="recruit-workCondition-box">
                    <img src={obj.img} />
                    <div>
                      <p className="engTitle">{obj.engTitle}</p>
                      <p className="korTitle">{obj.korTitle}</p>
                    </div>
                    <ul>
                      {obj.list.split("\n").map((list) => (
                        <li>{list}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="recruit-dotLine"></div>
                </>
              ))}
            </div>
            <h3>채용절차</h3>
            <div className="recruit-process">
              {recruitProcess.map((obj) => (
                <div className="recruit-process-box">
                  <p>{obj.num}</p>
                  <img src={obj.img} alt="recruitProcess" />
                  <p className="process-title">{obj.title}</p>
                  <p className="process-desc">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div className="company recruit">
          <img
            src="https://cdn.dominos.co.kr/renewal2018/w/img/visual_jop.png"
            alt="recruit_img"
            className="recruit-partTime-img"
          />
          <iframe
            width="1001"
            height="563"
            src="https://www.youtube.com/embed/xEdZuYsYm84"
            title="2023 도미노피자 HERO 채용 안내"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="recruit-parttime">
            <h3>아르바이트직</h3>
            <p>
              한국도미노피자와 함께 성장할 참신하고 유능한 인재를 모집합니다.
            </p>
            <ol>
              <li>
                아르바이트는 각 매장별로 수시로 모집하여 배달직과
                매장근무직(CSR)으로 나뉩니다.
              </li>
              <li>
                근무조건은 매장마다 조금씩 다를 수 있으니 매장 별 채용공고를
                확인 해 주세요.
              </li>
              <li>통상적인 근무조건(직영점 기준)</li>
            </ol>

            <div className="recruit parttime-box">
              <ul>
                {partTimeCondition.map((obj) => (
                  <div>
                    <li>{obj.title}</li>
                    {obj.desc.split("\n").map((list) => (
                      <li>{list}</li>
                    ))}
                  </div>
                ))}
              </ul>
              <ul>
                <li>채용/반환문의 : 인사담당자 02-6954-3032</li>
                <li>
                  - [채용절차의 공정화에 관한 법률] 제11조 제1항에 따라, 당사
                  채용에 지원한 구직자 중 최종합격이 되지 못한 구직자는 제출하신
                  채용서류의 반환을 청구할 수 있음을 알려드립니다.
                </li>
                <li>
                  - 채용서류 반환 청구 요청 기간 : 합격자 발표(공고마감) 후 30일
                  이내.채용서류 반환 청구 요청기간 이후에는 서류 즉시 파기
                </li>
                <li>
                  - 반환 서류 대상 : 오프라인으로 제출한 이력서, 자기소개서 등
                  법률에서 지정하는 모든 채용서류(홈페이지 또는 전자우편으로
                  제출된 온라인 제출 서류는 해당되지 않음. [채용절차의 공정화에
                  관한 법률 제2조 제6항] 참고)
                </li>
                <li>
                  - 반환방법 : 인사담당자 문의 바람. 채용서류 반환에 소요되는
                  비용은 회사 부담.
                </li>
              </ul>
            </div>
            <ol>
              <li>
                근무 중 점장 또는 수퍼바이저의 추천을 받아 정규직으로 채용되는
                경우도 많습니다.
              </li>
              <li>
                어느 매장에서 아르바이트를 찾고 있는 지 바로 확인 해 보세요!
              </li>
              <a href="https://dominos.alba.co.kr/job/brand/">
                확인하러 바로가기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;〉
              </a>
              <li>
                근무를 원하는 지역 매장의 채용공고가 없다면 원하는 근무조건으로
                상시지원 해 놓으시면 각 매장에서 확인 후 연락 드립니다.
              </li>
              {/* ----- 모달 ----- */}
              <div className="recruit-wrapper">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="recruit-modal-open-btn"
                >
                  상시 지원하기
                </button>
              </div>
              {modalOpen === true && (
                <div
                  ref={modalBackground}
                  onClick={(e) => {
                    if (e.target === modalBackground.current)
                      setModalOpen(false);
                  }}
                  className="recruit-modal-container"
                >
                  {/* ----- 모달 헤더 ----- */}
                  <div className="recruit-modal-content">
                    <div className="recruit-modal-header">
                      <span>아르바이트 상시지원</span>
                      <button
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="recruit-modal-close-btn"
                      >
                        <FontAwesomeIcon icon={faX} />
                      </button>
                    </div>
                    {/* ---- 모달 바디 ----- */}
                    <div className="recruit-modal-body">
                      <div className="recruit-modal-law-box">
                        <p>개인정보 수집 및 이용동의</p>
                        <div className="recruit-modal-law-content">
                          청오디피케이㈜는 아르바이트 지원자가 채용을 위해
                          제공한 개인정보가 보호 받을 수 있도록 개인정보보호법,
                          정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
                          정보통신서비스 제공자가 준수해야 할 관련 법규상의
                          개인정보보호규정 및 개인정보 보호위원회가 제정한 표준
                          개인정보 보호지침을 준수합니다. <br />
                          <br />
                          1. 수집하는 개인정보의 항목
                          <br /> * 필수입력사항 : 이름, 주소, 휴대전화
                          <br />
                          <br /> 2. 개인정보의 수집 및 이용목적
                          <br /> * 아르바이트 입사지원에 대한 정보를 위해
                          개인정보를 수집하고 있습니다.
                          <br />
                          <br /> 3. 개인정보의 보유 및 이용기간
                          <br /> * 원칙적으로 개인정보의 수집 및 이용목적이
                          달성된 후에는 해당 정보를 지체없이 파기합니다. 다만,
                          입사지원에 대한 원활한 서비스 제공을 위하여 6개월간
                          보관합니다.
                          <br />
                          <br /> 4. 귀하는 위와 같은 개인정보 수집이용에
                          동의하지 않을 수 있습니다.
                          <br /> 단, 동의 거부시에는 해당 서비스 참여가
                          제한됩니다.
                        </div>
                        <div className="modal-law-radios">
                          <div>
                            <input
                              type="radio"
                              value="agree"
                              name="modal-law"
                            />
                            <span>동의함</span>
                          </div>
                          <div>
                            <input
                              type="radio"
                              value="disagree"
                              name="modal-law"
                            />
                            <span>동의하지 않음</span>
                          </div>
                        </div>
                      </div>
                      <form className="recruit-modal-form">
                        <div className="recruit-modal-region">
                          <label>희망지점</label>
                          <div className="recruit-modal-selects">
                            <div className="recruit-modal-select-1">
                              <span>1지망</span>
                              <select
                                onChange={(e) => setModalRegion(e.target.value)}
                              >
                                <option value="지역">지역</option>
                                <option value="서울">서울</option>
                                <option value="인천">인천</option>
                                <option value="경기">경기</option>
                              </select>
                              <select name="" id="">
                                <option value="매장명">매장명</option>
                                {modalRegion &&
                                  regionList[modalRegion]?.map((obj) => (
                                    <option value={obj.store}>
                                      {obj.store}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            <div>
                              <span>2지망</span>
                              <select
                                onChange={(e) =>
                                  setModalRegion2(e.target.value)
                                }
                              >
                                <option value="지역">지역</option>
                                <option value="서울">서울</option>
                                <option value="인천">인천</option>
                                <option value="경기">경기</option>
                              </select>
                              <select name="" id="">
                                <option value="매장명">매장명</option>
                                {modalRegion2 &&
                                  regionList[modalRegion2]?.map((obj) => (
                                    <option value={obj.store}>
                                      {obj.store}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="recruit-modal-part">
                          <label>희망직종</label>
                          <div className="recruit-modal-part-radios">
                            <div>
                              <input type="radio" name="modal-part" />
                              <span>배달</span>
                            </div>
                            <div>
                              <input type="radio" name="modal-part" />
                              <span>SCR(매장직)</span>
                            </div>
                          </div>
                        </div>
                        <div className="recruit-modal-startDate">
                          <label>시작가능일</label>
                          <input
                            type="date"
                            value={selectedStartDate}
                            onChange={(e) => {
                              console.log("value->", e.target.value);
                              setSelectedStartDate(e.target.value);
                            }}
                            placeholder="날짜를 선택하세요"
                          />
                        </div>
                        <div className="recruit-modal-canPeriod">
                          <label>가능기간</label>
                          <div>
                            <select>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                            <span>개월</span>
                            <span className="recruit-modal-canPeriod-accent">
                              (시급 및 근무시간은 협의를 통해 조정가능)
                            </span>
                          </div>
                        </div>
                        <div className="recruit-modal-name">
                          <label>이름</label>
                          <input type="text" />
                        </div>
                        <div className="recruit-modal-address">
                          <label>주소</label>
                          <div className="recruit-modal-address-box">
                            <div>
                              <input type="text" />
                              <button type="button">우편번호 찾기</button>
                              {/* {isOpen && (
                                <div>
                                  <DaumPostcode
                                    className="recruit-postmodal"
                                    theme={themeObj}
                                    style={postCodeStyle}
                                    onComplete={completeHandler}
                                    onClose={closeHandler}
                                  />
                                </div>
                              )} */}
                            </div>
                            <input type="text" />
                            <input type="text" />
                          </div>
                        </div>
                        <div className="recruit-modal-phone">
                          <label>휴대전화</label>
                          <div>
                            <select>
                              <option value="010">010</option>
                              <option value="010">011</option>
                              <option value="010">016</option>
                            </select>
                            <span>-</span>
                            <input type="text" />
                            <span>-</span>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="recruit-modal-etc">
                          <label>기타(선택항목)</label>
                          <textarea></textarea>
                        </div>
                        <div className="recruit-modal-btn">
                          <button
                            type="button"
                            onClick={() => setModalOpen(false)}
                          >
                            취소
                          </button>
                          <button type="submit">지원하기</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
