import React, { useEffect } from 'react';
import img from '../assets/hero.png';
import { HiArrowRight, HiOutlineDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      id='home'
      className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center sm:px-16 px-6 md:py-20 overflow-hidden sm:h-[90vh]'
    >
      {/* Header */}
      <div data-aos='fade-right' className='flex flex-col my-10'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-5'>Hi, I'm Finn.</h1>
        <p className='text-xl sm:text-[1.5rem] leading-loose'>
          I am a dedicated front-end developer with a passion for cafting
          intuitive and vissually appealing user experiences.
        </p>

        {/* Buttons */}
        <div className='inline-flex flex-col sm:flex-row mt-4 text-lg sm:text-xl'>
          <a className='inline-flex items-center mr-auto sm:mr-5 text-stone-400 transition ease-in-out duration-300 hover:text-white hover:scale-110 cursor-pointer mb-2 sm:mb-0'>
            Resume
            <HiOutlineDownload className='ml-2' />
          </a>

          <a
            href='#about'
            className='inline-flex items-center mr-auto sm:mr-0 text-stone-400 transition ease-in-out duration-300 hover:text-white hover:scale-110 cursor-pointer'
          >
            Learn More
            <HiArrowRight className='ml-2' />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div data-aos='fade-left' className='object-fit'>
        <img src={img} />
      </div>
    </section>
  );
};

export default Hero;
