import axios from "axios";

const API = axios.create({
  baseURL: "https://trustworthy-intuition-production-a5cd.up.railway.app/",
});

export default API;
