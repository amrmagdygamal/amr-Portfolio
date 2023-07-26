import React from 'react';

import { AboutMe, Experience, FindUs, Footer, Gallery, Header, Contact, Services, Portfolio, Testimonials } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <>
    <Header />
    <Navbar />
    <AboutMe />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Gallery />
    
    <Footer />
  </>
);

export default App;
