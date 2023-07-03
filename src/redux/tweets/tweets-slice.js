import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, updateFollowers } from "./tweets-operations";

const initialState = {
    tweets: [],
    isLoading: false,
    error: null, 
    followers: 0,
}

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchTweets.pending, state => {
            state.isLoading = true
            state.error = null
        })
        .addCase(fetchTweets.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.tweets = payload
        })
        .addCase(fetchTweets.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        })
        .addCase(updateFollowers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(updateFollowers.fulfilled, (state, { payload }) => {
                const { id, followers } = payload;
                // state.followers = followers
                state.tweets[id-1].followers = followers + 1
                
            // state.tweets = state.tweets.map(tweet => (tweet.id === id
            //     ? { ...tweet, followers: state.followers }
            //     : tweet));
                
            // const { id, followers } = payload;
//             const tweetIndex = state.tweets.findIndex(tweet => tweet.id === id);
//             if (tweetIndex !== -1) {
//                 state.tweets[tweetIndex].followers = followers;
//    }
    })
    }
})


export default tweetsSlice.reducer;