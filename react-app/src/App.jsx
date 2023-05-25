import React, { useEffect } from 'react';
import { About, Contact, Hero, Navbar, Projects, Skills } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-full text-white bg-zinc-800'>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
