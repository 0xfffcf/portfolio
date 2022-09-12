import Spacer from '@/components/Spacer';
import Navbar from '@/features/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { IoMoon, IoSunny } from 'react-icons/io5';

const Home: NextPage = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Head>
        <title>0xfffcf | Home page</title>
      </Head>
      <div className='w-full h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white'>
        <Spacer height='1em' width='100vw' />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
