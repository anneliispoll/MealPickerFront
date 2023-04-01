import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/auth',
});

export const authenticate = (email, password) => {
  return api.post('/authenticate', { email, password });
};

export const register = (firstname, lastname, email, password) => {
    return api.post('/register', { firstname, lastname, email, password });
  };

  export const random = (seasonName, mealTimeName) => {
    return api.get('/random', { 
      params: { seasonName, mealTimeName } })
  };