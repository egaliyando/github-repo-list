import React from 'react';

function SearchBar({ onSearch, value, onPress }) {
  return (
    <div className="border p-3 rounded-md w-full">
      <input
        placeholder="Find github account.."
        onKeyDown={onPress}
        value={value}
        onChange={(e) => onSearch(e)}
        className="bg-gray-culture rounded-lg text-sm border-none focus:outline-none bg-none w-full"
      />
    </div>
  );
}

export default SearchBar;
