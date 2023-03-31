import axios from 'axios';
import { localStorage } from 'window';


const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/auth/authenticate',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default axiosInstance;