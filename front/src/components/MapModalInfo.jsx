import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const { kakao } = window;

export default function MapModalInfo({ places }) {
  let placename = places.name;
  let replacename = placename.replace("도미노피자", "");
  console.log("address");

  const latitude = places.latitude;
  const longitude = places.longitude;
  console.log("위도경도", latitude, longitude);

  // 컴포넌트가 마운트된 후 카카오 지도를 초기화하기 위해 useEffect 훅 사용
  useEffect(() => {
    var markerPosition = new kakao.maps.LatLng(latitude, longitude);

    // 이미지 지도에 표시할 마커입니다
    // 이미지 지도에 표시할 마커는 Object 형태입니다
    var marker = {
      position: markerPosition,
    };
    var staticMapContainer = document.getElementById("staticMap"), // 이미지 지도를 표시할 div
      staticMapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 이미지 지도의 중심좌표, 객체 대신 직접적인 값 사용
        level: 3, // 이미지 지도의 확대 레벨
        marker: marker,
      };
    new kakao.maps.StaticMap(staticMapContainer, staticMapOption); // 'staticMap' 변수 할당 제거
  }, [latitude, longitude]); // latitude와 longitude가 변경될 때마다 useEffect 실행

  return (
    <div>
      <div className="mapmodalinfo">
        <p>
          <ul>
            <li className="mapmodalinfo-name">{replacename}</li>
          </ul>
          <ul className="mapmodalinfo-sale">
            <li>온라인 방문포장 30%</li>
            <li>오프라인 방문포장 30%</li>
          </ul>
          <ul>
            <button type="button" className="mapmodalinfo-sale-button">
              <Link to="/orderway" style={{ color: "white" }}>
                포장주문
              </Link>
            </button>
          </ul>
        </p>
        <p className="mapmodalinfo-detail">
          <ul>
            <li>전화번호</li>
            <li>주소</li>
            <li>영업시간</li>
            <li>주차정보</li>
            <li>특이사항</li>
          </ul>
        </p>
        <p>
          <ul>
            <li>{places.phone}</li>
            <li>{places.address}</li>
            <li>11:00 ~ 21:30</li>
            <li>매장주차불가</li>
            <li></li>
          </ul>
        </p>
      </div>
      <div
        id="staticMap"
        style={{ width: "800px", height: "500px", margin: "4rem auto" }}
      ></div>
    </div>
  );
}
