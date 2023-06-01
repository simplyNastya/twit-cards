import React, { useState } from "react";
import styles from "./button.module.css";

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const fullClassName = isActive
    ? `${styles.btn} ${styles.active}`
    : `${styles.btn}`;

  return (
    <button onClick={handleClick} className={fullClassName}>
      {isActive ? "Following" : "Follow"}
    </button>
  );
};

export default Button;
