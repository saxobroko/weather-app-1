import { weatherApi } from 'helpers';
const apiKey = process.env.REACT_APP_API_KEY;

const getByCurrentLocation = async (lat, lon, units) => {
  const response = await weatherApi.get(
    `weather?appid=${apiKey}&lat=${lat}&lon=${lon}&units=${units}`
  );
  return response.data;
};

const getFiveDaysWeather = async (lat, lon, units) => {
  const response = await weatherApi.get(
    `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=${units}&appid=${apiKey}`
  );
  return response.data;
};

const weatherService = { getByCurrentLocation, getFiveDaysWeather };

export default weatherService;
