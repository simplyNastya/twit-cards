import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetsCard from "../TweetsCard/TweetsCard";
import { fetchTweets } from "../../redux/tweets/tweets-operations";
import {
  selectTweets,
  selectIsLoading,
  selectError,
} from "../../redux/tweets/tweets-selectors";
import styles from "./tweetsList.module.css";

const TweetsList = () => {
  const tweets = useSelector(selectTweets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <p className={styles.error}>Something went wrong. Try again later.</p>
      ) : (
        <div className={styles.wrapper}>
          <h1 style={{ padding: 20 }}>Tweets</h1>

          <div className={styles.spiner_box}>
            <h2 style={{ padding: 20 }}>Tweets</h2>
            {isLoading && (
              <p className={styles.spiner}>
                Something is loading please wait a sec.
              </p>
            )}
          </div>
          {tweets.length !== 0 && <TweetsCard tweets={tweets} />}
        </div>
      )}
    </>
  );
};

export default TweetsList;
