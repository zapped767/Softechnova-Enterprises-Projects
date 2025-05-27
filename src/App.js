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

import AiMl from './pages/courseDetails/AiMl';
import Cybersecurity from './pages/courseDetails/Cybersecurity';
import DataScience from './pages/courseDetails/DataScience';
import GraphicDesign from './pages/courseDetails/GraphicDesign';
import Marketing from './pages/courseDetails/Marketing';
import WebDevelopment from './pages/courseDetails/WebDevelopment';



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
        <Route path="/Course/ai-&-ml"element={<AiMl/>}/>
        <Route path="/Course/cybersecurity"element={<Cybersecurity/>}/>
        <Route path="/Course/data-science"element={<DataScience/>}/>
        <Route path="/Course/graphic-design"element={<GraphicDesign/>}/>
        <Route path="/Course/marketing"element={<Marketing/>}/>
        <Route path="/Course/web-development"element={<WebDevelopment/>}/>

        

      </Routes>
    </div>
  );
}

export default App;
