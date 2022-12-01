import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { weatherService } from 'services';

import './WeekForecast.scss';

export const WeekForecast = () => {
  const { isLoading, error, data } = useQuery(['fiveDaysForecast'], () =>
    weatherService.getFiveDaysWeather(
      geolocation.lat,
      geolocation.lon,
      'metric'
    )
  );

  console.log(geolocation);
  console.log(data);

  if (isLoading) return <div>loading</div>;
  return <div>WeekForecast</div>;
};
