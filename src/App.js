import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Banner />}></Route>
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
