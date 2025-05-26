import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';

function Home() {
  return ;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
