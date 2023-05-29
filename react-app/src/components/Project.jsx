import React from 'react';

const Project = ({ img, title, description, demo, code, tags }) => {
  return (
    <div
      data-aos='fade-up'
      className='bg-neutral-800 sm:px-8 px-0 py-10 sm:my-5 rounded-lg'
    >
      {/* Img */}
      <div className='mb-7 overflow-hidden'>
        <img alt='img' className='w-[192px] h-[108px] bg-neutral-900' />
      </div>

      <div className='flex flex-col'>
        {/* Title */}
        <h1 className='text-2xl sm:text-3xl font-bold mb-5'>{title}</h1>
        {/* Description */}
        <p className='text-[1.25rem] leading-relaxed mb-5'>{description}</p>
        {/* Link(s) */}
        <div className='mb-7 text-xl text-neutral-400'>
          <a className='inline-flex transition ease-in-out duration-300 hover:text-white hover:scale-110 cursor-pointer'>
            View Demo
          </a>
        </div>
      </div>

      {/* Tags */}
      <div className='flex flex-wrap text-black font-semibold md:text-xl'>
        {tags.map((tag, index) => (
          <p
            key={index}
            className='flex justify-center items-center bg-neutral-200 py-3 px-6 mr-4 mb-4 rounded-lg'
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
