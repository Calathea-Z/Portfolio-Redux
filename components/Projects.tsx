import { motion } from "framer-motion";

type Props = {};
const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-300 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-400/80">
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
            initial={{
                y: -300,
                opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true
            }}
             src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt=""
             className='max-h-20 md:max-h-36' />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-3xl sm:text-4xl font-semibold text-center'> 
              <span className='underline decoration-yellow-100/50'>
                Project {i + 1} of {projects.length}:
              </span>{" "}
                Melodious 
              </h4>
              <p className='text-md sm:text-lg text-center md:text-left'>
              This playlist generator app offers a personalized music experience for music lovers. The app utilizes Spotify and OpenAI APIs to generate artist suggestions based on the user's input prompt and serves as a Spotify controller for convenient play. If you'd like to access the app and try it out, please don't hesitate to get in touch
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-slate-300/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};
export default Projects;
