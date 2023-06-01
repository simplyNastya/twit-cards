import React, { useState } from "react";
import styles from "./button.module.css";

const Button = ({ id, followers }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const fullClassName = isActive
    ? `${styles.btn} ${styles.active}`
    : `${styles.btn}`;

  return (
    <button
      onClick={(e) => {
        handleClick();
      }}
      className={fullClassName}
    >
      {isActive ? "Following" : "Follow"}
    </button>
  );
};

export default Button;
