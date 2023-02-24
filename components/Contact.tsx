import { EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}
const Contact = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-300 text-2xl">
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center decoration-yellow-300/50 underline'>
            Get in touch with me.
        </h4>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-yellow-400 h-7 w-7 animate-pulse' />
                <p className='text-2xl'>
                    zsykes21@gmail.com
                </p>
            </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input className='contactInput' type='text' />
                <input className='contactInput' type='text' />
            </div>

            <input className='contactInput' type='text' />

            <textarea className='contactInput' />

            <button className='bg-yellow-400/70 py-5 px-10 rounded-md text-black font-bold'>
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}
export default Contact