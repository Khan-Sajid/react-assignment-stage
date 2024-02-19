"use client";
import React from "react";
import Image from "next/image";
import styles from "./movieCard.module.css";

const MovieCard = ({
  movieData,
  rootUrlVertical,
  rootUrlHorizontal,
  isMobile,
}) => {
  console.log({ isMobile });
  let url = "";
  if (isMobile) {
    url = rootUrlVertical + "/" + movieData?.vertical;
  } else {
    url = rootUrlHorizontal + "/" + movieData?.horizontal;
  }
  return (
    <div className={styles.movieCard}>
      <img src={url} />
      {/* <Image
        src={url}
        height={isMobile ? 300 : 200}
        width={isMobile ? 150 : 300}
      /> */}
    </div>
  );
};

export default MovieCard;
