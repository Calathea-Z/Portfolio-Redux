import { motion } from "framer-motion";

type Props = {}
const About = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-300 text-2xl">
        About
    </h3>
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{
            once: true,
        }}
        src='https://trey.com/wp-content/uploads/2020/04/TAWebsite-768x510.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg ms:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-yellow-100/50'>little</span>{" "} background
            </h4>
            <p className='text-base'>
            I am a passionate software engineer with a deep love for coding. My background as a touring musician and kitchen manager has instilled in me a unique perspective on teamwork, problem-solving, and the ability to adapt to new environments. <br/> When I'm not coding you'll most likely find me exploring new places, attending concerts, or riding my bike. Travel and new experiences are a huge part of my life. I believe that exposure to different cultures and ways of thinking has helped me to approach problems in new and innovate ways. <br/> Currently, I reside in Asheville, North Carolina, where I work with my coding partner, Suzie the French Bulldog. I am open to relocating and always on the lookout for new opportunities to grow and develop my skills. I am excited to continue my journey in the tech industry and can't wait to see where it takes me next. 
            </p>
        </div>
    </motion.div>
  )
}
export default About