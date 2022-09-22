import Spacer from '@/components/Spacer';

const Stack = () => {
  return (
    <div className='flex m-auto flex-col items-center'>
      <div className='flex md:w-[38rem] md:h-40 h-36 w-[20rem] flex-col'>
        <div className='blur-xl md:mt-1 mt-[1.5px] md:w-[12.6rem] w-[11.5rem] h-5 absolute bg-gradient-to-tr from-pink-700 to-purple-700 opacity-20 rounded-full' />
        <h1 className='ml-2 w-48 font-medium md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-700'>
          My Weapons Of Choice
        </h1>

        <Spacer height='0.6rem' />

        <div className='flex lg:h-24 md:w-[38rem] p-2 rounded-lg bg-zinc-100 dark:bg-md-black'>
          <p className='lg:text-xl md:text-lg text-sm font-extralight'>
            Typescript - Next.js - React Query - Express - GraphQL - Aws <br />I
            also use other tech and language like TailwindCSS, Framer Motion,
            Golang and a lot more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
