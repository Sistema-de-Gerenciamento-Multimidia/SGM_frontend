import axios from 'axios';

const getToken = () => {
  const TOKEN_KEY = 'token';
  return sessionStorage.getItem(TOKEN_KEY);
};

const api = axios.create({
  baseURL: 'http://54.209.14.48/api/v1', // Nova URL
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
