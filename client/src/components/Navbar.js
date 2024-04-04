// Navbar.js
import React, { useState, useEffect } from 'react';
import '../assets/Navbar.css'; 

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'bg' : ''}`}>
      <ul className="links-container">
        <li className="link-item"><a href="#overview" className="link active">Overview</a></li>
        <li className="link-item"><a href="#products" className="link">Products</a></li>
        <li className="link-item"><a href="#partners" className="link">Partners</a></li>
        <li className="link-item"><a href="#articles" className="link">Articles</a></li>
      </ul>
      <div className="user-interactions">
        <div className="cart">
          <img src={"../img/cart.png"} className="cart-icon" alt="" />
          <span className="cart-item-count">00</span>
        </div>
        <div className="user">
          <img src={'/img/user.png'} className="user-icon" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
