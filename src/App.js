import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

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
  const [scaleType, setScaleType] = React.useState('metric');
  const [location, setLocation] = React.useState('');

  const { isLoading, error, data } = useQuery(
    ['currentForecast', scaleType, location],
    () => {
      if (location) {
        return weatherService.getByCityName(location, scaleType);
      } else {
        return weatherService.getByCurrentLocation(
          geolocation.lat,
          geolocation.lon,
          scaleType
        );
      }
    },
    { enabled: Boolean(location.length) || geolocation.lat !== 0 }
  );

  useEffectOnce(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        setGeolocation({ lat: latitude, lon: longitude });
      });
    } else {
      alert('geolocation not available?! What year is this?');
    }
  });

  const changeLocation = (newLocation) => {
    console.log(newLocation);
    setGeolocation({ lat: 0, lon: 0 });
    setLocation(newLocation);
  };

  const getCurrentLocation = () => {
    setLocation('');
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      setGeolocation({ lat: latitude, lon: longitude });
    });
  };

  if (isLoading)
    return (
      <div className="loading-message">
        Allow browser to detect your location to use this website
        <div style={{ marginTop: '2rem' }}>
          <PacmanLoader color="#E7E7EB" />
        </div>
      </div>
    );
  return (
    <main className="weather-app">
      <Sidebar
        temperature={data.main.temp}
        location={`${data.name}, ${data.sys.country}`}
        icon={data.weather[0].icon}
        condition={data.weather[0].main}
        scaleType={scaleType}
        changeLocation={changeLocation}
        getCurrentLocation={getCurrentLocation}
      />
      <section className="weather-app__information">
        <ScaleSelector scaleType={scaleType} setScaleType={setScaleType} />
        <WeekForecast geolocation={geolocation} scaleType={scaleType} />
        <TodayHighlights
          scaleType={scaleType}
          wind={data.wind}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
          visibility={data.visibility}
        />
      </section>
    </main>
  );
}

export default App;
