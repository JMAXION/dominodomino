import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import "../../css/slider/slick-theme.css";
import "../../css/slider/slick.css";
import "../../css/slider/HomeSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default class RecruitSlider extends Component {
  render() {
    const settings = {
      dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      initialSlide: 0,
    };

    return (
      <div>
        <div className="content">
          <Slider {...settings} className="recruit-slider">
            <div className="inner-slide">
              <iframe
                className="sub-carousel-video"
                width="1001"
                height="563"
                src="https://www.youtube.com/embed/rVtYIBWb7WQ"
                title="도미노피자 채용 안내"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="inner-slide">
              <iframe
                className="sub-carousel-video"
                width="1001"
                height="563"
                src="https://www.youtube.com/embed/kMNXzqJEIQg"
                title="도미노피자 직영 점장 해외 연수 프로그램 (Manager Rally)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
