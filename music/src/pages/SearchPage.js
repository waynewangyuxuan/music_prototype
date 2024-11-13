import React, { useState } from 'react';
import FilteredSearch from '../components/FilteredSearch';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const sampleData = [
    { name: 'Shine On You Crazy Diamond', artist: 'Pink Floyd', alias: 'PK boys' },
    { name: 'Imagine', artist: 'John Lennon', alias: 'Lennon Classic' },
    { name: 'Bohemian Rhapsody', artist: 'Queen', alias: 'Queen Hit' },
    // Add more sample items here
  ];

  return (
    <div>
      <h1>Search Music</h1>
      <FilteredSearch data={sampleData} setResults={setResults} />

      <div className="search-results">
        <h3>Results</h3>
        <ul>
          {results.map((item, index) => (
            <li key={index}>
              {item.alias || item.name} by {item.artist}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;