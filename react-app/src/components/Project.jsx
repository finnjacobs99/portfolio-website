import React from 'react';
import { HiOutlineCode, HiExternalLink } from 'react-icons/hi';

const Project = ({ img, title, description, demo, website, code, tags }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='0'
      className='flex flex-col bg-neutral-800 sm:px-8 px-0 pt-10 pb-6 sm:my-5 sm:overflow-hidden sm:shadow-xl rounded-xl 2xl:max-w-[49%]'
    >
      <div className='flex flex-col'>
        {/* Img */}
        <img
          src={img}
          alt='img'
          className=' w-full h-[300px] rounded-xl bg-neutral-900 mb-7 overflow-hidden object-cover'
        />

        {/* Title */}
        <h1
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-delay='50'
          className='text-2xl sm:text-3xl font-bold mb-5'
        >
          {title}
        </h1>

        {/* Description */}
        <p
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-delay='150'
          className='text-[1.25rem] leading-relaxed mb-5'
        >
          {description}
        </p>

        {/* Link(s) */}
        <div
          className={`flex flex-wrap mb-7 ${
            !demo && !website && !code ? 'hidden' : ''
          }`}
        >
          {/* Demo */}
          {!demo ? null : (
            <div
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-delay='200'
              className='mr-5 text-xl text-neutral-400'
            >
              <a
                href={demo}
                target='_blank'
                className='flex items-center justify-center transition ease-in-out duration-300 hover:text-white hover:scale-110 cursor-pointer'
              >
                <span>Demo</span>
                <HiExternalLink className='text-xl text-center ml-1' />
              </a>
            </div>
          )}

          {/* Website */}
          {!website ? null : (
            <div
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-delay='200'
              className='mr-5 text-xl text-neutral-400'
            >
              <a
                href={website}
                target='_blank'
                className='flex items-center justify-center transition ease-in-out duration-300 hover:text-white hover:scale-110 cursor-pointer'
              >
                <span>Website</span>
                <HiExternalLink className='text-xl text-center ml-1' />
              </a>
            </div>
          )}

          {/* Code */}
          {!code ? null : (
            <div
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-delay='250'
              className='mr-5 text-xl text-neutral-400'
            >
              <a
                href={code}
                target='_blank'
                className='flex items-center justify-center transition ease-in-out duration-300 hover:text-white hover:scale-110 cursor-pointer'
              >
                <span>Code</span>
                <HiOutlineCode className='text-xl text-center ml-2' />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className='flex flex-wrap text-black font-semibold md:text-xl'>
        {tags.map((tag, index) => (
          <p
            key={index}
            data-aos='fade-up'
            data-aos-delay={`${index * 50 + 250}`}
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
