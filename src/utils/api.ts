import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constants";

const api: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 30000,
});

api.interceptors.request.use(
  async (config: any) => {
    const Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MzYwNTcyOWYyYjRjNmJjYzZjZmU2In0sImlhdCI6MTczNjg2NTExMH0.PY4cginFU3pGBs4A9Gfi2Taku24tz-f7V251WBd7fMI`;
    config.headers["Authorization"] = Authorization;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
