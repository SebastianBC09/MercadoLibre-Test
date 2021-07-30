import React from 'react';
import Icon from '../assets/static/icons/ic_Search.png';
import '../assets/styles/SearchInput.scss';

const SearchInput = () => (
  <form method="GET" action="/test" id="search_input">
    <input
      id="search"
      type="text"
      name="search"
      placeholder="Nunca dejes de buscar"
      className="input"
    />
    <button type="submit" className="submit-btn">
      <img src={Icon} alt="Search Icon" />
    </button>
  </form>
);

export default SearchInput;