import axios from "axios";
import Cookies from "js-cookie";  // Import js-cookie

// Create Axios instance
const instance = axios.create({
  baseURL: 'https://localhost:7071', // Backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include token from cookie
instance.interceptors.request.use(
  (config) => {
    // Get token from cookie
    const token = Cookies.get('token');  // Assuming 'token' is the cookie name
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
