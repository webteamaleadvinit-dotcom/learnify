import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Whychoose from './components/Whychoose.jsx';
import Learnersay from './components/Learnersay.jsx';
import Readytotranform from './components/Readytotranform.jsx';
import Footer from './components/Footer.jsx';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whychoose />
      <Learnersay />
      <Readytotranform />
      <Footer />
    </div>
  )
}

export default Landing
