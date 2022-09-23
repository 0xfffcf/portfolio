import Spacer from '@/components/Spacer';

const Extra = () => {
  return (
    <div className='flex m-auto flex-col items-center'>
      <div className='flex md:w-[38rem] md:h-28 h-32 w-[20rem] flex-col'>
        <div className='blur-xl md:ml-[0.6rem] ml-2 md:mt-1 mt-[3px] md:w-14 w-14 h-5 absolute bg-gradient-to-tr from-pink-700 to-purple-700 opacity-30 dark:opacity-20 rounded-full' />
        <h1 className='ml-4 w-48 font-medium md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
          Extra
        </h1>

        <div className='flex mt-1 p-2 md:w-[38rem] rounded-lg bg-zinc-200 dark:bg-md-black '>
          <p className='w-[40rem] lg:text-xl md:text-lg text-sm font-extralight ml-2'>
            If you want to contact me for a job or just to ask a question, you
            can reach me. My email is down below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
