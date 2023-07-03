export const selectTweets = store => store.tweets.tweets;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;
export const selectFollowers = state => state.tweets.followers;