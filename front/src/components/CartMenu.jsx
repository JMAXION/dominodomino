import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "./PageTitle";

export default function CartMenu({ depth2 }) {
  const [props, setProps] = useState({
    title: "장바구니",
  });
  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div className="cart-box">
        <div className="cart-box-empty">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div>장바구니가 비어 있습니다.</div>
        <div>도미노피자의 맛있는 메뉴를 마음껏 골라 담으세요</div>
        <div className="cart-box-button">
          <button>
            <FontAwesomeIcon icon={faPlus} />
            메뉴 추가하기
          </button>
        </div>
      </div>
      <div className="cart-warning-content">
        <h3 className="cart-waring-content-title">유의사항</h3>
        <div className="cart-waring-content-text">
          <span>*할인 적용은 다음 단계에서 가능합니다.</span>
        </div>
      </div>
    </div>
  );
}
