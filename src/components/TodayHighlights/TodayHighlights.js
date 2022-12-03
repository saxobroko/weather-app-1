import React from 'react';
import './TodayHighlights.scss';
import { getDirection, convertKmToMiles } from 'helpers';

export const TodayHighlights = ({ wind, pressure, humidity, visibility }) => {
  console.log(humidity);

  return (
    <section className="weather-app__todays-highlights">
      <h2>Today's Highlights</h2>
      <div className="weather-app__todays-highlights__container">
        <div className="weather-app__todays-highlights__wind-status">
          <h3>Wind Status</h3>
          <span className="weather-app__todays-highlights__wind-status__speed">
            {Math.round(wind.speed)}
            <span>mph</span>
          </span>
          <span className="weather-app__todays-highlights__wind-status__direction">
            {getDirection(wind.deg)}
          </span>
        </div>
        <div className="weather-app__todays-highlights__humidity">
          <h3>Humidity</h3>
          <span className="weather-app__todays-highlights__humidity__percentage">
            {humidity}
            <span>%</span>
          </span>
          <div className="weather-app__todays-highlights__humidity__percentage-bar">
            <div className="weather-app__todays-highlights__humidity__percentage-bar__top-numbers">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="weather-app__todays-highlights__humidity__percentage-bar__bar">
              <div
                className="weather-app__todays-highlights__humidity__percentage-bar__bar__fill"
                style={{ width: `${humidity}%` }}
              ></div>
            </div>
            <span className="weather-app__todays-highlights__humidity__percentage-bar__percentage-symbol">
              %
            </span>
          </div>
        </div>
        <div className="weather-app__todays-highlights__visibility">
          <h3>Visibility</h3>
          <span className="weather-app__todays-highlights__visibility__amount">
            {convertKmToMiles(visibility).toFixed(1)} <span>miles</span>
          </span>
        </div>
        <div className="weather-app__todays-highlights__air-pressure">
          <h3>Air Pressure</h3>
          <span className="weather-app__todays-highlights__air-pressure__level">
            {pressure} <span>mb</span>
          </span>
        </div>
      </div>
    </section>
  );
};
