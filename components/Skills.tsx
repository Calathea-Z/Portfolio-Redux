import Skill from "./Skill"
import { motion } from "framer-motion"


type Props = {}
const Skills = (props: Props) => {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row md-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-slate-300 text-2xl'>
            Skills
        </h3>
        
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-5'>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          
        </div>
    </motion.div>
  )
}
export default Skills