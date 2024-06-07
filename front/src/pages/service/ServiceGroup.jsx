import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

export default function ServiceGroup({ depth2 }) {
  const [props, setprops] = useState({
    title: "도미노 서비스",
    breadcrumb: "단체주문 서비스",
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
  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div className="groupOrder_innerbox">
        <div className="innerbox_1">
          <p>
            다양한 행사, 모임, 파티, 이벤트 등에서 소중한 사람들과 함께 누리는
            즐거움을 위해
          </p>
          <p>맛있는 도미노 피자를 다량으로 주문하고 싶으시면,</p>
        </div>
        <div className="innerbox_2">
          <div className="innerbox_2_icon">
            <FontAwesomeIcon icon={faMotorcycle} />
          </div>
          <p>주문부터 결제까지 간편한</p>
          <p>도미노피자 단체주문 서비스를 이용해보세요.</p>
          <p>02-555-3874</p>
        </div>
        <div className="innerbox_3">
          <div className="innerbox_line">
            <p>도미노피자 단체주문 혜택</p>
          </div>
          <ul>
            <li>
              01. 한번의 결제로 여러곳의 배달지로 전국 도미노피자 어느곳에서도
              배달가능
            </li>
            <li>
              02. 고객님만의 특별한 메세지를 레터나 문자로 선물 받으실 고객님께
              전달
            </li>
            <li>
              03. 고객님께서 원하시는 날짜 및 시간에 맞춰 최상의 상태로 배달
            </li>
          </ul>
        </div>
        <div className="innerbox_4">
          <div className="innerbox_line">
            <p>이용안내</p>
          </div>
          <ul>
            <li>
              30판 이상 주문시 이용해 주세요 (30판 미만 주문은 080-860-3082로
              연락주세요)
            </li>
            <li>주문은 02-555-3874(단체주문 담당자)로 해주세요</li>
            <li className="innerbox_4_red">최소 2~3일전 주문신청 필수</li>
            <li>
              주문 접수시간은 평일은 08:30~17:30 (마지막주 수요일은 17:00)/ 주말
              및 공휴일 휴무 (평일 점심시간 11:30~12:45)
            </li>
            <li>
              현금 및 신용카드(법인/개인) 모두 가능(세금계산서/현금영수증
              발급가능)
            </li>
            <li>쿠폰,제휴 및 여타 할인 중복 불가</li>
            <li>
              할인금액은 주문수량,배달지역당 피자 수량 등 조건에 따라 차등적용
            </li>
          </ul>
          {/* <button>단체주문 신청 양식 다운로드</button> */}
        </div>
      </div>
    </div>
  );
}
