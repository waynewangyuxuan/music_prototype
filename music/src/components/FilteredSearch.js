import React, { useState } from 'react';

const FilteredSearch = ({ data, setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    // Filter data by matching name or alias fields
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      (item.alias && item.alias.toLowerCase().includes(searchTerm))
    );

    setResults(filteredResults);
  };

  return (
    <div className="filtered-search">
      <input
        type="text"
        placeholder="Search songs, albums, artists...or just your random thought of the today, let AI find your music for you!"
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default FilteredSearch;