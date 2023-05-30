import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-screen-2xl mx-auto flex flex-col justify-between sm:px-16 px-6 pb-6 lg:pb-[3.5rem] pt-10 overflow-hidden'
    >
      <div className='flex flex-col w-full'>
        {/* Header */}
        <h1 data-aos='fade-up' className='text-4xl sm:text-6xl font-bold mb-7'>
          Contact Me
        </h1>

        {/* Form */}
        <div className='flex flex-col w-full'>
          <div data-aos='fade-up' data-aos-delay='50' className='flex flex-col'>
            <h1 className='md:text-2xl text-xl mb-2'>Name</h1>
            <input className='bg-neutral-800 mb-5 outline-none p-6 rounded-xl md:text-xl' />
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='100'
            className='flex flex-col'
          >
            <h1 className='md:text-2xl text-xl mb-2'>Email</h1>
            <input className='bg-neutral-800 mb-5 outline-none p-6 rounded-xl md:text-xl' />
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='150'
            className='flex flex-col'
          >
            <h1 className='md:text-2xl text-xl mb-2'>Subject</h1>
            <input className='bg-neutral-800 mb-5 outline-none p-6 rounded-xl md:text-xl' />
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='200'
            className='flex flex-col'
          >
            <h1 className='md:text-2xl text-xl mb-2'>Message</h1>
            <textarea className='bg-neutral-800 mb-7 h-64 outline-none p-6 rounded-xl md:text-xl leading-loose' />
          </div>

          {/* Buttons */}
          <div className='flex flex-col lg:flex-row justify-between text-xl font-medium'>
            {/* Send */}
            <button
              data-aos='fade-up'
              data-aos-delay='250'
              className='bg-neutral-800 p-6 mb-5 lg:mb-0 rounded-xl lg:w-[32%] flex justify-center items-center'
            >
              <p className='mr-2'>Send</p>
              <IoIosSend className='h-[24px] w-[24px]' />
            </button>

            {/* Github */}
            <a
              href='https://github.com/finnjacobs99'
              target='_blank'
              data-aos='fade-up'
              data-aos-delay='300'
              className='bg-neutral-800 p-6 mb-5 lg:mb-0 rounded-xl lg:w-[32%] flex justify-center items-center cursor-pointer'
            >
              <p className='mr-2'>Github</p>
              <AiFillGithub className='h-[24px] w-[24px]' />
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/finn-jacobs-5808831bb/'
              target='_blank'
              data-aos='fade-up'
              data-aos-delay='350'
              className='bg-neutral-800 p-6 mb-5 lg:mb-0 rounded-xl lg:w-[32%] flex justify-center items-center cursor-pointer'
            >
              <p className='mr-2'>LinkedIn</p>
              <AiFillLinkedin className='h-[24px] w-[24px]' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
