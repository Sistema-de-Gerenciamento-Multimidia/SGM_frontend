import axios from 'axios';

const getToken = () => {
  const TOKEN_KEY = 'token';
  return sessionStorage.getItem(TOKEN_KEY);
};

const api = axios.create({
  baseURL: 'https://sgm-backend-test.onrender.com/api/v1',
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { api }; // Exportação nomeada
