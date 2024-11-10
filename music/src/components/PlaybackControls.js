import React, { useState } from 'react';
import '../styles/components.css';

const PlaybackControls = ({ items }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Map each song name to a color
  const backgroundColors = {
    'Shine On You Crazy Diamond': '#1e3a5f',
    'Comfortably Numb': '#4b3b6b',
    'Wish You Were Here': '#5c6b73',
    'Time': '#7c5c55',
    'Money': '#8f715a',
    'Another Brick in the Wall, Part 2': '#3b3f52',
    'Hey You': '#46494d',
    'Us and Them': '#2f3e46'
    // Add more colors for other songs as needed
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const nextTrack = () => {
    if (currentTrackIndex !== null && currentTrackIndex < items.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setIsPlaying(true);
    }
  };

  const previousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setIsPlaying(true);
    }
  };

  // Get the background color based on the current song
  const currentSong = items[currentTrackIndex];
  const backgroundColor = currentSong ? backgroundColors[currentSong.name] || '#ffffff' : '#ffffff';

  return (
    <div className="playback-controls" style={{ backgroundColor }}>
      <p style={{ color: '#ffffff' }}>
        {currentTrackIndex !== null && currentSong
          ? `Now Playing: ${currentSong.name}`
          : 'No track playing'}
      </p>
      <button onClick={previousTrack} disabled={currentTrackIndex <= 0}>Previous</button>
      {isPlaying ? (
        <button onClick={pauseTrack}>Pause</button>
      ) : (
        <button onClick={() => playTrack(currentTrackIndex ?? 0)}>Play</button>
      )}
      <button onClick={nextTrack} disabled={currentTrackIndex === null || currentTrackIndex >= items.length - 1}>Next</button>
    </div>
  );
};

export default PlaybackControls;