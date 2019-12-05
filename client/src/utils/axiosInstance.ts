import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true
  },
  // allow request with cookies
  withCredentials: true
});

export default instance;
