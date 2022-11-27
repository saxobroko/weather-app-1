import React from 'react';

import { weatherService } from 'services';
import { useEffectOnce } from 'hooks';
import {
  Sidebar,
  ScaleSelector,
  WeekForecast,
  TodayHighlights
} from 'components';

import { useQuery } from '@tanstack/react-query';

function App() {
  const [geolocation, setGeolocation] = React.useState({ lat: 0, lon: 0 });
  const { isLoading, error, data } = useQuery(
    ['currentForecast'],
    () => weatherService.getByCurrentLocation(geolocation.lat, geolocation.lon),
    { enabled: !geolocation.lat && !geolocation.lon }
  );

  useEffectOnce(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        setGeolocation({ lat: latitude, lon: longitude });
      });
    }
  });

  if (isLoading) return <div>loading</div>;
  return (
    <main className="weather-app">
      <Sidebar />
      <section className="weather-app__information">
        <ScaleSelector  />
        <WeekForecast />
        <TodayHighlights />
      </section>
    </main>
  );
}

export default App;
