import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { RiCelsiusFill } from 'react-icons/ri';

import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <section className="weather-app__sidebar">
      <div className="weather-app__sidebar__container">
        <div className="weather-app__sidebar__top-section">
          <div className="weather-app__sidebar__search-location">
            Search for places
          </div>
          <div className="weather-app__sidebar__current-location">
            <BiCurrentLocation />
          </div>
        </div>
        <span className="weather-app__sidebar__icon">WEATHER ICON</span>
        <h2 className="weather-app__sidebar__temperature">
          15
          <RiCelsiusFill />
        </h2>
        <h3 className="weather-app__sidebar__condition">Condition</h3>

        <div className="weather-app__sidebar__date">
          <span>day </span>
          <span>date</span>
        </div>

        <span className="weather-app__sidebar__location">location</span>
      </div>
    </section>
  );
};
