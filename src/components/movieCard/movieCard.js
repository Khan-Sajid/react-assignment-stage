"use client";
import React from "react";
import Image from "next/image";
import styles from "./movieCard.module.css";

const MovieCard = ({
  movieData,
  rootUrlVertical,
  rootUrlHorizontal,
  isMobile,
  number,
}) => {
  console.log("number", number);
  let url = "";
  if (isMobile) {
    url = rootUrlVertical + "/" + movieData?.vertical;
  } else {
    url = rootUrlHorizontal + "/" + movieData?.horizontal;
  }
  return (
    <div className={styles.outerDiv}>
      <div className={styles.movieCard}>
        <img src={url} />
      </div>
      {number && <span className={styles.number}>{number}</span>}
    </div>
  );
};

export default MovieCard;
