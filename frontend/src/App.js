import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/pages/About';
import { Test } from './components/pages/Test'
import { Sign } from './components/Sign/Sign';

import { useSign } from './hooks/useSign';


function App() {
  const { user } = useSign();
  const isLogged = user != null ? true : false;
  return (
    <div className="App">
      {isLogged ? <Navbar /> : null}
      <Routes>
        <Route path='/' element={isLogged ? <Banner /> : <Sign />}></Route>
        <Route path='/home' element={<Banner />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/about' element={<About />} />
      </Routes>
      {isLogged ? <Footer /> : null}

    </div>
  );
}

export default App;
