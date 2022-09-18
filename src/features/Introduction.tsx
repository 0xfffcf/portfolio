import Spacer from '@/components/Spacer';

const Introduction = () => {
  return (
    <div className='flex md:w-[40rem] w-[20rem] m-auto flex-col'>
      <div className='blur-xl mt-[2px] md:w-[4.5rem] w-[4.2rem] md:h-6 h-5 absolute bg-gradient-to-tr from-pink-700 to-purple-700 opacity-20 rounded-full' />
      <h1 className='ml-2 w-16 font-medium md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
        0xfffcf
      </h1>
      <p className='ml-1 md:text-sm text-xs dark:opacity-50 font-light'>
        FullStack Developer
      </p>

      <Spacer height='0.6rem' />

      <div className='flex lg:h-24 md:w-[42rem] md:h-[5.5rem] h-24 w-[20rem] p-2 items-center justify-center m-auto rounded-lg bg-zinc-100 dark:bg-md-black'>
        <p className='w-[40rem] lg:text-xl md:text-lg text-sm font-extralight '>
          Welcome to my secret garden where I share what I've made and learned
          in my journey as a junior software engineer. I am currently working as
          a full-stack engineer at a confidential place.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
