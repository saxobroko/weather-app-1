import React from 'react';

import { weatherService } from './services';
import { useEffectOnce } from './hooks';

import './App.css';

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
  return <div className="App">Weather App</div>;
}

export default App;
