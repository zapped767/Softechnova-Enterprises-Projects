import React from 'react';
import './HeroSection.css';

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
        <img src="https://images.unsplash.com/photo-1584697964154-aca1737a3cb2" alt="Online learning" />
      </div>
    </div>
  );
}

export default HeroSection;
