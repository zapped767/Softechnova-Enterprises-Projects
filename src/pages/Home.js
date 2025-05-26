import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import CategoryCarousel from '../Components/CategoryCarousel';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
    </div>
  );
};

export default Home;
