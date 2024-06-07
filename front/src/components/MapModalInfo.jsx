import React from "react";

export default function MapModalInfo() {
  return (
    <div>
      <div className="mapmodalinfo">
        <p>
          <ul>
            <li className="mapmodalinfo-name">명동점</li>
          </ul>
          <ul className="mapmodalinfo-sale">
            <li>온라인 방문포장 30%</li>
            <li>오프라인 방문포장 30%</li>
          </ul>
          <ul>
            <button type="button" className="mapmodalinfo-sale-button">
              포장주문
            </button>
          </ul>
        </p>
        <p>
          <ul>
            <li>전화번호</li>
            <li>주소</li>
            <li>영업시간</li>
            <li>위치정보</li>
            <li>주차정보</li>
            <li>특이사항</li>
          </ul>
        </p>
        <p>
          <ul>
            <li>02-2264-3081</li>
            <li>서울특별시 중구 마른내로 47 (초동)</li>
            <li>11:00 ~ 21:30</li>
            <li>을지로3가역 8번출구 명보아트홀 건물 1층</li>
            <li>매장주차불가</li>
            <li></li>
          </ul>
        </p>
      </div>
      <div></div>
    </div>
  );
}
