import React from 'react';
import './TodayHighlights.scss';

export const TodayHighlights = () => {
  return (
    <section className="weather-app__todays-highlights">
      <h2>Today's Highlights</h2>
      <div className="weather-app__todays-highlights__container">
        <div className="weather-app__todays-highlights__wind-status">
          <h3>Wind Status</h3>
          <span className="weather-app__todays-highlights__wind-status__speed">
            7<span>mph</span>
          </span>
          <span className="weather-app__todays-highlights__wind-status__direction">
            WSW
          </span>
        </div>
        <div className="weather-app__todays-highlights__humidity">
          <h3>Humidity</h3>
          <span className="weather-app__todays-highlights__humidity__percentage">
            84 <span>%</span>
          </span>
          <div className="weather-app__todays-highlights__humidity__percentage-bar">
            percentage bar
          </div>
        </div>
        <div className="weather-app__todays-highlights__visibility">
          <h3>Visibility</h3>
          <span className="weather-app__todays-highlights__visibility__amount">
            6,4 miles
          </span>
        </div>
        <div className="weather-app__todays-highlights__air-pressure">
          <h3>Air Pressure</h3>
          <span className="weather-app__todays-highlights__air-pressure__level">
            998 mb
          </span>
        </div>
      </div>
    </section>
  );
};
