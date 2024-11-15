import React, { useState } from 'react';
import '../styles/components.css';

const ProfileCustomization = () => {
  const [prompt, setPrompt] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [profileSaved, setProfileSaved] = useState(false);

  // Placeholder recommendations that simulate AI-generated results
  const simulatedRecommendations = [
    "Classical piano pieces by Rachmaninoff",
    "Study playlists with classical and jazz influences",
    "Top trending podcasts in Computer Science",
    "Chinese folk music for relaxation",
    "Recommended orchestral pieces by Tchaikovsky and Stravinsky",
    "Deep dive articles on artificial intelligence in music"
  ];

  const generateRecommendations = () => {
    // For now, we simulate "AI generation" by showing pre-defined recommendations
    setRecommendations(simulatedRecommendations);
    setProfileSaved(false);
  };

  const saveProfile = () => {
    // Simulate saving the profile
    setProfileSaved(true);
  };

  return (
    <div className="profile-customization">
      <h2>Profile Customization</h2>
      <p>Describe yourself or your interests, and let our AI recommend music and content for you!</p>
      
      <textarea
        placeholder="Type something like 'I a Computer Science student studying search engine who loves to listen to Rachmaninoff'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="4"
        cols="50"
        style={{ width: '100%', padding: '8px' }}
      />
      
      <button onClick={generateRecommendations} style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
        Generate Recommendations
      </button>
      
      {recommendations.length > 0 && (
        <div className="recommendations">
          <h3>AI-Generated Recommendations</h3>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
          <button onClick={saveProfile} style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
            Save Profile
          </button>
        </div>
      )}

      {profileSaved && <p style={{ color: 'green', marginTop: '10px' }}>Profile saved successfully!</p>}
    </div>
  );
};

export default ProfileCustomization;