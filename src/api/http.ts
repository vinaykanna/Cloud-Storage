import axios from "axios";
const { VITE_API_URL } = import.meta.env;

export const http = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  },
});
