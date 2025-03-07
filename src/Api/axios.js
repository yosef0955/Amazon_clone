import axios from "axios";

const axiosInstance = axios.create({
  //local instance of local host
  // baseURL: "http://localhost:5000/",

  //deployed version of amazon server on render
  baseURL: "https://amazon-api-deploy-uoio.onrender.com/",
});

export { axiosInstance };
