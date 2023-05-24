import React from 'react';
import img from '../assets/hero.png';
import { HiArrowRight, HiOutlineDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      id='home'
      className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center sm:px-16 px-6 py-6'
    >
      {/* Header */}
      <div className='my-10 max-w-screen-sm mx-auto'>
        <h1 className='text-3xl sm:text-5xl font-bold mb-5'>Hi, I'm Finn.</h1>
        <h1 className='text-lg leading-10'>
          I am a dedicated front-end developer with a passion for cafting
          intuitive and vissually appealing user experiences.
        </h1>

        {/* Buttons */}
        <div className='inline-flex flex-col sm:flex-row mt-4'>
          <a className='inline-flex items-center mr-auto sm:mr-5 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer mb-2 sm:mb-0'>
            Resume
            <HiOutlineDownload className='ml-2' />
          </a>

          <a
            href='#about'
            className='inline-flex items-center mr-5 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer'
          >
            Learn More
            <HiArrowRight className='ml-2' />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className='object-fit'>
        <img src={img} className='' />
      </div>
    </section>
  );
};

export default Hero;
