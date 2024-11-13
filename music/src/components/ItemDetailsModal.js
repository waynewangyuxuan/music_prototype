import React, { useState } from 'react';
import '../styles/components.css';
import albumCover from './resources/album_cover.png';

const ItemDetailsModal = ({ item, onClose, onSaveAlias }) => {
  const [alias, setAlias] = useState(item.alias || '');
  const [showMessage, setShowMessage] = useState(false);

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
        <h2>{item.alias || item.name}</h2>
        
        {/* Display placeholder image for each item */}
        <img 
          src={albumCover} 
          alt={`${item.itemType} placeholder`} 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
        />

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
      </div>
    </div>
  );
};

export default ItemDetailsModal;