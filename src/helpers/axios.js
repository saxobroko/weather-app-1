import axios from 'axios';
import rateLimit from 'axios-rate-limit';

export const weatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`
});

export const locationApi = rateLimit(
  axios.create({
    baseURL: 'https://referential.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'f4e9ba908bmshca4c47221752125p113141jsnfffba6208f9e',
      'X-RapidAPI-Host': 'referential.p.rapidapi.com'
    }
  }),
  { maxRequests: 1, perMilliseconds: 2000, maxRPS: 1 }
);
