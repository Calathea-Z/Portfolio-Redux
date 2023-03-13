import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import {CloudArrowUpIcon} from '@heroicons/react/24/solid';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

const Contact = (props: Props) => {
  const { register, setValue, handleSubmit, } = useForm<FormData>();
  const onSubmit = handleSubmit((formData) => {
    window.location.href = `mailto:zsykes21@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
  } );

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row sm:max-w-40 sm:max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="top-36 md:top-20 uppercase tracking-[20px] text-slate-300 text-2xl sm:mb-[10px] md:mb-[0px]">
        Contact
      </h3>

      <div className='flex flex-col lg:space-y-10 space-y-2'>
        <div className='space-y-1 sm:mt-[20px]'>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-yellow-400 h-4 w-4 md:h-7 md:w-7 animate-pulse' />
                <p className='text-l'>
                    zsykes21@gmail.com
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <MapPinIcon className='text-yellow-400 h-4 w-4 md:h-7 md:w-7 animate-pulse self-start' />
                <div className='flex flex-col space-y-2 items-center'>
                <p className='text-l sm:text-2xl'>
                    Asheville, North Carolina
                </p>
                <p className='text-l text-yellow-300/90'>
                  Open to Relocating / Remote Work
                </p>
                </div>
            </div>
        </div>

        <form onSubmit={onSubmit} className='flex flex-col space-y-2 sm:w-fit mx-auto'>
            <div className='flex flex-col sm:flex-row space-x-2 space-y-2 sm:space-y-0'>
                <input {...register('name')}className='contactInput' type='text' placeholder='Name' />
                <input {...register('email')}className='contactInput' type='email' placeholder='Email' />
            </div>

            <input {...register('subject')}className='contactInput' type='text' placeholder='Subject' />

            <textarea {...register('message')} className='contactInput' placeholder='Message' />

            <button className='bg-yellow-400/70 py-3 px-8sm:py-5 sm:px-10 rounded-md text-black font-bold'>
                Submit
            </button>
        </form>
      </div>
      <Link href='#hero'>
        <footer className='bottom-2 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <CloudArrowUpIcon className="h-10 w-10 rounded-full filter grayscale hover:text-blue-400/70 hover:grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Contact