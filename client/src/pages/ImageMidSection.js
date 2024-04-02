import React from 'react';
import '../assets/ImageMidSection.css'; 

function ImageMidSection() {
  return (
    <section className="image-mid-section">
      <div className="image-collage">
        <div className="image-collection">
          <img src="img/poster-1.png" className="collage-img" alt="" />
          <img src="img/poster-2.png" className="collage-img" alt="" />
          <img src="img/poster-3.png" className="collage-img" alt="" />
        </div>
      </div>
    </section>
  );
}

export default ImageMidSection;