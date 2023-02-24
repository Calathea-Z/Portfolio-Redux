import { motion } from "framer-motion"

type Props = {}
const Skills = (props: Props) => {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row msx-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-slate-400 text-2xl'>
            Skills
        </h3>
    </motion.div>
  )
}
export default Skills