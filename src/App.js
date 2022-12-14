import './App.css';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Footer/>
      
    </div>
  );
}

export default App;
