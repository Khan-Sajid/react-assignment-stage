import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh5EyD2nCZ89xpGM_AotSwwjhiX1g1ctdEvfXS_YiVA&s"
          }
          alt='stage-logo'
        />
      </div>
      <div className={styles.rightSideContent}>
        <select>
          <option value={"Haryanvi"}>Haryanvi</option>
          <option value={"Rajasthani"}>Rajasthani</option>
        </select>
        <span>
          <img src='search' alt='search' />
        </span>
      </div>
    </header>
  );
};

export default Header;
