import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_DEV_URL
      : "",
  // add content type application/json in case needed
  withCredentials: true, // Include cookies for cross-origin requests
});

export { axiosInstance };
