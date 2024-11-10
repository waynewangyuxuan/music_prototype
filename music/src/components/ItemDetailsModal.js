import React from 'react';
import '../styles/components.css';

const ItemDetailsModal = ({ item, onClose }) => {
  if (!item) return null;

  const { name, itemType } = item;

  // Mock data for different item types
  const detailsByType = {
    song: {
      lyrics: "These are the sample lyrics of the song...",
      album: "Sample Album",
      similarSongs: ["Similar Song 1", "Similar Song 2", "Similar Song 3"]
    },
    artist: {
      bio: "This is a sample bio for the artist.",
      topSongs: ["Top Song 1", "Top Song 2", "Top Song 3"],
      albums: ["Album 1", "Album 2", "Album 3"]
    },
    playlist: {
      description: "A curated playlist for rock enthusiasts.",
      songs: ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"]
    },
    album: {
      tracklist: ["Track 1", "Track 2", "Track 3", "Track 4"],
      releaseDate: "January 1, 2020",
      artist: "Sample Artist"
    }
  };

  const details = detailsByType[itemType] || {};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{name} ({itemType})</h2>
        
        {itemType === 'song' && (
          <>
            <p><strong>Album:</strong> {details.album}</p>
            <p><strong>Lyrics:</strong> {details.lyrics}</p>
            <p><strong>Similar Songs:</strong></p>
            <ul>
              {details.similarSongs.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
          </>
        )}

        {itemType === 'artist' && (
          <>
            <p><strong>Bio:</strong> {details.bio}</p>
            <p><strong>Top Songs:</strong></p>
            <ul>
              {details.topSongs.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
            <p><strong>Albums:</strong></p>
            <ul>
              {details.albums.map((album, index) => (
                <li key={index}>{album}</li>
              ))}
            </ul>
          </>
        )}

        {itemType === 'playlist' && (
          <>
            <p><strong>Description:</strong> {details.description}</p>
            <p><strong>Songs:</strong></p>
            <ul>
              {details.songs.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
          </>
        )}

        {itemType === 'album' && (
          <>
            <p><strong>Artist:</strong> {details.artist}</p>
            <p><strong>Release Date:</strong> {details.releaseDate}</p>
            <p><strong>Tracklist:</strong></p>
            <ul>
              {details.tracklist.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetailsModal;