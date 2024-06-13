import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PopularSetMenuModal from "./PopularSetMenuModal";
import PageTitle from "./PageTitle";
import axios from "axios";

export default function PopularSetMenuProduct({ depth2 }) {
  const [comboList, setComboList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const url = "http://127.0.0.1:8080/menu/popular";
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        setComboList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setAnimationClass("show-modal-animation");
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setAnimationClass("");
    }
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  // 모달을 여는 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [props, setprops] = useState({
    title: "메뉴",
    breadcrumb: "사이드디시",
    breadcrumbLink: "/pizzas",
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

  return (
    <div className="content">
      <PageTitle props={props} depth2={depth2} />
      <div className="popular-set-menu">
        <div className="popular-set-menu-image">
          <Link to={`/popular/${comboList.id}`}>
            <img src={comboList.image1} alt={comboList.name} />
          </Link>
        </div>
        <div className="popular-set-menu-box">
          <div className="popular-set-menu-title">{comboList.name}</div>
          <div className="popular-set-menu-title-date">
            2023-05-19 ~ 2024-06-30
          </div>
        </div>
        <button className="popular-modal-button" onClick={openModal}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {isModalOpen && (
        <PopularSetMenuModal combo={comboList} onClose={closeModal} />
      )}
    </div>
  );
}
