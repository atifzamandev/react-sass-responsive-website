import React from 'react';
import './Sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar';
import About from './Components/About/About';
import Showcase from './Components/Showcase/Showcase';
import Blank from './Components/Blank/Blank';
import Portfolio from './Components/Portfolio/Portfolio';

// Pages Import
import Home from './Pages/Home';
import Services from './Pages/Services';
import Projects from './Pages/Projects'
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
