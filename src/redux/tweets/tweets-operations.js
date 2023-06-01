import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTweets, updateUserFollowers } from '../../services/API/fetchTweets';

export const fetchTweets = createAsyncThunk(
    'tweets/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getAllTweets()
            return data
        } catch ({ message }) {
            return rejectWithValue(message)
        }
    }
)

export const updateFollowers = createAsyncThunk(
    'followers/update',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await updateUserFollowers(id)
            return data
        } catch ({ message }) {
            return rejectWithValue(message)
        }
    }
)