import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

type Props = {}
const Contact = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-300 text-2xl">
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center decoration-yellow-300/70 underline'>
            Get in touch with me.
        </h4>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-yellow-400 h-7 w-7 animate-pulse' />
                <p className='text-2xl'>
                    zsykes21@gmail.com
                </p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-yellow-400 h-7 w-7 animate-pulse self-start' />
                <div className='flex flex-col space-y-2 items-center'>
                <p className='text-2xl'>
                    Asheville, North Carolina
                </p>
                <p className='text-xs text-yellow-300/90'>
                  Open to Relocating / Remote Work
                </p>
                </div>
            </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input className='contactInput' type='text' placeholder='Name' />
                <input className='contactInput' type='email' placeholder='Email' />
            </div>

            <input className='contactInput' type='text' placeholder='Subject' />

            <textarea className='contactInput' placeholder='Message' />

            <button className='bg-yellow-400/70 py-5 px-10 rounded-md text-black font-bold'>
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}
export default Contact