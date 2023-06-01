import Button from "../Button/Button";
import logo from "./logo.png";

import styles from "./tweetsCard.module.css";

const TweetsCard = ({ avatar, followers, id, tweets, user }) => {
  return (
    <li className={styles.item}>
      <div className={styles.userTweetContainer}>
        <img src={logo} alt="Logo" className={styles.logo}></img>
        <div id={id} className={styles.tweetBcgImage}>
          <div className={styles.userTweetPhotoWrapper}>
            <img
              src={avatar}
              alt="Profile picture"
              className={styles.userTweetPhoto}
            ></img>
          </div>
          <div className={styles.userTweetTextWrapper}>
            <p className={styles.userTweetText}> {tweets} tweets</p>
            <p className={styles.userTweetText}>{followers} Followers</p>
          </div>
          <Button id={id} followers={followers} />
        </div>
      </div>
    </li>
  );
};

export default TweetsCard;
