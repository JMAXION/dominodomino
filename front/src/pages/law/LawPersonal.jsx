import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import "../../css/law.css";

export default function LawPersonal({ depth2 }) {
  const [props, setprops] = useState({
    title: "개인정보 처리방침",
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

  const scrollCallBack = () => {
    document.getElementById("law-num1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div className="law law-personal">
        <p>도미노피자는 고객들의 개인정보를 소중히 다루고 있습니다.</p>
        <div>
          <h3>개인정보 처리방침 안내</h3>
          <p>
            청오디피케이㈜는(이하 “회사”는) 고객님의 개인정보를 중요시하며,
            개인정보보호를 위해 정보통신서비스제공자가 준수하여야 할 관련
            법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보
            처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다. 회사는
            개인정보 처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한
            용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가
            취해지고 있는지 알려드립니다.
          </p>
          <p>
            위치기반서비스사업에 연관된 개인위치정보 처리에 관한 내용은 본
            개인정보 처리방침을 통해서도 고지되오나 보다 자세한 내용은
            위치기반서비스 이용약관을 통해 확인이 가능합니다.
          </p>
        </div>
        <div className="law-personal-ul">
          <ul>
            <li className="law-personal-scroll-1" onClick={scrollCallBack}>
              1. 개인정보 수집항목, 이용목적 및 보유기간
            </li>
            <li>2. 개인정보 처리 업무의 위탁</li>
            <li>3. 개인정보의 제 3자 제공</li>
            <li>4. 관계 법령에 의한 정보 보유기간</li>
          </ul>
          <ul>
            <li>5. 개인정보의 파기절차 및 방법</li>
            <li>6. 이용자 및 법정대리인의 권리와 그 행사방법</li>
            <li>7. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</li>
            <li>8. 행태정보 활용/거부 및 APP접근권한에 관한 사항</li>
          </ul>
          <ul>
            <li>9. 개인정보의 안전성 확보조치</li>
            <li>10. 개인위치정보의 처리</li>
            <li>11. 개인정보 보호책임자 및 담당자의 연락처</li>
            <li>12. 고지의 의무</li>
          </ul>
        </div>
        <div className="law-personal-num1" id="law-num1">
          <h3>1. 개인정보 수집항목, 이용목적 및 보유기간</h3>
          <p>
            회사는 고객님에게 더 나은 수준의 서비스 제공을 위해
            <span> 아래와 같은 개인정보를 수집</span>하고 있습니다. <br />
            개인정보의 수집 및 이용에 동의를 거부할 수 있으나 관련된 서비스
            (온라인 제품 주문, 상품권 선물, 고객문의 등)가 제한됩니다.
            <br /> 회사는 수집한 개인정보를 하기 목적에 필요한 용도 이외로는
            사용되지 않으며, 이용 목적이 변경될 시에는 사전동의를 구할 것입니다.
          </p>
        </div>
        <div className="law-personal-table">
          <p>*회원 가입 시</p>
          <table border="1px">
            <thead>
              <tr>
                <td className="law-personal-table-td1">가입방법</td>
                <td className="law-personal-table-td2">구분</td>
                <td className="law-personal-table-td3">수집항목</td>
                <td>이용목적</td>
                <td>보유 및 이용기간</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>일반회원</td>
                <td className="law-personal-table-td2">필수</td>
                <td className="law-personal-table-accent">
                  (이용자에게 수집항목)
                  <br /> 성명, 생년월일, 아이디(ID),
                  <br /> 비밀번호, 휴대전화번호, 이메일,
                  <br /> 본인인증정보[아이핀 번호
                  <br />
                  (아이핀 인증시), 중복가입
                  <br /> 확인정보(DI), 암호화된 동일인
                  <br /> 식별정보(CI)]
                </td>
                <td rowSpan={10}>
                  <ul>
                    <li>(필수정보)</li>
                    <li>- 서비스 이용에 따른 본인확인</li>
                    <li>- 부정 이용방지와 비인가 사용방지 </li>
                    <li>- 이용자의 식별 등</li>
                    <li>- 개인화 서비스의 제공</li>
                    <li>
                      - 마케팅 정보 제공을 위한 활용
                      <br />
                      &nbsp;&nbsp;(맞춤형혜택 제공 동의 시)
                      <br />
                      <br />
                    </li>
                    <li>(선택정보)</li>
                    <li>- 추가 마케팅 정보의 제공</li>
                  </ul>
                </td>
                <td rowSpan={10}>
                  동의철회 및 회원탈퇴 시<br />
                  지체없이 파기
                  <br />
                  단, 관련 법령에 의해 유지 되는 정보는
                  <br /> 해당 기간보유 (4.관계 법령에 의한
                  <br /> 정보 보유기간 참조)
                </td>
              </tr>
              <tr>
                <td className="law-personal-table-td2">선택</td>
                <td className="law-personal-table-accent">
                  (이용자에게 수집항목)
                  <br /> 성별
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>네이버</td>
                <td className="law-personal-table-td2">필수</td>
                <td className="law-personal-table-accent">
                  (네이버㈜에서 제공받는 항목)
                  <br /> 성명, 이메일, 출생년도, 생일,
                  <br /> 암호화된 동일인 식별정보(CI)
                  <br />
                  <br /> (이용자에게 수집항목) <br />
                  휴대전화번호, 비밀번호
                </td>
              </tr>
              <tr>
                <td className="law-personal-table-td2">선택</td>
                <td className="law-personal-table-accent">
                  (이용자에게 수집항목)
                  <br /> 성별
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>SKT</td>
                <td className="law-personal-table-td2">필수</td>
                <td className="law-personal-table-accent">
                  (SK텔레콤㈜에서 제공받는
                  <br /> 항목)
                  <br /> 성명, 이메일, 생년월일,
                  <br /> 휴대전화번호, 암호화된 동일인
                  <br /> 식별정보(CI), 멤버십등급,
                  <br /> 멤버십번호
                  <br />
                  <br />
                  (이용자에게 수집항목)
                  <br />
                  비밀번호
                </td>
              </tr>
              <tr>
                <td className="law-personal-table-td2">선택</td>
                <td className="law-personal-table-accent">
                  (이용자에게 수집항목) <br />
                  성별
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>카카오</td>
                <td className="law-personal-table-td2">필수</td>
                <td className="law-personal-table-accent">
                  ((주)카카오에서 제공받는 항목)
                  <br /> 카카오계정(전화번호),
                  <br /> 카카오계정(이메일), 출생년도,
                  <br /> 생일, 암호화된 동일인 식별정보(CI)
                  <br />
                  <br />
                  (이용자에게 수집항목)
                  <br />
                  성명, 비밀번호
                </td>
              </tr>
              <tr>
                <td className="law-personal-table-td2">선택</td>
                <td className="law-personal-table-accent">
                  ((주)카카오에서 제공받는 항목)
                  <br /> 광고성 수신여부(카카오톡)
                  <br />
                  <br /> (이용자에게 수집항목)
                  <br /> 성별
                </td>
              </tr>
            </tbody>
          </table>
          <p className="law-personal-table-accent">
            *회원가입 시 본인인증 기관등을 통해 암호화된 동일인 식별정보 (CI)를
            수집하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
