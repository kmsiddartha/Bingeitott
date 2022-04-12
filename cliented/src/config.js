import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://bingeitapp.herokuapp.com/api',
});
