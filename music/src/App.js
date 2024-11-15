import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
import LibraryPage from './pages/LibraryPage';
import ThemeSelector from './components/ThemeSelector';
import './App.css';

function App() {
  // Shared state for library items
  const [libraryItems, setLibraryItems] = useState([
    { name: 'Shine On You Crazy Diamond', itemType: 'song', alias: '', artist: 'Pink Floyd' },
    { name: 'Imagine', itemType: 'song', alias: '', artist: 'John Lennon' },
    { name: 'Bohemian Rhapsody', itemType: 'song', alias: '', artist: 'Queen' },
  ]);

  // Function to add a new item to the library
  const addItem = (newItem) => {
    setLibraryItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to update alias for a specific item
  const updateAlias = (itemName, newAlias) => {
    setLibraryItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName || item.artist === itemName
          ? { ...item, alias: newAlias }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <ThemeSelector />
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/search">Search</Link> | 
          <Link to="/library">Library</Link> | 
          <Link to="/settings">Settings</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage libraryItems={libraryItems} addItem={addItem} />} />
          <Route path="/search" element={<SearchPage libraryItems={libraryItems} />} />
          <Route path="/library" element={<LibraryPage libraryItems={libraryItems} updateAlias={updateAlias} />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        <p className="intro-text">
          We are an authentic music platform that encourages users to DIY their interfaces.
          You have come to the right place if you’re looking for a more personalized design in your music app!
        </p>
      </div>
    </Router>
  );
}

export default App;