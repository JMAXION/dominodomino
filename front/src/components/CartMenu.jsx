import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "./PageTitle";

export default function CartMenu({ depth2 }) {
  const navigate = useNavigate();
  const [props, setProps] = useState({
    title: "장바구니",
  });
  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div className="cart-box">
        <div className="cart-box-empty-icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="cart-box-empty-title">장바구니가 비어 있습니다.</div>
        <div className="cart-box-empty-text">
          도미노피자의 맛있는 메뉴를 마음껏 골라 담으세요
        </div>
        <div className="cart-box-button-box">
          <button
            className="cart-box-button"
            onClick={() => navigate("/pizzas")}
          >
            <FontAwesomeIcon icon={faPlus} />
            메뉴 추가하기
          </button>
        </div>
      </div>
      <div className="cart-warning-content">
        <h3 className="cart-warning-content-title">유의사항</h3>
        <div className="cart-warning-content-text">
          <div>*할인 적용은 다음 단계에서 가능합니다.</div>
          <div>
            *피클 & 소스 제공 안내 (메뉴 {">"} 음료&기타 추가 구매 가능).
          </div>
          <div>-L : 피클L 1개, 핫소스 1개, 갈릭 디핑 소스L 1개 제공</div>
          <div>-M : 피클M 1개, 핫소스 1개, 갈릭 디핑 소스M 1개 제공</div>
          <div>*씬 도우, 샌드 도우 : 갈릭 디핑 소스 미제공</div>
          <div>
            *트리플 치즈 버스트L : 피클L 1개, 핫소스 1개, 갈릭 디핑 소스M 1개
            제공
          </div>
          <div>*해피 데일리 피자 : 피클 및 소스 미제공</div>
        </div>
      </div>
    </div>
  );
}
