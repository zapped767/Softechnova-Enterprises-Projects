import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Head from './Components/Header';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import CategoryCarousel from './Components/CategoryCarousel';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Contact from './pages/Contact';
import AuthPage from './Components/AuthPage';
import CourseDetailPage from './pages/CourseDetailPage';


function Header() {
  return ;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Ho"element={<Home/>}/>
        <Route path="/Header" element={<Head />} />
        <Route path="/Nav"element={<Navbar/>}/>
        <Route path="/Hero"element={<HeroSection/>}/>
        <Route path="/Category"element={<CategoryCarousel/>}/>
        <Route path="/Course"element={<Course/>}/>  
        <Route path="/About"element={<About/>}/>    
        <Route path="/Contact"element={<Contact/>}/>
        <Route path="/"element={<AuthPage/>}/>
        <Route path="/Cour-Deat"element={<CourseDetailPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
