import React, { useEffect, useState } from "react";

const { kakao } = window;

const MapContainer = () => {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [searchPlace, setSearchPlace] = useState("");
  const [places, setPlaces] = useState([]);

  // 시에 따른 구 목록을 객체로 정의
  const districtsByCity = {
    서울: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
    대전: ["동구", "중구", "서구", "유성구", "대덕구"],
    대구: [
      "중구",
      "동구",
      "서구",
      "남구",
      "북구",
      "수성구",
      "달서구",
      "달성군",
    ],
  };

  useEffect(() => {
    if (city && district) {
      setSearchPlace(city + " " + district + "도미노피자");
    }
  }, [city, district]);

  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    if (searchPlace) {
      ps.keywordSearch(searchPlace, placesSearchCB);
    }

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        const newPlaces = [];
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          newPlaces.push({
            name: data[i].place_name,
            phone: data[i].phone,
            address: data[i].address_name,
          });
        }

        setPlaces(newPlaces);
        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let imageSize = new kakao.maps.Size(40, 40); // 마커 이미지의 크기입니다
      let imageSrc = "http://localhost:3000/logo.png"; // 마커 이미지의 주소입니다. 원하는 마커 이미지의 URL을 입력해 주세요.

      // 마커 이미지를 생성합니다.
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다. 이미지 옵션을 추가합니다.
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage, // 마커 이미지를 등록합니다.
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="margin:0 auto 0 auto;font-size:12px;text-align:center; background-color:red;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setDistrict(""); // 시를 바꿀 때 구 선택을 초기화합니다.
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  return (
    <div className="content">
      <h2 className="branch-h2">매장검색</h2>
      <div className="branch">
        <div className="branch-result">
          <h3>지역검색</h3>
          <select
            className="branch-select"
            onChange={handleCityChange}
            value={city}
          >
            <option value="">시 선택</option>
            <option value="서울">서울</option>
            <option value="대전">대전</option>
            <option value="대구">대구</option>
            {/* 여기에 더 많은 시 옵션을 추가할 수 있습니다. */}
          </select>
          <select
            className="branch-select"
            onChange={handleDistrictChange}
            value={district}
          >
            <option value="">구 선택</option>
            {city &&
              districtsByCity[city].map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
          </select>
          <div className="branch-infos">
            {places.map((place, index) => (
              <div className="branch-info">
                <div key={index}>
                  {place.name}({place.phone || "정보없음"})
                </div>
                <div>{place.address}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="myMap"
          style={{
            width: "600px",
            height: "600px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MapContainer;
