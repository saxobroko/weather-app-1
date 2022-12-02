import React from 'react';

import './ScaleSelector.scss';

export const ScaleSelector = ({ scaleType, setScaleType }) => {
  const activeClassName = 'weather-app__scale-selector__option--active';
  const isMetricActive = scaleType === 'metric' && activeClassName;
  const isImperialActive = scaleType === 'imperial' && activeClassName;

  return (
    <section className="weather-app__scale-selector">
      <div className="weather-app__scale-selector__container">
        <div
          className={`weather-app__scale-selector__option ${isMetricActive}`}
          onClick={() => setScaleType('metric')}
        >
          °C
        </div>
        <div
          className={`weather-app__scale-selector__option ${isImperialActive}`}
          onClick={() => {
            setScaleType('imperial');
          }}
        >
          °F
        </div>
      </div>
    </section>
  );
};
