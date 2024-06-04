import React, { useState } from "react";
import PageTitle from "./PageTitle";
import { Link, useNavigate } from "react-router-dom";

export default function EcouponIndex({ depth2 }) {
  const navigate = useNavigate();
  const [props, setProps] = useState({
    title: "e-쿠폰",
    nav1: "e-쿠폰 주문",
    nav2: "e-쿠폰 사용 안내",
    link1: "/ecoupon/index",
    link2: "/ecouponusage",
  });
  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <ul className="ecouponindex-insert">
        <p>쿠폰번호 조회하고 바로 주문하세요.</p>
        <li className="ecouponindex-input">
          <input type="text" placeholder="쿠폰번호를 입력해주세요." />
          <button>조회</button>
        </li>
      </ul>
      <ul className="ecouponindex-warning">
        <li>최대 4장까지 사용 가능합니다.</li>
        <li>(피자 1판당 1장 사용 가능)</li>
      </ul>
      <ul className="ecouponindex-button">
        <button onClick={() => navigate("/pizzas")}>장바구니 담기</button>
      </ul>
      <ul className="ecouponindex-warningtext">
        <li>e-쿠폰 유의사항</li>
        <li className="ecouponindex-warningtexts">
          <p>
            e-쿠폰 메뉴 선택 시 '쿠폰번호 먼저 입력' 혹은 '메뉴 먼저 선택' 중
            택1 하여 이용 가능합니다.
          </p>
          <p>
            e-쿠폰은 비회원 주문 시, 사용이 불가합니다. (비회원일 경우, 회원가입
            후 사용가능)
          </p>
          <p>
            e-쿠폰의 유효기간은 쿠폰별로 상이하므로 쿠폰 내 유효기간을
            확인하시기 바랍니다.
          </p>
          <p>
            '메뉴 먼저 선택'으로 주문 시, e-쿠폰에 표기되어 있는 메뉴 외에 다른
            메뉴로 변경하여 주문 가능합니다.
          </p>
          <p>
            '메뉴 먼저 선택'으로 주문 시, 피자는 무조건 담아야 하며 e-쿠폰에
            표기되어 있는 메뉴에 사이드디시, 음료가 포함되어 있더라도
            <br />
            &nbsp;&nbsp;사이드디시 또는 음료를 담지 않을 경우 포함되어 주문 되지
            않습니다.
          </p>
          <p>e-쿠폰으로 주문 시, 1주문 당 최대 4장까지 사용 가능합니다.</p>
          <p>
            e-쿠폰으로 주문 시, 포장 할인 및 여타 제휴 할인과 중복하여 사용할 수
            없습니다.
          </p>
          <p>
            e-쿠폰으로 주문 시, 표기되어 있는 금액 이상일 경우에만 주문
            가능합니다.
          </p>
          <p>
            구매처별 별도 프로모션용 e-쿠폰으로 주문 시, 메뉴는 변경 불가합니다.
            ('쿠폰번호 먼저 입력'으로만 주문 가능)
          </p>
          <p>
            초과 주문 금액은 후결제가 불가하여, 온라인 선결제로 결제 가능합니다.
            <br />
            &nbsp;&nbsp;(토핑은 함께 주문이 가능하나, e-쿠폰 금액에서 차감되지
            않고 추가결제 필요)
          </p>
          <p>
            특수 매장에서는 e-쿠폰 사용이 불가합니다.(사용불가매장: 알펜시아점,
            대명비발디파크점, 잠실야구장점, 롯데월드점)
          </p>
          <p>
            e-쿠폰으로 주문 후 매장으로 주문 취소 요청하시는 경우, 쿠폰 재사용은
            5분 경과 후 가능합니다.
            <br />
            &nbsp;&nbsp;(쿠폰 복구가 정상적이지 않은 경우 도미노피자
            고객만족센터로 문의해 주세요. 080-860-3082)
          </p>
          <p>
            e-쿠폰 환불을 원하거나 상품권 코드 번호 조회 시 문제가 있을 경우,
            <br />
            &nbsp;&nbsp;해당 쿠폰 구매처로 문의 바랍니다. (도미노피자 본사 및
            매장에서 환불 불가)
          </p>
          <p>
            e-쿠폰 사용방법 : <Link to="/ecouponusage">e-쿠폰 사용안내</Link>
          </p>
        </li>
      </ul>
    </div>
  );
}
