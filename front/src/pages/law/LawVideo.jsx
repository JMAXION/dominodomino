import React, { useState } from "react";
import PageTitle from "../../component/PageTitle";

export default function LawVideo() {
  const [props, setprops] = useState({
    title: "영상정보처리기기 운영관리방침",
    nav1: "이용약관",
    nav2: "개인정보 처리방침",
    nav3: "위치기반 서비스 이용약관",
    nav4: "청소년 보호방침",
    nav5: "영상정보처리기기 운영관리방침",
    // breadcrumbLink: "/law/personal",
    link1: "/law",
    link2: "/law/personal",
    link3: "/law/navi",
    link4: "/law/teen",
    link5: "/law/video",
  });
  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} />
      {/* ----- 본문 ----- */}
      <p>
        청오디피케이(이하 회사)는 고객의 개인정보를 안전하게 관리하기 위해
        노력하고 있으며 관련 법에 의거하여 운영되는 영상정보처리기기
        운영관리방침을 제정하고 이를 준수하고 있습니다.
      </p>
      <ul>
        <li>
          <h3>제1조. 영상정보처리기기의 설치 근거 및 설치 목적</h3>
          <p>
            회사는 "개인정보 보호법"에 따라 시설안전, 범죄 및 화재예방 등의
            목적으로 영상정보처리기기를 설치 및 운영하고 있습니다.
          </p>
        </li>
        <li>
          <h3>
            제2조. 고정형 영상정보처리기기의 종류, 설치위치, 촬영범위 및
            설치대수
          </h3>
          <table border="1px">
            <tr>
              <td>종류</td>
              <td>설치위치</td>
              <td>촬영범위</td>
              <td>수량</td>
            </tr>
            <tr>
              <td rowSpan={2}>CCTV</td>
              <td>직영매장</td>
              <td>매장내부</td>
              <td>429</td>
            </tr>
            <tr>
              <td>본사</td>
              <td>출입문, 로비, 주차장 등</td>
              <td>30</td>
            </tr>
          </table>
          <p>
            ※ 수량은 설치환경, 사업장소 이전, 수탁사와 계약내용 등에 따라 수시
            변동될 수 있습니다.
          </p>
        </li>
        <li>
          <h3>
            제3조. 고정형 영상정보처리기기의 촬영시간, 보관기간, 보관장소 및
            처리방법
          </h3>
          <table border="1px">
            <tr>
              <td>대상</td>
              <td>촬영시간</td>
              <td>보관기간</td>
              <td>보관장소</td>
              <td>처리방법</td>
            </tr>
            <tr>
              <td>직영매장</td>
              <td rowSpan={2}>24시간</td>
              <td rowSpan={2}>녹화장치 용량에 따라 최대 1달</td>
              <td>직영매장 내부</td>
              <td rowSpan={2}>HDD용량도달 시 파일 자동삭제</td>
            </tr>
            <tr>
              <td>본사</td>
              <td>방재실</td>
            </tr>
          </table>
        </li>
        <li>
          <h3>제4조. 이동형 영상정보처리기기의 운영 관리 현황</h3>
          <table border="1px">
            <tr>
              <td>대상</td>
              <td>촬영시간</td>
              <td>촬영목적/방법</td>
              <td>촬영사실 표시</td>
              <td>보관기간</td>
              <td>보관장소</td>
              <td>처리방법</td>
            </tr>
            <tr>
              <td>배달(드론 1대)</td>
              <td>이벤트 기간(이벤트지역선정 매장)</td>
              <td>비행안전 / 항공촬영</td>
              <td>드론 기기 불빛, 홈페이지 공지 등</td>
              <td>촬영당일 파기 (24시간 이내)</td>
              <td>해당 기기</td>
              <td>파일 삭제</td>
            </tr>
          </table>
          <p>
            ※ 드론 배달이벤트는 상시 운영하지 않으며 운영 시 도미노피자
            홈페이지에 사전 공지할 예정입니다.
          </p>
          <p>
            ※ 또한 개인정보포털 드론 촬영사실 조회를 통해서도 확인이 가능합니다.
          </p>
          <p>https://www.privacy.go.kr/front/filming/selectFilmingList.do</p>
        </li>
      </ul>
    </div>
  );
}
