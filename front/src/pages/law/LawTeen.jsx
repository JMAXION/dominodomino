import React, { useState } from "react";
import PageTitle from "../../component/PageTitle";

export default function LawTeen() {
  const [props, setprops] = useState({
    title: "청소년 보호방침",
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
        청오디피케이(주)는 청소년들이 유해정보에 접근할 수 없도록 방지하고
        있는바, 회사가 청소년 보호를 위해 어떠한 조치를 취하고 있는지 알려
        드립니다.
      </p>
      <ul>
        <li>
          <h3>제1조. 청소년 보호 관리조치</h3>
          <p>
            회사는 성인인증 장치 운영 및 유해매체물의 표시를 적용하여, 청소년에
            대한 유해정보의 접근과 노출을 사전에 차단하고 있으며 청소년
            유해상품의 구매도 제한하고 있습니다.
          </p>
        </li>
        <li>
          <h3>제2조. 청소년 보호를 위한 교육</h3>
          <p>
            청소년 보호와 관련한 업무 담당자를 대상으로 정보통신망이용촉진 및
            정보보호에 관한 법률 및 청소년보호법 등 관련법령 및 유해정보 발견 시
            처리 방법 등을 교육하고 있습니다.
          </p>
        </li>
        <li>
          <h3>제3조. 청소년 보호에 대한 피해상담 및 고충처리</h3>
          <p>
            청오디피케이㈜는 청소년 유해 상품에 대한 피해상담 및 고충처리를
            위하여 청소년보호책임자를 지정하고 담당부서를 운영하고 있으니, 4항을
            참고하여 전화나 메일주시면 상담 및 고충처리 요청할 수 있습니다.
          </p>
        </li>
        <li>
          <h3>제4조. 청소년 보호 책임자 및 담당자</h3>
          <ul>
            <li>[청소년 보호 책임자]</li>
            <li>- 이름 : 이혜민</li>
            <li>- 부서 : CRM</li>
            <li>- 이메일 : webmaster@dominos.co.kr</li>
          </ul>
          <ul>
            <li>[청소년 보호 담당자]</li>
            <li>- 이름 : 고나연</li>
            <li>- 부서 : CRM</li>
            <li>- 전화 : 02-6954-3041</li>
            <li>- 이메일 : webmaster@dominos.co.kr</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
