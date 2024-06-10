import React, { useState } from "react";
import PageTitle from "./PageTitle";

export default function MoneyGift({ depth2 }) {
  const [props, setProps] = useState({
    title: "상품권 선물",
    nav1: "금액상품권",
    nav2: "상품권 사용 안내",
    link1: "/moneygift",
    link2: "/giftusage",
  });
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // 수량 감소 함수
  const decreaseQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); // 수량이 1보다 작아지지 않도록 함
  };
  return (
    <div>
      <PageTitle depth2={depth2} props={props} />
      <div className="moneygift">
        <ul>
          <img
            src="https://cdn.dominos.co.kr/domino/pc/images/menu/img_gift_promotion11.png"
            alt=""
            className="moneygift-image"
          />
        </ul>
        <ul>
          <li>
            금액상품권은 홈페이지/모바일 웹/앱에서 구매 가능하며, 온라인 주문
            시에만 사용 가능 (전화/오프라인 사용불가)
          </li>
          <li style={{ color: "red" }}>
            1 주문 당 금액상품권은 권종 합산하여 5매까지 주문 가능 (대량 구매
            불가)
          </li>
          <li>
            금액상품권의 유효기간은 366일이며, 유효기간이 만료된 상품권은 사용
            불가
          </li>
          <li>구매내역은 나의정보 > 주문내역 > 상품권주문 에서 확인 가능</li>
          <li>
            금액상품권은 나의 정보 > 금액상품권 메뉴에서 상품권 등록 후 결제 시
            사용 가능
          </li>
          <li>금액상품권 사용 시 타 할인과 중복 적용 가능</li>
          <li>
            금액상품권 사용 후 상품권 잔액 및 사용 내역은 나의정보 >
            금액상품권에서 확인 가능
          </li>
          <li>
            금액상품권 환불 요청 시 이용한 결제수단으로 환불됨 (단, 휴대폰결제는
            통신사 정책으로 인하여 당월 결제만 취소 가능)
          </li>
          <li style={{ color: "red" }}>
            도미노콘 금액상품권의 경우 미사용 상품권은 도미노피자
            고객센터(080-860-3082)에서 취소(환불) 가능하며,
            <br /> 사용 후 환불을 요청하실 경우 쿠프마케팅 고객센터로 문의
            바랍니다.
            <br /> (금액상품권의 60% 사용 시 잔액의 90% 환불 가능, 쿠프마케팅
            고객센터 : 1644-5368)
          </li>
          <li>카드사 제휴 할인과 금액상품권 중복 적용 불가</li>
        </ul>
      </div>
      <div className="moneygift-examples">
        <ul>
          <img
            src="https://cdn.dominos.co.kr/admin/upload/voucher/C/20230424_WbZrRyzp.png"
            alt=""
            className="moneygift-example-image"
          />
          <li>[모바일]금액상품권 1만원권</li>
          <li>10000원</li>
          <p className="moneygift-order">
            <li className="moneygift-quantity-button">
              <button onClick={decreaseQuantity}>-</button>
              <li>{quantity}</li>
              <button onClick={increaseQuantity}>+</button>
            </li>
            <button className="moneygift-order-button">주문하기</button>
          </p>
        </ul>

        <ul>
          <img
            src="https://cdn.dominos.co.kr/admin/upload/voucher/C/20230424_ykvjVmIV.png"
            alt=""
            className="moneygift-example-image"
          />
          <li>[모바일]금액상품권 2만원권</li>
          <li>20000원</li>
          <p className="moneygift-order">
            <li className="moneygift-quantity-button">
              <button onClick={decreaseQuantity}>-</button>
              <li>{quantity}</li>
              <button onClick={increaseQuantity}>+</button>
            </li>
            <button className="moneygift-order-button">주문하기</button>
          </p>
        </ul>
        <ul>
          <img
            src="https://cdn.dominos.co.kr/admin/upload/voucher/C/20230424_84K9dBjI.png"
            alt=""
            className="moneygift-example-image"
          />
          <li>[모바일]금액상품권 3만원권</li>
          <li>30000원</li>
          <p className="moneygift-order">
            <li className="moneygift-quantity-button">
              <button onClick={decreaseQuantity}>-</button>
              <li>{quantity}</li>
              <button onClick={increaseQuantity}>+</button>
            </li>
            <button className="moneygift-order-button">주문하기</button>
          </p>
        </ul>
        <ul>
          <img
            src="https://cdn.dominos.co.kr/admin/upload/voucher/C/20230424_zRpod38v.png"
            alt=""
            className="moneygift-example-image"
          />
          <li>[모바일]금액상품권 5만원권</li>
          <li>50000원</li>
          <p className="moneygift-order">
            <li className="moneygift-quantity-button">
              <button onClick={decreaseQuantity}>-</button>
              <li>{quantity}</li>
              <button onClick={increaseQuantity}>+</button>
            </li>
            <button className="moneygift-order-button">주문하기</button>
          </p>
        </ul>
      </div>
    </div>
  );
}
