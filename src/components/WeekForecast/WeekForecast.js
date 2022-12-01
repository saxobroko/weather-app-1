import React from 'react';
import { useQuery } from '@tanstack/react-query';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';

import { weatherService } from 'services';

import './WeekForecast.scss';

export const WeekForecast = ({ geolocation }) => {
  const { isLoading, error, data } = useQuery(['fiveDaysForecast'], () =>
    weatherService.getFiveDaysWeather(
      geolocation.lat,
      geolocation.lon,
      'metric'
    )
  );

  if (isLoading) return <div>loading</div>;
  return (
    <div>
      {data.map((props, index) => {
        const date =
          index === 0
            ? 'Tomorrow'
            : format(fromUnixTime(props.dt), 'EEE, d MMM');

        return <div>{date}</div>;
      })}
    </div>
  );
};
