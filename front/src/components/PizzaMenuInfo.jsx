import React, { useState, useEffect } from "react";
import PizzaMenuInfoToggle from "./PizzaMenuInfoToggle";
import PizzaPoint from "./PizzaPoint";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import HnfInfoModal from "./HnfInfoModal";
import Allergy from "./Allergy";

export default function PizzaMenuInfo({ pizza }) {
  return (
    <div className="modal-info">
      <div className="modal-content-container-1">
        <div>
          <img className="modal-image" src={pizza.menuimg} alt={pizza.pname} />
          <div className="modal-image-text">
            * 모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.
          </div>
        </div>
        <div className="modal-content-list">
          <ul className="modal-content-list-main">
            <li className="modal-content-list-title">메인 토핑</li>
            <li className="modal-content-list-text">{pizza.topping}</li>
          </ul>
          <ul className="modal-content-list-home">
            <li className="modal-content-list-title">원산지</li>
            <li className="modal-content-list-text">{pizza.country}</li>
          </ul>
          <ul className="modal-content-list-button">
            <li className="modal-content-list-button-box">
              <Allergy />
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-content-container-2">
        <PizzaMenuInfoToggle title="제품 상세보기" content={pizza.desc1} />
        <PizzaMenuInfoToggle title="메인 토핑" content={pizza.topping} />
        <PizzaMenuInfoToggle title="원산지" content={pizza.country} />
        <PizzaMenuInfoToggle
          title="도미노피자의 특징"
          content={<PizzaPoint />}
        />
      </div>
      <div className="modal-content-order">
        <Link to={`/pizzas/${pizza.pid}`}>
          <button className="modal-content-order-button">주문하러 가기</button>
        </Link>
      </div>
    </div>
  );
}
