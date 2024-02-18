import React from 'react';

function SearchResults({ results }) {
  return (
    <div className='result-container'>
      <h2 className='result-title'>Search Results</h2>
      <ul className='result-snippet'>
        {results.map((result, index) => (
          <li className='result-item' key={index}>
            <a href={result.url} className='result-url'>{result.name}</a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;