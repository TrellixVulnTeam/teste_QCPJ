// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Slider from "react-slick";
import { useState } from "react"
import "./slider.css"
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import imagem1 from '../../assets/imagem1.jpg';
import imagem2 from '../../assets/slider2.png';
import imagem3 from '../../assets/slider3.png';

const images = [imagem1, imagem1, imagem1, imagem1]

function Slider2() {

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next)
  };


  return(
    <div className = "slider">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className = {idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img}/>
          </div>
        ))}
      </Slider>
    </div>
    
  );
}

export default Slider2;