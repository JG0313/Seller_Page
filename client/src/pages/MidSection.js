import React from 'react';
import '../assets/MidSection.css'; 

const MidSection = () => {
  return (
    <section className="mid-section">
      <div className="section-item-container">
        <img src="assets/img/bg-2.png" className="section-bg" alt="" />
        <div className="section-info">
          <h1 className="title">premium quality in <span>affordable</span> price</h1>
        </div>
      </div>
    </section>
  );
}

export default MidSection;