import React from 'react';

const Project = ({ img, title, description, demo, code, tags }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='100'
      className='flex flex-col bg-neutral-800 sm:px-8 px-0 pt-10 pb-6 sm:my-5 sm:overflow-hidden sm:shadow-xl rounded-xl 2xl:max-w-2xl'
    >
      <div className='flex flex-col'>
        {/* Img */}
        <img
          src={img}
          alt='img'
          // data-aos='fade-up'
          // data-aos-offset='0'
          // data-aos-delay='100'
          className=' w-full h-[300px] rounded-xl bg-neutral-900 mb-7 overflow-hidden object-cover'
        />

        {/* Title */}
        <h1
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-delay='200'
          className='text-2xl sm:text-3xl font-bold mb-5'
        >
          {title}
        </h1>
        {/* Description */}
        <p
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-delay='300'
          className='text-[1.25rem] leading-relaxed mb-5'
        >
          {description}
        </p>
        {/* Link(s) */}
        <div
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-delay='400'
          className='mb-7 text-xl text-neutral-400'
        >
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
            data-aos='fade-up'
            data-aos-delay={`${index * 100 + 500}`}
            data-aos-offset='0'
            className='flex justify-center items-center bg-neutral-200 py-3 px-6 mr-4 mb-4 rounded-xl'
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
