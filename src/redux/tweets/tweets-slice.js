import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./tweets-operations";

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
    }
})

export default tweetsSlice.reducer;