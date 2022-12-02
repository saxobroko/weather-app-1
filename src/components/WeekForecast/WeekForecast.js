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
    <section className="weather-app__week-forecast">
      <div className="weather-app__week-forecast__container">
        {data.map(({ dt, temp, weather }, i) => {
          const formattedDate = format(fromUnixTime(dt), 'EEE, d MMM');
          const date = i === 0 ? 'Tomorrow' : formattedDate;

          return (
            <div className="weather-app__week-forecast__day-info">
              <span className="weather-app__week-forecast__day-info__day">
                {date}
              </span>
              <div className="weather-app__week-forecast__day-info__icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt="weather-conditions"
                />
              </div>
              <div className="weather-app__week-forecast__day-info__temperature">
                <span>{Math.round(temp.min)}°C</span>
                <span>{Math.round(temp.max)}°C</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
