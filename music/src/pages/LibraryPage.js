import React from 'react';
import '../styles/components.css';

const LibraryPage = () => {
  // Sample data for the library
  const favoriteSongs = [
    { name: 'Shine On You Crazy Diamond', artist: 'Pink Floyd' },
    { name: 'Imagine', artist: 'John Lennon' },
    { name: 'Bohemian Rhapsody', artist: 'Queen' },
  ];

  const favoriteAlbums = [
    { name: 'The Dark Side of the Moon', artist: 'Pink Floyd' },
    { name: 'Abbey Road', artist: 'The Beatles' },
    { name: 'Rumours', artist: 'Fleetwood Mac' },
  ];

  const favoriteArtists = [
    { name: 'Pink Floyd' },
    { name: 'The Beatles' },
    { name: 'Led Zeppelin' },
  ];

  const favoritePlaylists = [
    { name: 'Classic Rock Essentials' },
    { name: 'Chill Vibes' },
    { name: 'Road Trip Classics' },
  ];

  return (
    <div className="library-page">
      <h1>Your Library</h1>

      <div className="library-section">
        <h2>Favorite Songs</h2>
        <ul>
          {favoriteSongs.map((song, index) => (
            <li key={index}>
              {song.name} by {song.artist}
            </li>
          ))}
        </ul>
      </div>

      <div className="library-section">
        <h2>Favorite Albums</h2>
        <ul>
          {favoriteAlbums.map((album, index) => (
            <li key={index}>
              {album.name} by {album.artist}
            </li>
          ))}
        </ul>
      </div>

      <div className="library-section">
        <h2>Favorite Artists</h2>
        <ul>
          {favoriteArtists.map((artist, index) => (
            <li key={index}>{artist.name}</li>
          ))}
        </ul>
      </div>

      <div className="library-section">
        <h2>Favorite Playlists</h2>
        <ul>
          {favoritePlaylists.map((playlist, index) => (
            <li key={index}>{playlist.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryPage;