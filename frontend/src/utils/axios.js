import axios from "axios";

// Set the base URL for all axios requests
axios.defaults.baseURL = "http://localhost:5000";

// axios error handling
axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Axios - Something went wrong"
    )
);

export default axios;
