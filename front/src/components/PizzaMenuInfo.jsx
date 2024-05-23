import React, { useState } from "react";
import PizzaMenuInfoToggle from "./PizzaMenuInfoToggle";

export default function PizzaMenuInfo({ pizza }) {
  return (
    <div className="modal-info">
      <div className="modal-content-container-1">
        <div>
          <img className="modal-image" src={pizza.image} alt={pizza.title} />
          <div className="modal-image-text">
            * 모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.
          </div>
        </div>
        <div className="modal-content-list">
          <ul className="modal-content-list-main">
            <li className="modal-content-list-title">메인 토핑</li>
            <li className="modal-content-list-text">{pizza.main}</li>
          </ul>
          <ul className="modal-content-list-home">
            <li className="modal-content-list-title">원산지</li>
            <li className="modal-content-list-text">{pizza.home}</li>
          </ul>
          <ul className="modal-content-list-button">
            <li className="modal-content-list-button-box">
              <button className="modal-content-list-button-allergy">
                원산지•영양성분•알레르기 유발성분
              </button>
              <button className="modal-content-list-button-story">
                피자스토리
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-content-container-2">
        <PizzaMenuInfoToggle title="제품 상세보기" content={pizza.tag1} />
        <PizzaMenuInfoToggle title="메인 토핑" content={pizza.main} />
        <PizzaMenuInfoToggle title="원산지" content={pizza.home} />
        <PizzaMenuInfoToggle title="도미노피자의 특징" content={pizza.tag1} />
      </div>
    </div>
  );
}
