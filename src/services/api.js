import axios from 'axios';

const url = 'http://localhost:4000';

export const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authorization = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// LOGIN AUTH
export function signIn(body) {
  const response = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body).catch((error) => {
    return error.response;
  });
  return response;
}

// REGISTER AUTH
export function signUp(body) {
  console.log(url);
  const response = axios.post(`${url}/sign-up`, body);
  return response;
}

export const getUsersByUsername = (username, token) =>
  apiRequests.get(`/users?username=${username}`, authorization(token));
