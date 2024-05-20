import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faShop,
  faBoltLightning,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="content">
      <div className="icon-container">
        <div className="icon-box">
          <div className="icon-box-content">
            <FontAwesomeIcon icon={faBicycle} className="icon delivery" />
            <span className="icon-box-content-title delivery">배달 주문</span>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow delivery"
            />
            <p className="subtitle">등급별 최대 30%</p>
          </div>
        </div>
        <div className="icon-box">
          <div className="icon-box-content">
            <FontAwesomeIcon icon={faShop} className="icon pack" />
            <span className="icon-box-content-title pack">포장 주문</span>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow pack" />
            <p className="subtitle">등급별 최대 40%</p>
          </div>
        </div>
        <div className="icon-box">
          <div className="icon-box-content">
            <FontAwesomeIcon icon={faBoltLightning} className="icon quick" />
            <span className="icon-box-content-title quick">퀵오더</span>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow quick"
            />
            <p className="subtitle">
              자주 이용하는 메뉴를
              <br />더 빠르게 주문해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
