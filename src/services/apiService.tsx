import axios from "axios";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
};

export const apiService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers,
});
