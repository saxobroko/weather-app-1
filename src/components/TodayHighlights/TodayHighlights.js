import React from 'react';
import './TodayHighlights.scss';

export const TodayHighlights = () => {
  return (
    <section className="weather-app__todays-highlights">
      <div className="weather-app__todays-highlights__container">
        <h2>Today's Highlights</h2>
        <div className="weather-app__todays-highlights__wind-status"></div>
        <div className="weather-app__todays-highlights__humidity"></div>
        <div className="weather-app__todays-highlights__visibility"></div>
        <div className="weather-app__todays-highlights__air-pressure"></div>
      </div>
    </section>
  );
};
