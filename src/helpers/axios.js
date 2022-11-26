import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const weatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`
});
