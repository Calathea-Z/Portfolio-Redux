import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
}
const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{
            opacity: 1,
            x: 0,
        }}
        src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png'
        className='rounded-full border border-slate-400 object-cover w-[76px] h-[76px] xl:w-[76px] xl:h-[76px] filter group-hover:grayscale-[30%] transition duration-300 ease-in-out'
        />
    </div>
  )
}
export default Skill