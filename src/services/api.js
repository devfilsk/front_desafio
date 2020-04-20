import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/',
    headers: {
        post: {
          'Content-Type': 'application/json'
        }
      }
});

export default api;