import axios from "axios";

export const serverApi = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8000/api",
});

serverApi.interceptors.response.use(
  (res) => {
    console.log(res, "res");
    return res;
  },
  (err) => {
    console.error("SERVER API ERROR", err?.response?.data);
    throw err;
  }
);
