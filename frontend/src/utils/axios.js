import axios from 'axios';

// Thiết lập mặc định cho axios
const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Thay bằng URL của backend của bạn
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để xử lý các yêu cầu trước khi gửi và các phản hồi
instance.interceptors.request.use(
  (config) => {
    // Bạn có thể thêm token vào đây nếu cần
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Lỗi phản hồi:', error.response);
    return Promise.reject(error);
  }
);

export default instance;
