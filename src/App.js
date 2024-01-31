import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LoginSignup from './Components/LoginSignup';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />

          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
