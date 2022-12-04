import axios from 'axios';
import rateLimit from 'axios-rate-limit';

export const weatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`
});

const apiKey = process.env.REACT_APP_LOCATION_API_KEY;
const apiHost = process.env.REACT_APP_HOST;

export const locationApi = rateLimit(
  axios.create({
    baseURL: 'https://referential.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost
    }
  }),
  { maxRequests: 1, perMilliseconds: 2000, maxRPS: 1 }
);
