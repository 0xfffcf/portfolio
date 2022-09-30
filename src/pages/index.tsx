import { dropTop, slideLeft } from '@/animations/variants';
import Spacer from '@/components/Spacer';
import Footer from '@/features/Footer';
import Introduction from '@/features/Introduction';
import Logo from '@/features/Logo';
import Stack from '@/features/Stack';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Extra from '@/features/Extra';

const Home: NextPage = () => {
  return (
    <div className='font-Karla'>
      <Head>
        <title>0xfffcf</title>

        <meta
          name='description'
          content='Hi, I am 0xfffcf a web developer. I am currenlty working with Angular, NextJs and more!'
        />
        <meta
          name='keywords'
          content='portfolio, web designer, web developer, fullstack'
        />
        <meta name='author' content='0xfffcf' />
      </Head>

      <div>
        <motion.div variants={dropTop}>
          <Logo />
        </motion.div>

        <Spacer height='3rem' />

        <motion.div variants={slideLeft}>
          <Introduction />
        </motion.div>

        <Spacer height='2.75rem' />

        <motion.div variants={slideLeft}>
          <Stack />
        </motion.div>

        <Spacer height='2rem' />

        <motion.div variants={slideLeft}>
          <Extra />
        </motion.div>

        <Spacer height='3rem' />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
