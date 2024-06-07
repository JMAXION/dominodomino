import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MapContainerModal from "./MapContainerModal";

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
    부산: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
    인천: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
    광주: ["동구", "서구", "남구", "북구", "광산구"],
    울산: ["중구", "남구", "동구", "북구", "울주군"],
  };

  useEffect(() => {
    if (city && district) {
      setSearchPlace("도미노피자" + city + " " + district);
    }
  }, [city, district]);

  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.498426, 127.038867),
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
        let placename = place.place_name;
        let replacename = placename.replace("도미노피자", "");
        infowindow.setContent(
          '<div class="infowindow">' +
            '<div class="infowindow-title">' +
            replacename +
            "</div>" +
            '<div class="infowindow-content">' +
            "<li>" +
            "온라인 방문포장 30%" +
            "</li>" +
            "<li>" +
            "오프라인 방문포장 30%" +
            "</li>" +
            "</div>" +
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setAnimationClass("show-modal-animation");
      }, 10);
    } else {
      setAnimationClass("");
    }
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  const [orderType, setOrderType] = useState(null);
  const [pindex, setPindex] = useState(-1);

  const renderContent = () => {
    if (orderType === "delivery") {
      return <></>;
    } else if (orderType === "pickup") {
      return <></>;
    }
  };

  return (
    <div className="content">
      <div className="branch">
        <div className="branch-result">
          <h3>지역 검색</h3>
          <select
            className="branch-select"
            onChange={handleCityChange}
            value={city}
          >
            <option value="">시 선택</option>
            <option value="서울">서울</option>
            <option value="대전">대전</option>
            <option value="대구">대구</option>
            <option value="부산">부산</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="울산">울산</option>
            {/* 여기에 더 많은 시 옵션을 추가할 수 있습니다. */}
          </select>
          <select
            className="branch-select"
            onChange={handleDistrictChange}
            value={district}
          >
            <option value="">구/군 선택</option>
            {city &&
              districtsByCity[city].map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
          </select>
          <ul className="branch-select-warning">
            <li>*자사 및 매장별 프로모션은 중복할인이 불가합니다.</li>
          </ul>
          <div className="branch-infos">
            {places.map((place, index) => (
              <div className="branch-info">
                <p>
                  <div key={index}>
                    {place.name}({place.phone || "정보없음"})
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {place.address}
                  </div>
                  <li className="branch-info-detail">
                    <p
                      onClick={() => {
                        setPindex(index);
                        openModal("address");
                      }}
                    >
                      상세보기
                    </p>
                    <p
                      onClick={() => {
                        setPindex(index);
                        openModal("store");
                      }}
                    >
                      방문포장
                    </p>
                  </li>
                </p>
                <p className="branch-info-sale">
                  <li>
                    <p>
                      온라인
                      <br />
                      방문포장
                      <br />
                      30%
                    </p>
                  </li>
                  <li>
                    <p>
                      오프라인
                      <br />
                      방문포장
                      <br />
                      30%
                    </p>
                  </li>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="myMap"
          style={{
            width: "696px",
            height: "696px",
            zIndex: "0",
          }}
        ></div>
      </div>
      <div>{renderContent()}</div>
      {isModalOpen && (
        <MapContainerModal
          type={modalType}
          onClose={closeModal}
          places={places[pindex]}
        />
      )}
    </div>
  );
};

export default MapContainer;
