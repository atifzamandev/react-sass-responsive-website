import Header from "../Components/Header/Header";
import Navbar from '../Components/Header/Navbar';
import About from '../Components/About/About';
import Showcase from '../Components/Showcase/Showcase';
import Blank from '../Components/Blank/Blank';
import Portfolio from '../Components/Portfolio/Portfolio';

import React from 'react'

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Showcase />
      <Blank />
      <Portfolio />
    </div>
  )
}

export default home