const Introduction = () => {
  return (
    <div className='flex m-auto flex-col items-center'>
      <div className='flex md:w-[38rem] md:h-40 h-32 w-[20rem] flex-col'>
        <div className='ml-2 mt-[1px] md:w-[4.5rem] w-[4.2rem] md:h-6 h-5 absolute bg-gradient-to-tr from-pink-700 to-purple-700 opacity-20 rounded-full' />
        <h1 className='ml-4 w-16 font-medium md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
          0xfffcf
        </h1>
        <p className='ml-2 md:text-sm text-xs dark:opacity-50 font-light'>
          FullStack Developer
        </p>

        <div className='flex mt-1 p-2 md:w-[38rem] rounded-lg bg-zinc-100 dark:bg-md-black '>
          <p className='lg:text-xl md:text-lg text-sm font-extralight'>
            Welcome to my secret garden where I share what I've made and learned
            in my journey as a junior software engineer. I am currently working
            as a full-stack engineer at a confidential place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
