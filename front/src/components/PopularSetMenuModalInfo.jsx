import React from "react";
import { Link } from "react-router-dom";

export default function PopularSetMenuModalInfo({ combo }) {
  return (
    <div className="modal-info">
      <div>
        <img
          className="modal-info-image"
          src="https://cdn.dominos.co.kr/admin/upload/event/20230519_UnlucYwV.jpg"
          alt="combo"
        />
      </div>
      <div className="modal-content-order">
        <Link to={`/popular/${combo.id}`}>
          <button className="modal-popular-content-order-button">
            주문하러 가기
          </button>
        </Link>
      </div>
    </div>
  );
}
