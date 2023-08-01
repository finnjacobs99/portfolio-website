import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <section
      id='footer'
      className='max-w-screen-2xl mx-auto flex justify-between sm:px-16 px-6 pb-6 pt-6 text-xs sm:text-sm lg:text-lg'
    >
      <span>Developed by Finn Jacobs</span>
      <div className='flex'>
        <a 
          className='flex justify-center items-center mr-4 cursor-pointer transition hover:text-white ease-in-out duration-300'
          href='https://www.linkedin.com/in/finn-jacobs-5808831bb'
          target='_blank'
        >
          <span>LinkedIn</span>
          <AiFillLinkedin className='ml-1'/>
        </a>
        <a 
          className='flex justify-center items-center cursor-pointer transition hover:text-white ease-in-out duration-300'
          href='https://github.com/finnjacobs99/portfolio-website'
          target='_blank'
        >
          <span>Github</span>
          <AiFillGithub className='ml-1'/>
        </a>
      </div>
    </section>
  )
}

export default Footer