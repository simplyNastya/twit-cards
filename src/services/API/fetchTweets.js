import axios from "axios";

const tweetInstance = axios.create({
  baseURL: 'https://64786788362560649a2db2fe.mockapi.io/user/user',
});

export const getAllTweets = () => tweetInstance('');

