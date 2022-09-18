import Spacer from '@/components/Spacer';

const Extra = () => {
  return (
    <div className='flex md:w-[40rem] w-[20rem] m-auto flex-col'>
      <div className='blur-xl md:mt-1 mt-[3px] md:w-16 w-14 h-5 absolute bg-gradient-to-tr from-pink-700 to-purple-700 opacity-20 rounded-full' />
      <h1 className='ml-2 w-48 font-medium md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
        Extra
      </h1>

      <Spacer height='0.6rem' />

      <div className='flex md:w-[42rem] h-16 w-[20rem] p-2 items-center justify-center rounded-lg bg-zinc-100 dark:bg-md-black'>
        <p className='w-[40rem] lg:text-xl md:text-lg text-sm font-extralight ml-2'>
          If you want to contact me for a job or just to ask a question, you can
          reach me. My email is down below.
        </p>
      </div>
    </div>
  );
};

export default Extra;
