import { weatherApi } from 'helpers';
const apiKey = process.env.REACT_APP_API_KEY;

const getByCurrentLocation = async (lat, lon) => {
  const response = await weatherApi.get(
    `weather?appid=${apiKey}&lat=${lat}&lon=${lon}`
  );
  return response.data;
};

const weatherService = { getByCurrentLocation };

export default weatherService;
