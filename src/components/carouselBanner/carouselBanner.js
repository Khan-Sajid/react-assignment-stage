"use client";
import React from "react";
import Slider from "react-slick";
import useScreenSize from "@/customHooks/useScreenSize";
import styles from "./carouselBanner.module.css";

const CarouselBanner = (props) => {
  const { width } = useScreenSize();
  const { data } = props;
  const carouselData = data?.data;
  console.log({ carouselData });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.carouselSection}>
      <link
        rel='stylesheet'
        type='text/css'
        charset='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <div className={styles.slider}>
        <Slider {...settings}>
          {carouselData?.carousel?.map((carouselItem) => {
            let url = "";
            if (width > 768) {
              url = carouselData?.rootUrl + "/" + carouselItem?.ratio3;
            } else {
              url = carouselData?.rootUrl + "/" + carouselItem?.ratio1;
            }
            return <img src={url}></img>;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselBanner;
