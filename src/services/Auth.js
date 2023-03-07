import axios from "axios";

const url = "http://localhost:4000"

// LOGIN AUTH
export function signIn(body) {
  const response = axios.post(`${url}/sign-in`, body)
  .catch((error) => {
    return error.response;
  });
  return response;
}

// REGISTER AUTH
export function signUp(body) {
    console.log(url)
//   const response = axios.post(`${url}/sign-up`, body);
//   return response;
}
