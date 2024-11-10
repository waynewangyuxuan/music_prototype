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
      { name: 'Shine On You Crazy Diamond', itemType: 'song' },
      { name: 'Comfortably Numb', itemType: 'song' },
      { name: 'Wish You Were Here', itemType: 'song' },
      { name: 'Time', itemType: 'song' },
      { name: 'Money', itemType: 'song' },
      { name: 'Another Brick in the Wall, Part 2', itemType: 'song' },
      { name: 'Hey You', itemType: 'song' },
      { name: 'Us and Them', itemType: 'song' }
    ]
  },
  {
    name: 'browse',
    displayName: 'Browse',
    visible: true,
    items: [
      { name: 'The Beatles', itemType: 'artist' },
      { name: 'Led Zeppelin', itemType: 'artist' },
      { name: 'The Rolling Stones', itemType: 'artist' },
      { name: 'Pink Floyd', itemType: 'artist' },
      { name: 'Queen', itemType: 'artist' },
      { name: 'The Who', itemType: 'artist' },
      { name: 'The Kinks', itemType: 'artist' },
      { name: 'Genesis', itemType: 'artist' }
    ]
  },
  {
    name: 'radio',
    displayName: 'Radio',
    visible: true,
    items: [
      { name: 'British Invasion Essentials', itemType: 'playlist' },
      { name: 'Psychedelic Rock Journey', itemType: 'playlist' },
      { name: 'Legends of Classic Rock', itemType: 'playlist' },
      { name: 'The Vinyl Experience', itemType: 'playlist' },
      { name: 'British Rock Unplugged', itemType: 'playlist' },
      { name: 'Progressive Rock Essentials', itemType: 'playlist' },
      { name: 'Underground Classics', itemType: 'playlist' },
      { name: 'Retro Road Trip', itemType: 'playlist' }
    ]
  },
  {
    name: 'todaysHit',
    displayName: "Today's Hit",
    visible: true,
    items: [
      { name: 'Blinding Lights - The Weeknd', itemType: 'song' },
      { name: 'Levitating - Dua Lipa', itemType: 'song' },
      { name: 'Peaches - Justin Bieber', itemType: 'song' },
      { name: 'Stay - The Kid LAROI, Justin Bieber', itemType: 'song' },
      { name: 'Montero (Call Me By Your Name) - Lil Nas X', itemType: 'song' },
      { name: 'Save Your Tears - The Weeknd', itemType: 'song' },
      { name: 'Good 4 U - Olivia Rodrigo', itemType: 'song' },
      { name: 'Deja Vu - Olivia Rodrigo', itemType: 'song' }
    ]
  }
];

const Home = () => {
  const [sections, setSections] = useState(initialSections);
  const [itemTags, setItemTags] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const addTag = (item, tag) => {
    if (!tag) return;
    setItemTags(prevTags => ({
      ...prevTags,
      [item]: prevTags[item] ? [...prevTags[item], tag] : [tag]
    }));
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
        section.name === sectionName ? { ...section, visible: !section.visible } : section
      )
    );
  };

  const moveSection = (index, direction) => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    // Check if target index is within bounds
    if (targetIndex < 0 || targetIndex >= sections.length) return;

    // Swap sections
    const [movedSection] = newSections.splice(index, 1);
    newSections.splice(targetIndex, 0, movedSection);

    setSections(newSections);
  };

  return (
    <div>
      <h1>Home</h1>

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
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      {item.name}
                    </span>
                    <div className="tags">
                      {itemTags[item.name]?.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Add a tag"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          addTag(item, e.target.value);
                          e.target.value = ''; // Clear input after adding tag
                        }
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <ItemDetailsModal item={selectedItem} onClose={closeModal} />
    </div>
  );
};

export default Home;