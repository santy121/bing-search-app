import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.bing.microsoft.com/v7.0/search?q=${query}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': 'c83dc1e2fd8c461781e91960b9f32d38',
        },
      });
      const data = await response.json();
      setResults(data.webPages.value);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <div className='App-header'><SearchInput onSearch={handleSearch} /></div>
      <SearchResults results={results} />
    </div>
  );
}

export default App;