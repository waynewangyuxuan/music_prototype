import React, { useState } from 'react';
import '../styles/components.css';
import albumCover from './resources/album_cover.png';

const ItemDetailsModal = ({ item, onClose, onSaveAlias }) => {
  const [alias, setAlias] = useState(item.alias || '');
  const [showMessage, setShowMessage] = useState(false);

  // Placeholder lyrics and related songs (mock data)
  const lyrics = {
    "Shine On You Crazy Diamond": "Remember when you were young, you shone like the sun...",
    "Comfortably Numb": "Hello, is there anybody in there?",
    "Wish You Were Here": "So, so you think you can tell heaven from hell...",
    // Add more songs here as needed
  };

  const relatedSongs = [
    "Time",
    "Money",
    "Us and Them",
    "Another Brick in the Wall, Part 2",
    // Add more related songs here as needed
  ];

  const handleSaveAlias = () => {
    onSaveAlias(item.name, alias);
  };

  const handleAddToLibrary = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{alias || item.name}</h2>
        
        {/* Display album cover */}
        <img 
          src={albumCover} 
          alt={`${item.itemType} placeholder`} 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
        />

        {/* Display lyrics snippet if available */}
        <div style={{ marginBottom: '10px', color: '#E3E3E3' }}>
          <strong>Lyrics:</strong>
          <p>{lyrics[item.name] || "Lyrics not available."}</p>
        </div>

        {/* Alias Input */}
        <input 
          type="text" 
          placeholder="Set alias" 
          value={alias} 
          onChange={(e) => setAlias(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <button onClick={handleSaveAlias}>Save Alias</button>

        {/* Add to Library Button */}
        <button onClick={handleAddToLibrary} style={{ marginTop: '10px' }}>
          Add to Library
        </button>

        {/* Confirmation Message */}
        {showMessage && <p style={{ color: '#4EFEB3', marginTop: '10px' }}>Added to library!</p>}

        {/* Related songs section */}
        <div style={{ marginTop: '20px', color: '#E3E3E3' }}>
          <strong>Related Songs:</strong>
          <ul>
            {relatedSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;