import React from 'react';
import './Search.scss';
import { GoSearch } from 'react-icons/go';
import { useQuery } from '@tanstack/react-query';
import { locationService } from 'services';

export const Search = ({ isOpen, setIsOpen, changeLocation }) => {
  const [query, setQuery] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const { data: locations } = useQuery(
    ['locationQuery', query],
    () => locationService.searchQueryLocation(query),
    { enabled: query.length > 0 }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
    changeLocation(inputValue);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    setQuery(e.target.value);
  };

  const handleOnClick = (e) => {
    changeLocation(e.target.innerText);
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
            value={inputValue}
          />
        </div>
        <button type="submit" className="weather-app__sidebar__search-bar__btn">
          Search
        </button>
      </form>
      <ul className="weather-app__sidebar__search-bar__results">
        {locations?.map(({ AdministrativeArea: { LocalizedName } }) => (
          <li
            className="weather-app__sidebar__search-bar__results-item"
            onClick={handleOnClick}
          >
            {LocalizedName}
          </li>
        ))}
      </ul>
    </section>
  );
};
