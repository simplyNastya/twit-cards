import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, updateFollowers } from "./tweets-operations";

const initialState = {
    tweets: [],
    isLoading: false,
    error: null
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
            .addCase(updateFollowers.fulfilled, (state, { payload }) => {
                console.log(payload)
                console.log(state.tweets)
                state.tweets = state.tweets.map((tweet) =>
          tweet.id === payload.id ? { ...tweet, followers: payload.followers + 1 } : tweet
        );
        console.log('Updated followers:', payload.followers); // Check the updated followers count
    })
    }
})

export default tweetsSlice.reducer;