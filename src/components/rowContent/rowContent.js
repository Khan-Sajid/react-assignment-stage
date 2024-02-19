"use client";
import React from "react";
import MovieCard from "../movieCard/movieCard";
import useScreenSize from "@/customHooks/useScreenSize";
import styles from "./rowContent.module.css";

const RowContent = (props) => {
  const { width } = useScreenSize();
  const { data } = props?.data;
  const { rootUrlHorizontal, rootUrlVertical, rowData } = data;
  return (
    <section className={styles.rowSection}>
      <p>{props?.sectionHeading}</p>
      <div className={styles.scrollSection}>
        {rowData?.map((movieData) => {
          return (
            <MovieCard
              key={movieData?._id}
              movieData={movieData}
              rootUrlHorizontal={rootUrlHorizontal}
              rootUrlVertical={rootUrlVertical}
              isMobile={width < 768}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RowContent;
