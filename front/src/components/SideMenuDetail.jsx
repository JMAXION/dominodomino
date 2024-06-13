import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageTitle from "./PageTitle";
import { getUser } from "../util/localStorage";
import axios from "axios";
import "../css/sideMenuDetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons";

import ChoiceDrink from "../components/ChoiceDrink";
import QtyoptionComp from "./QtyoptionComp";
import Allergy2 from "./Allergy";

export default function SideMenuDetail({ depth2 }) {
  const { id } = useParams();
  const [side, setSide] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSide, setSelectedSide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const userInfo = getUser();

  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: side ? side.pname : "사이드메뉴", // 여기를 상품의 이름으로 바꾸고 싶은거야 {pizza.pname}이 출력되게
    breadcrumbLink: "/sides",
    nav1: "피자",
    nav2: "하프앤하프",
    nav3: "사이드디시",
    nav4: "인기세트메뉴",
    nav5: "음료&기타",
    link1: "/pizzas",
    link2: "/menu/halfnhalf",
    link3: "/sides",
    link4: "/popular",
    link5: "/beverage",
  });

  const openModal = (side) => {
    setSelectedSide(side);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSide(null);
  };

  useEffect(() => {
    if (side) {
      setprops((prevProps) => ({
        ...prevProps,
        breadcrumb: side.sname,
      }));
    }
  }, [side]);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/sides/${id}`;
    axios
      .get(url)
      .then((res) => {
        setSide(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

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

  const [selected, setSelected] = useState({
    large: true,
    mideum: false,
    size: "L",
    dough: "없음",
    doughPrice: null,
    leftPizzaId: null,
    rightPizzaId: null,
    edge: "",
    edgePrice: null,
    qty: 1,
  });

  function handleChange4({ type, count }) {
    let qty = count;
    //  alert(type+count)
    if (type === "plus") qty = qty + 1;
    else qty = qty - 1;
    // alert(qty)
    setSelected({ ...selected, qty: qty });
  }

  return (
    <>
      <PageTitle props={props} depth2={depth2} />
      <div className="content">
        <div className="side-detail-content">
          <div className="side-detail-image-box">
            <img
              className="side-detail-image"
              src={side.simage}
              alt={side.sname}
            />
            <button
              className="modalopenbtn-pizzaDetail"
              onClick={() => openModal(side)}
            >
              <FontAwesomeIcon icon={faExpand} /> <span>제품상세</span>
            </button>
            <div className="side-detail-image-text">
              <div>*모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.</div>
              <div>
                * 원산지 정보는 사진 우측 하단 돋보기 메뉴를 통해 확인
                가능합니다.
              </div>
            </div>
          </div>
          <div className="side-detail-info">
            <div className="side-detail-info-title">{side.sname}</div>
            <Allergy2 />
            <div className={`step-wrap`}>
              <div className="side-detail-wrap">
                <div className="side-detail-wrap-size">옵션 선택</div>
              </div>
              <QtyoptionComp onClick={handleChange4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
