import TweetsCard from "../TweetsCard/TweetsCard";
import styles from "./tweetsList.module.css";

const TweetsList = ({ tweets }) => {
  const elements = tweets.map(({ id, avatar, followers, tweets, user }) => {
    const formattedFollowers = followers.toLocaleString();
    return (
      <TweetsCard
        key={id}
        avatar={avatar}
        followers={formattedFollowers}
        id={id}
        tweets={tweets}
        user={user}
      />
    );
  });

  return <ul className={styles.list}>{elements}</ul>;
};

export default TweetsList;
