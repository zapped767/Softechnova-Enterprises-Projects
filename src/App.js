import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

function Home() {
  return ;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nav"element={<Navbar/>}/>
        <Route path="/Hero"element={<HeroSection/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
