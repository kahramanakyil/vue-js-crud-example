import axios from "axios";
  
export default axios.create({
  baseURL: process.env.API_URL || 'http://213.250.129.246:8080',
  headers: {
    "Content-type": "application/json"
  }
});
