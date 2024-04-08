import React from 'react';
import '../assets/ReviewSection.css'; 

const ReviewSection = () => {
  return (
    <section className="review-section">
      <h1 className="section-title">what our <span>customers</span> says about us</h1>
      <div className="review-container">
        <div className="review-card">
          <div className="user-dp" data-rating="4.9"><img src="assets/img/user 1.png" alt="" /></div>
          <h2 className="review-title">best quality more than my expectation</h2>
          <p className="review">Lorem15</p>
        </div>
        {/* 3 more reviews */}
      </div>
    </section>
  );
}

export default ReviewSection;