import axios from "axios";

export default axios.create({
  baseURL: process.env.BACKEND_URL/api,
  headers: {
    "Content-type": "application/json"
  }
});
