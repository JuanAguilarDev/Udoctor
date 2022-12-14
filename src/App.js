import './App.css';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import NavigationBar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
      <Footer/>
      
    </div>
  );
}

export default App;
