import React from 'react';

function SearchBar({ onSearch, value }) {
  return <input value={value} onChange={(e) => onSearch(e)} className="border" />;
}

export default SearchBar;
