import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BraceletItem from "./BraceletItem";
import { bracelets } from "../constants/bracelets";
import "../styles/BraceletItem.css";

const BraceletsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {bracelets.map((bracelet, index) => (
        <div key={index}>
          <BraceletItem bracelet={bracelet} context="carousel" />
        </div>
      ))}
    </Slider>
  );
};

export default BraceletsCarousel;
