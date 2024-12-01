import {HERO_CONTENT} from "../constants/index"
import profilePic from "../assets/kevinRushProfile.png"
import {motion} from "framer-motion"

const conatainer = (delay) => ({
    hidden : {x: -100, opacity:0},
    visible : {
        x:0,
        opacity:1,
        transition : { duration:0.5, delay : delay},
    },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={conatainer(0)}
                    initial="hidden"
                    animate="visible"
                    className="text-6xl font-medium tracking-tight lg:text-8xl lg:mt-8 hover:scale-110 cursor-pointer transform-smooth">Divyanshu</motion.h1>
                    <motion.h1 
                    variants={conatainer(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-medium tracking-tight lg:text-8xl hover:scale-110 cursor-pointer transform-smooth">chaudhary</motion.h1>
                    <motion.span 
                    variants={conatainer(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-500 via-slate-200 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight font-semibold">Full Stack Developer</motion.span>
                    <motion.p 
                    variants={conatainer(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tight">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-11 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1 , delay:1.2}}
                    src={profilePic} alt="divyanshu" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero