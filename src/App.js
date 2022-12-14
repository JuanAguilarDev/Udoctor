import './App.css';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Test } from './components/pages/Test';

import NavigationBar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={
          <>
            <Banner />
          </>
        } />
        <Route path='/about' element={<Test />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
