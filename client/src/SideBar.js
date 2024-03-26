// SideBar.js
import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Messages</li>
        <li>Quotes</li>
        <li>Plans</li>
        <li>Partnership</li>
      </ul>
    </div>
  );
};

export default SideBar;