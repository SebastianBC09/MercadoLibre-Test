import React from 'react';
import Icon from '../assets/static/icons/ic_Search.png';
import '../assets/styles/SearchInput.scss';

const SearchInput = () => (
  <form method="GET" action="/">
    <label htmlFor="search" />
    <input
      id="search"
      type="text"
      name="search"
      placeholder="Nunca dejes de buscar"
      className="search"
    />
    <button type="submit" className="submit-btn">
      <img src={Icon} alt="Search Icon" />
    </button>
  </form>
);

export default SearchInput;