import axios from "axios";
  
export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});
