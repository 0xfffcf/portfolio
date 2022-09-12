import { fadeIn } from '@/animations/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme.length === 0) {
      setTheme('dark');
    } else {
      setTheme('');
    }
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.div
      className='flex sm:w-full lg:w-6/12 items-center m-auto text-sm md:text-base'
      variants={fadeIn}
      initial='initial'
      animate='animate'
    >
      <div className='p-[2px] lg:h-[2.9rem] md:h-[2.7rem] w-12 lg:ml-0 ml-8 flex items-center rounded-full bg-gradient-to-tr from-pink-700 to-purple-700'>
        <div className='p-[2px] dark:p-[2.5px] bg-white dark:bg-zinc-900 rounded-full'>
          <img
            className='rounded-full h-inherit w-inherit cursor-pointer'
            src='https://avatars.githubusercontent.com/u/101296800?v=4'
            onClick={() => (location.href = 'https://github.com/0xfffcf')}
          />
        </div>
      </div>

      <div className='flex justify-end w-full gap-6 lg:mr-0 mr-5'>
        <a href='#home'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#about'>About</a>

        <div
          className='white dark:dark:bg-zinc-900 relative top-[0.3rem] cursor-pointer'
          onClick={() => changeTheme()}
        >
          {theme === 'dark' ? <IoSunny /> : <IoMoon />}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
