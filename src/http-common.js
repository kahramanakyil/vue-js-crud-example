import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

export default axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-type": "application/json"
  }
});
