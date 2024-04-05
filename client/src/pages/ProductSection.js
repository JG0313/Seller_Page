import React from 'react';
import '../assets/ProductSection.css'; 

function ProductSection() {
  return (
    <section className="best-selling-product-section">
      <h1 className="section-title">best selling products</h1>
      <div className="product-container">
        <div className="product-card">
          <img src="assets/img/product-1.png" className="product-img" alt="" />
          <p className="product-name">lights →</p>
        </div>
        {/* Add 3 more Cards */}
      </div>
    </section>
  );
}

export default ProductSection;
