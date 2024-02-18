import React, { useState } from 'react';

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='search-container'>
      <div className='search-input'><input type="text" value={query} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder='Enter your keywords...' /></div>
      <div className='search-button'><button onClick={handleSearch}>Search</button></div>
    </div>
  );
}

export default SearchInput;