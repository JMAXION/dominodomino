import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import "../css/slider/slick-theme.css";
import "../css/slider/slick.css";
import "../css/slider/HomeSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/**
 *
 **/
export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="nextArrow">
      <FontAwesomeIcon icon={faChevronRight} onClick={onClick} />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="prevArrow">
      <FontAwesomeIcon icon={faChevronLeft} onClick={onClick} />
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "2px",
      initialSlide: 1,
    };
    return (
      <div>
        <div className="content">
          <Slider {...settings}>
            <div className="inner-slide">
              <img
                src="https://cdn.dominos.co.kr/admin/upload/banner/20240216_EcPgdM2T.jpg"
                className="sub-carousel-img"
              />
            </div>
            <div className="inner-slide">
              <img
                src="https://cdn.dominos.co.kr/admin/upload/banner/20231024_nILoMUXO.jpg"
                className="sub-carousel-img"
              />
            </div>
            <div className="inner-slide">
              <img
                src="https://cdn.dominos.co.kr/admin/upload/banner/20220621_Ummq9X16.jpg"
                className="sub-carousel-img"
              />
            </div>
            <div className="inner-slide">
              <img
                src="https://cdn.dominos.co.kr/admin/upload/banner/20220114_MZKmWb0r.jpg"
                className="sub-carousel-img"
              />
            </div>
          </Slider>
        </div>
        <div className="sub-carousel-border"></div>
      </div>
    );
  }
}
