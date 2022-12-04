import { weatherApi } from 'helpers';
const apiKey = process.env.REACT_APP_API_KEY;

const getByCurrentLocation = async (lat, lon, units) => {
  const response = await weatherApi.get(
    `weather?appid=${apiKey}&lat=${lat}&lon=${lon}&units=${units}`
  );
  return response.data;
};

const getByCityName = async (name, units) => {
  const response = await weatherApi.get(`weather`, {
    params: { appid: apiKey, q: name, units: units }
  });
  return response.data;
};

const getFiveDaysWeather = async (lat, lon, units) => {
  const sevenDaysForecast = await weatherApi.get(`onecall`, {
    params: {
      exclude: 'current,hourly,minutely,alerts',
      units: units,
      appid: apiKey,
      lat: lat,
      lon: lon
    }
  });
  const fiveDaysForecast = sevenDaysForecast.data.daily.slice(1, 6);
  return fiveDaysForecast;
};

const weatherService = {
  getByCurrentLocation,
  getFiveDaysWeather,
  getByCityName
};

export default weatherService;
