import axios from 'axios';

export const parserAPI = axios.create({
  baseURL: 'http://localhost:8000',
});

export const backendAPI = axios.create({
  baseURL: 'http://localhost:8001',
});
