import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
import ThemeSelector from './components/ThemeSelector';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeSelector />
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/search">Search</Link> | 
          <Link to="/settings">Settings</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;