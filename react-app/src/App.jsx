import React from 'react';
import { About, Contact, Hero, Navbar, Projects, Skills } from './components';

const App = () => {
  return (
    <div className="w-full text-white bg-black ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
