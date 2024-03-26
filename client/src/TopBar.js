// TopBar.js
import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      {/* Search bar */}
      <input type="text" placeholder="Search..." />
      {/* Upload button */}
      <button>Upload</button>
    </div>
  );
};

export default TopBar;