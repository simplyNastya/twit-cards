import { useState } from "react";
import styles from "./button.module.css";

const Button = ({ id }) => {
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem(`isActive_${id}`) || "false")
  );

  const handleClick = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    localStorage.setItem(`isActive_${id}`, newActiveState);
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
