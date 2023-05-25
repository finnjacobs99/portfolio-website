import React from 'react';
import { About, Contact, Hero, Navbar, Projects, Skills } from './components';

const App = () => {
  return (
    <div className='w-full text-white bg-zinc-800'>
      <Navbar />
      <Hero />
      <About />
      <About />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
