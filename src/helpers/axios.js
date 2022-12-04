import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`
});

export const locationApi = axios.create({
  baseURL: 'http://dataservice.accuweather.com/locations/v1/cities/'
});
