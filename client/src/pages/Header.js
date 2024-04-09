import React from 'react';
import '../assets/Header.css'; 
import Seller from '../assets/img/seller.jpg';


function Header() {
  return (
    <header className="header-section">
      <div className="header-content">
        <img id='seller_image' src={Seller} className="seller-img" alt="Seller" />
      </div>
      <div className='header-card'>
      <h1 id='seller_name' className="header-heading">
        <span>Mark <br /></span> Johnson
      </h1>
      <p id='seller_website' className="header-text">www.markjohnson.org</p>
      <p id='seller_email' className="header-text">markjohnson@gmail.com</p>
      <p id='seller_number' className="header-text">555-555-5555</p>
      <p id='seller_summary' className="header-text">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      </div>
    </header>
  );
}

export default Header;