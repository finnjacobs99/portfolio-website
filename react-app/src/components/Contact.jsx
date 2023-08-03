import React, { useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_adzutpb',
        'contact_form',
        form.current,
        'yjAicNKr1H1jc4YwZ'
      )
      .then(
        (result) => {
          alert('Email Sent');
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

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
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full'>
          {/* Name */}
          {/* <div data-aos='fade-up' data-aos-delay='50' className='flex flex-col'>
            <input
              placeholder='Name'
              type='text'
              name='user_name'
              className='bg-neutral-800 mb-7 outline-none p-6 rounded-xl md:text-xl'
            />
          </div> */}

          {/* Email */}
          <div
            data-aos='fade-up'
            data-aos-delay='100'
            className='flex flex-col'
          >
            <input
              placeholder='Email'
              type='email'
              name='user_email'
              className='bg-neutral-800 mb-7 outline-none p-6 rounded-xl md:text-xl'
            />
          </div>

          {/* Subject */}
          <div
            data-aos='fade-up'
            data-aos-delay='150'
            className='flex flex-col'
          >
            <input
              placeholder='Subject'
              type='text'
              name='subject'
              className='bg-neutral-800 mb-7 outline-none p-6 rounded-xl md:text-xl'
            />
          </div>

          {/* Message */}
          <div
            data-aos='fade-up'
            data-aos-delay='200'
            className='flex flex-col'
          >
            {/* <label className='md:text-2xl text-xl mb-2'>Message</label> */}
            <textarea
              placeholder='Message'
              name='message'
              className='bg-neutral-800 mb-7 h-64 outline-none p-6 rounded-xl md:text-xl leading-loose'
            />
          </div>

          {/* Buttons */}
          <div className='flex flex-row justify-start text-xl font-medium'>
            {/* Send */}
            <button
              type='submit'
              data-aos='fade-up'
              data-aos-delay='250'
              className='bg-neutral-800 p-6 mb-5 lg:mb-0 rounded-xl flex justify-center items-center flex-grow max-w-lg'
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
              className='bg-neutral-800 p-6 mb-5 lg:mb-0 ml-5 rounded-xl w-1/8 flex justify-center items-center cursor-pointer'
            >
              <AiFillGithub className='text-2xl sm:text-3xl' />
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/finn-jacobs-5808831bb/'
              target='_blank'
              data-aos='fade-up'
              data-aos-delay='350'
              className='bg-neutral-800 p-6 mb-5 lg:mb-0 ml-5 rounded-xl w-1/8 flex justify-center items-center cursor-pointer'
            >
              <AiFillLinkedin className='text-2xl sm:text-3xl' />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
