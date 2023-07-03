import TweetsCard from "../TweetsCard/TweetsCard";
import styles from "./tweetsList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { updateFollowers } from "../../redux/tweets/tweets-operations";

const TweetsList = ({ tweets }) => {
  const dispatch = useDispatch();

  // const updateFollowersState = (isActive) => {
  //   const updatedFollowers = isActive ? followers - 1 : followers + 1;
  //   dispatch(updateFollowers(id, updatedFollowers));
  //   console.log(followers);
  // };

  const elements = tweets.map(({ id, avatar, followers, tweets, user }) => {
    // const formattedFollowers = followers.toLocaleString();

    const updateFollowersState = (isActive) => {
      const updatedFollowers = isActive ? followers - 1 : followers + 1;
      dispatch(updateFollowers(id, updatedFollowers));
      console.log(followers);
    };

    return (
      <TweetsCard
        key={id}
        avatar={avatar}
        followers={followers}
        id={id}
        tweets={tweets}
        user={user}
        updateFollowersState={updateFollowersState}
      />
    );
  });

  return <ul className={styles.list}>{elements}</ul>;
};

export default TweetsList;
