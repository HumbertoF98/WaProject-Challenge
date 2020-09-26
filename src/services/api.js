import axios from "axios";
// baseURL API
const api = axios.create({
  baseURL: "https://api.github.com/",
});

export default api;
