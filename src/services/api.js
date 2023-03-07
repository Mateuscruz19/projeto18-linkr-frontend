import axios from "axios";

const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authorization = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const findByUsername = ({ username }, token) =>
  apiRequests.get(`/users/${username}`, authorization(token));
