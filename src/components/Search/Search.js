import React from 'react';
import './Search.scss';
import { GoSearch } from 'react-icons/go';
import { useQuery } from '@tanstack/react-query';
import { locationService } from 'services';
import Skeleton from 'react-loading-skeleton';

export const Search = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = React.useState('');

  console.log(query);

  const {
    isLoading,
    error,
    data: locations
  } = useQuery(['locationQuery', query], () => {
    if (query) return locationService.searchQueryLocation(query);
  });

  console.log(locations);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section
      className="weather-app__sidebar__search-bar"
      style={{ transform: isOpen && 'translate(0px)' }}
    >
      <div className="weather-app__sidebar__search-bar__top">
        <div
          className="weather-app__sidebar__search-bar__close-btn"
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
      <form
        className="weather-app__sidebar__search-bar__middle"
        onSubmit={handleSubmit}
      >
        <div className="weather-app__sidebar__search-bar__input">
          <label htmlFor="location">
            <GoSearch />
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="search location"
            onChange={handleOnChange}
            value={query}
          />
        </div>
        <button type="submit" className="weather-app__sidebar__search-bar__btn">
          Search
        </button>
      </form>
      <ul className="weather-app__sidebar__search-bar__results">
        {locations?.map(({ AdministrativeArea: { LocalizedName } }) => (
          <li className="weather-app__sidebar__search-bar__results-item">
            {LocalizedName || <Skeleton count={1} />}
          </li>
        ))}
      </ul>
    </section>
  );
};
