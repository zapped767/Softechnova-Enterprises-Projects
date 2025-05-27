import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Head from './Components/Header';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import CategoryCarousel from './Components/CategoryCarousel';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Login from './Components/Login';
import Signup from './Components/Sigup';


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
        <Route path="/Course"element={<Course/>}/>  
        <Route path="/About"element={<About/>}/>    
        <Route path="/"element={<Login/>}/>  
        <Route path="Signup"element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
