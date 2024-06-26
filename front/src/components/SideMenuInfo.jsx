import React from "react";
import { Link } from "react-router-dom";
import SideMenuInfoToggle from "./SideMenuInfoToggle";

export default function SideMenuInfo({ side }) {
  return (
    <div className="modal-info">
      <div className="modal-content-container-1">
        <div>
          <img className="modal-image" src={side.simage} alt={side.sname} />
          <div className="modal-image-text">
            * 모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.
          </div>
        </div>
        <div className="modal-content-list">
          <ul className="modal-content-list-main">
            <li className="modal-content-list-title">메인 토핑</li>
            <li className="modal-content-list-text">{side.topping}</li>
          </ul>
          <ul className="modal-content-list-home">
            <li className="modal-content-list-title">원산지</li>
            <li className="modal-content-list-text">{side.country}</li>
          </ul>
          <ul className="modal-content-list-button">
            <li className="modal-content-list-button-box">
              <button className="modal-content-list-button-allergy">
                원산지•영양성분•알레르기 유발성분
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-content-container-2">
        <SideMenuInfoToggle title="제품 상세보기" content={side.desc1} />
        <SideMenuInfoToggle title="메인 토핑" content={side.topping} />
        <SideMenuInfoToggle title="원산지" content={side.country} />
      </div>
      <div className="modal-content-order">
        <Link to={`/sides/${side.sid}`}>
          <button className="modal-content-order-button">주문하러 가기</button>
        </Link>
      </div>
    </div>
  );
}
