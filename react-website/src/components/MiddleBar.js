// MiddleBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/MiddleBar.css';

const MiddleBar = () => {
    return (
        <div className="middlebar">
            <Link to="/overview" className="middlebar-item">Overview</Link>
            <Link to="/products" className="middlebar-item">Products</Link>
            <Link to="/partners" className="middlebar-item">Partners</Link>
            <Link to="/articles" className="middlebar-item">Articles</Link>
        </div>
    );
};

export default MiddleBar;