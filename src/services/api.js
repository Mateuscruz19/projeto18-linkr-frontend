import axios from "axios";

export const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authorization = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// LOGIN AUTH
export function signIn(body) {
  const response = axios
    .post(`${process.env.REACT_APP_API_URL}/sign-in`, body)
    .catch((error) => {
      return error.response;
    });
  return response;
}

// REGISTER AUTH
export function signUp(body) {
  console.log('dsadsa')
  const response = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
  return response;
}

export const getUserByToken = (token) =>
  apiRequests.get(`/users/current`, authorization(token));

export const getUsersByUsername = (username, token) =>
  apiRequests.get(`/users?username=${username}`, authorization(token));

export const deletePost = (id, token) => {
  return apiRequests.delete(`/publication/${id}`, authorization(token));
};

export const updatePost = (id, body, token) => {
  return apiRequests.put(`/publication/${id}`, body, authorization(token));
};

//GET HASHTAGS

export const getTrendings = () => {
  return apiRequests.get(`/trending`);
}