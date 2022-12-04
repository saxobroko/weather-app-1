import { locationApi } from 'helpers';
const apiKey = process.env.REACT_APP_LOCATION_API_KEY;

const searchQueryLocation = async (query) => {
  const response = await locationApi.get(
    `autocomplete?apikey=${apiKey}&q=${query}`
  );
  return response.data;
};

const locationService = { searchQueryLocation };
export default locationService;
