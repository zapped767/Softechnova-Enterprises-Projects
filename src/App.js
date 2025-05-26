import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Head from './Components/Header';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import CategoryCarousel from './Components/CategoryCarousel';
import Home from './pages/Home';


function Header() {
  return ;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Header" element={<Head />} />
        <Route path="/Nav"element={<Navbar/>}/>
        <Route path="/Hero"element={<HeroSection/>}/>
        <Route path="/Category"element={<CategoryCarousel/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
