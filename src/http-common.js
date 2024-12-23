import axios from "axios";
  
export default axios.create({
  baseURL: "http://backend.default.svc.cluster.local:9090/api",
  headers: {
    "Content-type": "application/json"
  }
});
