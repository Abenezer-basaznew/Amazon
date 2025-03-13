import React from "react";
import styles from "./CarouselEffect.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./data";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
      >
        {
          img.map(imageItemLink => {
          return <img src={imageItemLink} />;
        })
        }
      </Carousel>
      <div className={styles.hero__img} />
    </div>
  );
}

export default CarouselEffect;
