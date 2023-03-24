import axios from "axios";

export const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authorization = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// LOGIN AUTH
export function signIn(body) {
  return axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);
}

// REGISTER AUTH
export function signUp(body) {
  const response = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
  return response;
}

export const getUserByToken = (token) =>
  apiRequests.get(`/users/current`, authorization(token));

export const getUsersByUsername = (username, token) =>
  apiRequests.get(`/users?username=${username}`, authorization(token));

export const getPostsByUserId = (userId, token) =>
  apiRequests.get(`/users/${userId}/publication`, authorization(token));

export const getAllPosts = (token) =>
  apiRequests.get(`/publication`, authorization(token));

export const getCommentsByPostId = (postId, token) =>
  apiRequests.get(`/publication/${postId}/comments`, authorization(token));

export const setPost = (body, token) =>
  apiRequests.post(`/publication`, body, authorization(token));

export const setPostComment = ({ comment, postId }, token) =>
  apiRequests.post(
    `/publication/${postId}/comments`,
    { comment },
    authorization(token)
  );

export const deletePost = (id, token) => {
  return apiRequests.delete(`/publication/${id}`, authorization(token));
};

export const updatePost = (id, body, token) => {
  return apiRequests.put(`/publication/${id}`, body, authorization(token));
};

//GET HASHTAGS

export const getTrendings = () => {
  return apiRequests.get(`/trending`);
};

export const getUsersLikePost = (id, limit, token) => {
  return apiRequests.get(
    `/publication/${id}/likes?limit=${limit}`,
    authorization(token)
  );
};

export const sendLikePost = (id, token) => {
  return apiRequests.post(`/publication/${id}/likes`, {}, authorization(token));
};

export const deleteLikePost = (id, token) => {
  return apiRequests.delete(`/publication/${id}/likes`, authorization(token));
};
