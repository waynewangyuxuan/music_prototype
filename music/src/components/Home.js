import React, { useState } from 'react';
import '../styles/components.css';
import PlaybackControls from './PlaybackControls';
import ItemDetailsModal from './ItemDetailsModal';

const initialSections = [
  {
    name: 'forYou',
    displayName: 'For You',
    visible: true,
    items: [
      { name: 'Shine On You Crazy Diamond', itemType: 'song', alias: '' },
      { name: 'Comfortably Numb', itemType: 'song', alias: '' },
      { name: 'Wish You Were Here', itemType: 'song', alias: '' },
      { name: 'Time', itemType: 'song', alias: '' },
      { name: 'Money', itemType: 'song', alias: '' },
      { name: 'Another Brick in the Wall, Part 2', itemType: 'song', alias: '' },
      { name: 'Hey You', itemType: 'song', alias: '' },
      { name: 'Us and Them', itemType: 'song', alias: '' }
    ]
  },
  {
    name: 'browse',
    displayName: 'Browse',
    visible: true,
    items: [
      { name: 'The Beatles', itemType: 'artist', alias: '' },
      { name: 'Led Zeppelin', itemType: 'artist', alias: '' },
      { name: 'The Rolling Stones', itemType: 'artist', alias: '' },
      { name: 'Pink Floyd', itemType: 'artist', alias: '' },
      { name: 'Queen', itemType: 'artist', alias: '' },
      { name: 'The Who', itemType: 'artist', alias: '' },
      { name: 'The Kinks', itemType: 'artist', alias: '' },
      { name: 'Genesis', itemType: 'artist', alias: '' }
    ]
  },
  {
    name: 'radio',
    displayName: 'Radio',
    visible: true,
    items: [
      { name: 'British Invasion Essentials', itemType: 'playlist', alias: '' },
      { name: 'Psychedelic Rock Journey', itemType: 'playlist', alias: '' },
      { name: 'Legends of Classic Rock', itemType: 'playlist', alias: '' },
      { name: 'The Vinyl Experience', itemType: 'playlist', alias: '' },
      { name: 'British Rock Unplugged', itemType: 'playlist', alias: '' },
      { name: 'Progressive Rock Essentials', itemType: 'playlist', alias: '' },
      { name: 'Underground Classics', itemType: 'playlist', alias: '' },
      { name: 'Retro Road Trip', itemType: 'playlist', alias: '' }
    ]
  },
  {
    name: 'todaysHit',
    displayName: "Today's Hit",
    visible: true,
    items: [
      { name: 'Blinding Lights - The Weeknd', itemType: 'song', alias: '' },
      { name: 'Levitating - Dua Lipa', itemType: 'song', alias: '' },
      { name: 'Peaches - Justin Bieber', itemType: 'song', alias: '' },
      { name: 'Stay - The Kid LAROI, Justin Bieber', itemType: 'song', alias: '' },
      { name: 'Montero (Call Me By Your Name) - Lil Nas X', itemType: 'song', alias: '' },
      { name: 'Save Your Tears - The Weeknd', itemType: 'song', alias: '' },
      { name: 'Good 4 U - Olivia Rodrigo', itemType: 'song', alias: '' },
      { name: 'Deja Vu - Olivia Rodrigo', itemType: 'song', alias: '' }
    ]
  }
];

const Home = () => {
  const [sections, setSections] = useState(initialSections);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveAlias = (itemName, newAlias) => {
    setSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        items: section.items.map(item =>
          item.name === itemName ? { ...item, alias: newAlias } : item
        )
      }))
    );
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const toggleVisibility = (sectionName) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.name === sectionName
          ? { ...section, visible: !section.visible }
          : section
      )
    );
  };

  const moveSection = (index, direction) => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= sections.length) return;

    const [movedSection] = newSections.splice(index, 1);
    newSections.splice(targetIndex, 0, movedSection);

    setSections(newSections);
  };

  return (
    <div>
      <h1>You Fold sections you don't like, and you can make the sections you like the most up top.</h1>
      <h1>This is a demo for idea if-----sections that you can drag around, shrink and shrunk, and add new sections of your choice.</h1>
      <PlaybackControls items={sections[0].items} />

      <div className="sections">
        {sections.map((section, index) => (
          <div key={section.name} className="section">
            <h2>
              {section.displayName}
              <button onClick={() => toggleVisibility(section.name)} style={{ marginLeft: '10px' }}>
                {section.visible ? 'Fold' : 'Unfold'}
              </button>
              <button onClick={() => moveSection(index, 'up')} disabled={index === 0}>
                ↑
              </button>
              <button onClick={() => moveSection(index, 'down')} disabled={index === sections.length - 1}>
                ↓
              </button>
            </h2>
            {section.visible && (
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span
                      onClick={() => handleItemClick(item)}
                      style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                      {item.alias || item.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={closeModal}
          onSaveAlias={handleSaveAlias}
        />
      )}
    </div>
  );
};

export default Home;