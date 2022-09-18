import Spacer from '@/components/Spacer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='ml-3 flex flex-col absolute bottom-4 w-full items-center'>
      <div className='flex flex-row md:w-[40rem] w-[19rem] gap-2 items-center'>
        <a href='https://github.com/0xfffcf'>
          <FaGithub size={20} className='cursor-pointer' />
        </a>
        <a href='mailto:0xfffcfcontact@protonmail.com'>
          <HiMail size={25} />
        </a>
      </div>

      <div className='flex md:w-[41rem] w-[20rem]'>
        <p className='block md:text-sm text-xs dark:opacity-50 font-light mt-1'>
          Built with Next.js, Tailwind and Aws
        </p>
      </div>
    </div>
  );
};

export default Footer;
