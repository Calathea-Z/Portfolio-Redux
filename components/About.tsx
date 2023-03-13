import { motion } from "framer-motion";
import profileImageTwo from "../public/assets/profile2.png";
import Image from "next/image";

type Props = {};
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-[3rem] md:top-20 uppercase tracking-[20px] text-slate-300 text-2xl mt-1 sm:mt-0">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="sm:mt-[50px] md:mt-[40px] mb-0 flex-shrink-0 rounded-full w-[1px] h-[1px] md:h-auto md:w-[300px]"
      >
        <Image
          src={profileImageTwo}
          alt="alternate profile photo"
          className="rounded-lg sm:object-fill invisible md:visible pb-1 "
        />
      </motion.div>

      <div className="md:space-y-5 px-5 py-5 md:py-0 md:px-10">
        <h4 className="text-4xl font-semibold invisible lg:visible">
          Here is a{" "}
          <span className="bg-yellow-100/10 rounded-lg p-1">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-md lg:text-xl bg-yellow-100/10 py-1 px-2 rounded-lg border-transparent text-slate-100 ">
          I am a passionate software engineer with a deep love for coding. My
          background as a touring musician and kitchen manager has instilled in
          me a unique perspective on teamwork, problem-solving, and the ability
          to adapt to new environments. <br /> <br /> When I'm not coding you'll most
          likely find me exploring new places, attending concerts, or riding my
          bike. Travel and new experiences are a huge part of my life. I believe
          that exposure to different cultures and ways of thinking has helped me
          to approach problems in new and innovate ways. <br /> <br /> Currently, I
          reside in Asheville, North Carolina, where I work with my coding
          partner, Suzie the French Bulldog. I am open to relocating and always
          on the lookout for new opportunities to grow and develop my skills. I
          am excited to continue my journey in the tech industry and can't wait
          to see where it takes me next.
        </p>
      </div>
    </motion.div>
  );
};
export default About;
