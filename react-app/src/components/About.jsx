import React, { useEffect } from 'react';
import img from '../assets/about.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id='about'
      className='max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-start sm:px-16 px-6 py-6 overflow-hidden'
    >
      <div
        data-aos='fade-right'
        className='flex flex-col my-10 justify-center w-full'
      >
        <h1 className='text-4xl sm:text-6xl font-bold mb-5'>About Me</h1>
        <p className='text-xl sm:text-[1.5rem] leading-loose'>
          With a focus on creating engaging user experiences, I specialize in
          front-end development using HTML, CSS, and JavaScript. I'm experienced
          in leveraging modern frameworks like React and React Native to build
          dynamic and responsive web applications. My skill set also includes
          utilizing tools like Tailwind CSS for efficient styling and Git for
          version control.
        </p>
      </div>

      <div data-aos='fade-left' className='object-contain'>
        <img src={img} />
      </div>
    </section>
  );
};

export default About;
