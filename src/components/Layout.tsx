import { fadeIn, staggerContainer } from '@/animations/variants';
import Footer from '@/features/Footer';
import Navbar from '@/features/Navbar';
import NavBar from '@/features/Navbar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Spacer from './Spacer';

const Layout = ({ children }: any) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      document.documentElement.classList.add(theme);
      setTheme(theme);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }, []);

  return (
    <motion.div
      className='w-screen h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-neutral-200 font-Karla'
      variants={staggerContainer}
      initial='initial'
      animate='animate'
    >
      <motion.div variants={fadeIn}>
        <Navbar themeType={theme} />
      </motion.div>
      <div className='w-full h-[2px] shadow-sm' />

      <Spacer height='2rem' />

      {children}
    </motion.div>
  );
};

export default Layout;
