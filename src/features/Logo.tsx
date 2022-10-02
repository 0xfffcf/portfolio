import { floating } from '@/animations/variants';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
            className='flex w-full justify-center text-center'
            variants={floating}
        >
            <div className='blur-xl absolute md:w-[32rem] w-[20rem] md:h-20 h-14 md:mt-5 mt-[0.5rem] bg-gradient-to-tr from-pink-700 to-purple-700 opacity-10 rounded-full' />
            <h1 className='md:text-[5rem] text-[3rem] font-extrabold w-[30rem] text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
                Hello World
            </h1>
        </motion.div>
    );
};

export default Logo;
