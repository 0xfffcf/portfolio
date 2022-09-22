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
        <title>0xfffcf | Home page</title>
      </Head>

      <div>
        <motion.div variants={dropTop}>
          <Logo />
        </motion.div>

        <Spacer height='3rem' />

        <motion.div variants={slideLeft}>
          <Introduction />
        </motion.div>

        <Spacer height='3rem' />

        <motion.div variants={slideLeft}>
          <Stack />
        </motion.div>

        <Spacer height='2rem' />

        <motion.div variants={slideLeft}>
          <Extra />
        </motion.div>

        <Spacer height='3rem' />

        <Footer />

        <Spacer height='0.5rem' />
      </div>
    </div>
  );
};

export default Home;
