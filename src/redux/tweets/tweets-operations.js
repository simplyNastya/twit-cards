import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTweets } from '../../services/API/fetchTweets';

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
