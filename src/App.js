import React from 'react';
import './App.css';
import { weatherApi } from './helpers';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  React.useEffect(() => {
    const getWeather = async () => {
      const forecast = await weatherApi.get(
        `weather?appid=${apiKey}&q=asuncion`
      );
      console.log(forecast);
    };

    getWeather();
  }, []);

  return <div className="App"></div>;
}

export default App;
