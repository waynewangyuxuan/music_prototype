import React from 'react';
import Home from '../components/Home';

const HomePage = ({ libraryItems, addItem }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Home libraryItems={libraryItems} addItem={addItem} />
    </div>
  );
};

export default HomePage;