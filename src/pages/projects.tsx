import { dropTop, floating } from '@/animations/variants';
import Spacer from '@/components/Spacer';
import Footer from '@/features/Footer';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <>
      <motion.div variants={dropTop}>
        <motion.div
          className='flex w-full justify-center text-center'
          variants={floating}
        >
          <div className='blur-xl absolute md:w-[40rem] w-[23rem] md:h-20 h-14 md:mt-5 mt-[0.5rem] bg-gradient-to-tr from-pink-700 to-purple-700 opacity-20 dark:opacity-10 rounded-full' />
          <h1 className='md:text-[5rem] text-[3rem] font-extrabold w-[36rem] text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
            Amnesia Chat
          </h1>
        </motion.div>

        <Spacer height='2rem' />

        <div className='flex m-auto flex-col items-center'>
          <div className='flex mt-1 p-2 md:w-[38rem] w-[20rem] rounded-lg bg-zinc-200 dark:bg-md-black '>
            <p className='lg:text-xl md:text-lg text-sm font-extralight'>
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                Amnesia Chat
              </span>{' '}
              is a chat app made by me. It was made to protect your privacy by{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                not logging anything
              </span>{' '}
              on a server or database. It is minimalist as possible and{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                free to use
              </span>
              . We accept donation thought since the hosting and the domain are
              not free. The new thing amnesia bring is the fact that{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                user doesn&apos;t choose their username
              </span>{' '}
              so there is no chance of doxing of alternative method of that. We
              did this so it is harder to track someone. Also{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                room id are made via uuidv5 and uuidv4.
              </span>{' '}
              It is very hard to find someone else&apos;s room because of that.
              More information can be viewed on the website{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                (coming soon)
              </span>
            </p>
          </div>
        </div>
      </motion.div>

      <div className='w-full absolute h-12 bottom-1'>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
