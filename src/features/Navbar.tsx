import { useEffect, useState } from 'react';

import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = ({ themeType }: { themeType: string }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(themeType);
  }, [themeType]);

  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className='flex sm:w-full lg:w-6/12 h-[5rem] items-center m-auto text-sm md:text-base'>
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
        <a href='/'>Home</a>
        <a href='/projects'>Projects</a>
        <a href='#about'>About</a>

        <div
          className='white dark:dark:bg-zinc-900 relative top-[0.3rem] cursor-pointer'
          onClick={() => changeTheme()}
        >
          {theme === 'dark' ? <IoSunny /> : <IoMoon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
