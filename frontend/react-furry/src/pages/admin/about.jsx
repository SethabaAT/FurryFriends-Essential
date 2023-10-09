import React from 'react';
import './about.css';

export const About = () => {
  return (
    <div className="about-container">
      <div className="left-section">
        <h1 className="company-name">FurryFriends Company</h1>
        <p className="company-description">
          Welcome to FurryFriends Company, where your pet's happiness takes
          center stage. We specialize in providing high-quality pet products
          for dogs, cats, rabbits, birds, and more. Our mission is to ensure
          that your furry companions lead a joyful and healthy life.
        </p>
        <button className="cta-button">Discover Our Products</button>
      </div>
      <div className="right-section">
        <div className="zigzag-images">
          <img
            src="images\display\Dog2.jpg"
            alt="Pet Product 1"
            className="image-frame"
          />
          <img
            src="images/display/cat.jpg"
            alt="Pet Product 2"
            className="image-frame"
          />
          <img
            src="images/display/parrot.jpg"
            alt="Pet Product 3"
            className="image-frame"
          />
        </div>
        <div className="testimonials">
          <div className="testimonial-card">
            <h3 className="testimonial-title">Boris</h3>
            <p className="testimonial-text">
              "FurryFriends Company provides top-notch products for my pets.
              Their service is exceptional, and my pets love their products!"
            </p>
          </div>
          <div className="testimonial-card">
            <h3 className="testimonial-title">Zama</h3>
            <p className="testimonial-text">
              "I've been a loyal customer of FurryFriends Company for years.
              Their dedication to pet well-being is commendable. Highly
              recommended!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
