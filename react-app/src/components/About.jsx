import React, { useEffect } from 'react';
import img from '../assets/about1.png';

const About = () => {
  return (
    <section
      id='about'
      className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-start sm:px-16 px-6 md:pb-14 md:pt-0 py-6 overflow-hidden'
    >
      {/* Text */}
      <div
        data-aos='fade-left'
        className='flex flex-col my-10 justify-center w-full ml-5'
      >
        <h1 className='text-4xl sm:text-6xl font-bold mb-5'>About Me</h1>
        <p className='text-xl sm:text-[1.5rem] leading-loose'>
          I'm a recent graduate from the University of Maine with a bachelor's
          in computer science. With expertise in React, React Native, HTML, CSS,
          JavaScript, and Tailwind, I enjoy creating user-friendly interfaces
          and engaging web experiences. I'm excited to leverage my skills to
          build innovative solutions and contribute to meaningful projects.
        </p>
      </div>

      {/* Image */}
      <div data-aos='fade-right' className='object-contain w-full'>
        <img src={img} />
      </div>
    </section>
  );
};

export default About;
