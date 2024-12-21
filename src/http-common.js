import axios from "axios";
  
export default axios.create({
  baseURL: "http://cae-test-backend:35555/api",
  headers: {
    "Content-type": "application/json"
  }
});
