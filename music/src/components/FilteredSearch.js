import React, { useState } from 'react';
import '../styles/components.css';

const sampleData = {
  songs: [
    { name: 'Shine On You Crazy Diamond', artist: 'Pink Floyd' },
    { name: 'Comfortably Numb', artist: 'Pink Floyd' },
    { name: 'Wish You Were Here', artist: 'Pink Floyd' }
    // Add more sample songs here
  ],
  artists: [
    { name: 'Pink Floyd' },
    { name: 'The Beatles' },
    { name: 'Led Zeppelin' }
    // Add more sample artists here
  ],
  albums: [
    { name: 'The Dark Side of the Moon', artist: 'Pink Floyd' },
    { name: 'Abbey Road', artist: 'The Beatles' }
    // Add more sample albums here
  ],
  playlists: [
    { name: 'Classic Rock Essentials' },
    { name: 'British Invasion' }
    // Add more sample playlists here
  ]
};

const FilteredSearch = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('songs');
  const [results, setResults] = useState(sampleData.songs); // Default to songs data

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    // Filter results based on query and selected category
    const filteredResults = sampleData[category].filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      (item.artist && item.artist.toLowerCase().includes(searchTerm))
    );

    setResults(filteredResults);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setResults(sampleData[newCategory].filter(item =>
      item.name.toLowerCase().includes(query) ||
      (item.artist && item.artist.toLowerCase().includes(query))
    ));
  };

  return (
    <div className="filtered-search">
      <input
        type="text"
        placeholder="Search for songs, artists, albums, playlists..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="category-filter">
        <button
          onClick={() => handleCategoryChange('songs')}
          className={category === 'songs' ? 'active' : ''}
        >
          Songs
        </button>
        <button
          onClick={() => handleCategoryChange('artists')}
          className={category === 'artists' ? 'active' : ''}
        >
          Artists
        </button>
        <button
          onClick={() => handleCategoryChange('albums')}
          className={category === 'albums' ? 'active' : ''}
        >
          Albums
        </button>
        <button
          onClick={() => handleCategoryChange('playlists')}
          className={category === 'playlists' ? 'active' : ''}
        >
          Playlists
        </button>
      </div>

      <div className="search-results">
        <h3>Results</h3>
        <ul>
          {results.length > 0 ? (
            results.map((item, index) => (
              <li key={index}>
                {item.name} {item.artist && <span>by {item.artist}</span>}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilteredSearch;