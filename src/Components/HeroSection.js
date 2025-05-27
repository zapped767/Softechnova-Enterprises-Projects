import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-image.jpg'; // ✅ Import your local image

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Unlock Your Potential</h1>
        <p>Learn from top instructors and gain real-world skills from anywhere.</p>
        <div className="hero-buttons">
          <button className="btn primary">Explore Courses</button>
          <button className="btn secondary">Become an Instructor</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Online learning" />
      </div>
    </div>
  );
}

export default HeroSection;
