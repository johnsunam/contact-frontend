import axios from 'axios';
import { header } from '../utils';

const api = 'http://localhost:3002';

export const loginApi = (data) => {
  return axios.post(`${api}/login`, data);
}

export const userApi = (userId) => {
  return axios.get(`${api}/user/${userId}`, header());
}