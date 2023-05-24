import React, { useState } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import '../index.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='sticky top-0 w-full bg-zinc-950 bg-opacity-50 backdrop-blur-md shadow-lg'>
      {/* Navbar */}
      <nav className='max-w-screen-xl mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
        {/* Logo */}
        <h1 className='font-semibold md:text-[24px] text-[18px]'>
          Finn Jacobs
        </h1>
        {/* Navlinks */}
        <ul className='md:flex hidden'>
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
        <button className='md:hidden flex'>
          {!toggle ? (
            <HiMenuAlt3
              className='h-[2rem] w-[2rem]'
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <HiOutlineX
              className='h-[2rem] w-[2rem]'
              onClick={() => setToggle((prev) => !prev)}
            />
          )}

          {/* Navmenu */}
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 bg-zinc-900 absolute top-20 mx-4 my-2 slide-left rounded-md`}
          >
            <ul className='md:hidden flex flex-col text-center'>
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
