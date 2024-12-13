import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // add content type application/json in case needed
  withCredentials: true, // Include cookies for cross-origin requests
});



export { axiosInstance };
