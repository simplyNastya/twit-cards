import Button from "../Button/Button";
import logo from "./logo.png";
import userPhoto from "./hansel.png";

import styles from "./tweetsCard.module.css";

const TweetsCard = ({ tweets }) => {
  const elements = tweets.map(({ avatar, followers, id, tweets, user }) => {
    const formattedFollowers = followers.toLocaleString();
    return (
      <li key={id} className={styles.item}>
        <div className={styles.userTweetContainer}>
          <img src={logo} alt="Logo" className={styles.logo}></img>
          <div className={styles.tweetBcgImage}>
            <div className={styles.userTweetPhotoWrapper}>
              <img
                src={avatar}
                alt="Profile picture"
                className={styles.userTweetPhoto}
              ></img>
            </div>
            <div className={styles.userTweetTextWrapper}>
              <p className={styles.userTweetText}> {tweets} tweets</p>
              <p className={styles.userTweetText}>
                {formattedFollowers} Followers
              </p>
            </div>
            <Button />
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Users Profile List</h1>
        <ul className={styles.list}>{elements}</ul>
      </div>
    </div>
  );
};

export default TweetsCard;
