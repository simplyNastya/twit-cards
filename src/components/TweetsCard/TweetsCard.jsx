import Button from "../Button/Button";
import logo from "./logo.png";
import bcg from "./cardBcg.png";
import photo from "./userPhoto.jpg";
import userPhoto from "./hansel.png";
import frame from "./ellips.png";

import styles from "./tweetsCard.module.css";

const TweetsCard = () => {
  return (
    <div className={styles.userTweetContainer}>
      <img src={logo} alt="Logo" className={styles.logo}></img>
      <div className={styles.tweetBcgImage}>
        <div className={styles.userTweetPhotoWrapper}>
          <img
            src={userPhoto}
            alt="User photo"
            className={styles.userTweetPhoto}
          ></img>
        </div>
        <div className={styles.userTweetTextWrapper}>
          <p className={styles.userTweetText}> 777 tweets</p>
          <p className={styles.userTweetText}>100,500 Followers</p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default TweetsCard;
