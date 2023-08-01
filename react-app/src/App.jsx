import React, { useEffect } from 'react';
import { About, Contact, Hero, Navbar, Projects, Skills, Footer } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-full text-neutral-200 bg-neutral-700'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
