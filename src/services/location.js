import { locationApi } from 'helpers';

const searchQueryLocation = async (query) => {
  const response = await locationApi.get('v1/city', {
    params: {
      name: query,
      fields: 'timezone,state_code',
      lang: 'en',
      sort: 'timezone',
      order: 'desc',
      limit: 20
    }
  });
  return response.data;
};

const locationService = { searchQueryLocation };
export default locationService;
