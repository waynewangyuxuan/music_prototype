import React, { useState } from 'react';
import ItemDetailsModal from '../components/ItemDetailsModal';
import '../styles/components.css';

const LibraryPage = ({ libraryItems, updateAlias }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="library-page">
      <h1>Your Library</h1>

      <div className="library-section">
        <h2>Favorite Items</h2>
        <ul>
          {libraryItems.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item.alias || item.name} by {item.artist || "Unknown Artist"}
            </li>
          ))}
        </ul>
      </div>

      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={closeModal}
          onSaveAlias={(itemName, newAlias) => updateAlias(itemName, newAlias)}
        />
      )}
    </div>
  );
};

export default LibraryPage;