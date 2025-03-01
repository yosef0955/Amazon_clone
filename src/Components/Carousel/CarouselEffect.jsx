import React from "react";
import { Carousel } from "react-responsive-carousel";
import style from "./Carousel.module.css"
import { img } from "./img/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgItemLink, index) => {
          return <img src={imgItemLink} key={index}/>;
        })}
      </Carousel>
      <div className={style.hero_img}></div>
    </div> 
  );
}

export default CarouselEffect;
