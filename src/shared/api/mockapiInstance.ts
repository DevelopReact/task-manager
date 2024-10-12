import axios from 'axios';

export const mockapiInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL
});
