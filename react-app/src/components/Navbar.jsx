import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import '../index.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos='fade-down'
      className='sticky top-0 w-full bg-zinc-950 bg-opacity-70 bg-clip-border backdrop-blur-[8px] shadow-lg z-50'
    >
      {/* Navbar */}
      <nav className='max-w-screen-xl mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
        {/* Logo */}
        <h1 className='font-semibold sm:text-[2rem] text-[24px]'>
          Finn Jacobs
        </h1>
        {/* Navlinks */}
        <ul className='lg:flex hidden text-[1.5rem]'>
          <li className='mr-10 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
            <a href='#home'>Home</a>
          </li>
          <li className='mr-10 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
            <a href='#about'>About</a>
          </li>
          <li className='mr-10 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='mr-10 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
            <a href='#projects'>Projects</a>
          </li>
          <li className=' text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        {/* Menu Toggle */}
        <button className='lg:hidden flex'>
          {!toggle ? (
            <HiMenuAlt3
              className='h-[38px] w-[38px]'
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <HiOutlineX
              className='h-[38px] w-[38px]'
              onClick={() => setToggle((prev) => !prev)}
            />
          )}

          {/* Navmenu */}
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 bg-zinc-900 absolute top-20 mx-4 my-2 slide-left rounded-md`}
          >
            <ul className='lg:hidden flex flex-col text-center text-[1.5rem]'>
              <li className='mb-4 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
                <a href='#home'>Home</a>
              </li>
              <li className='mb-4 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
                <a href='#about'>About</a>
              </li>
              <li className='mb-4 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
                <a href='#skills'>Skills</a>
              </li>
              <li className='mb-4 text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='text-stone-400 transition-colors ease-in-out duration-300 hover:text-white'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
