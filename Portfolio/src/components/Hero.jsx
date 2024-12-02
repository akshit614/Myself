import profilePic from "../assets/kevinRushProfile.png"
import { FaLinkedin,FaGithub } from "react-icons/fa"
import { LuMail } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs"
import {motion} from "framer-motion"

const conatainer = (delay) => ({
    hidden : {x: -100, opacity:0},
    visible : {
        x:0,
        opacity:1,
        transition : { duration:0.5, delay : delay},
    },
})

const iconVarients = (d) => ({
    initial : {y: -7 },
    animate : {
        y : [7, -7],
        
        transition : {
            duration : d,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse"
        }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35 md:px-36">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-start">
                    <motion.h1 
                    variants={conatainer(0)}
                    initial="hidden"
                    animate="visible"
                    className="pt-10 text-5xl sm:text-6xl font-medium tracking-tight lg:text-8xl lg:mt-8 hover:scale-110 cursor-pointer transform-smooth">Divyanshu</motion.h1>
                    <motion.h1 
                    variants={conatainer(0)}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl pb-16 font-medium tracking-tight lg:text-8xl hover:scale-110 cursor-pointer transform-smooth">chaudhary</motion.h1>
                    <motion.span 
                    variants={conatainer(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-500 via-slate-200 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight font-semibold">Full Stack dev \ ML</motion.span>
                    <motion.span 
                    variants={conatainer(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-red-500 via-slate-200 to-cyan-500 bg-clip-text text-4xl text-transparent tracking-tight font-semibold pt-5">Pull Code Push</motion.span>
                    <motion.div 
                    variants={conatainer(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 pl-2 gap-8 text-yellow-200 text-4xl flex max-w-xl py-6 font-light tracking-tight">
                        <motion.a 
                        variants={iconVarients(2)}
                        initial="initial"
                        animate="animate"
                        href="https://www.linkedin.com/in/divyanshu-chaudhary-4aaa53222/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:scale-125  duration-200"></FaLinkedin>
                        </motion.a>
                        <motion.a 
                        variants={iconVarients(1)}
                        initial="initial"
                        animate="animate"
                        target="_blank" rel="noopener noreferrer"
                        href="https://github.com/akshit614">
                            <FaGithub className="hover:scale-125 duration-200"></FaGithub>
                        </motion.a>
                        <motion.a 
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate" 
                        target="_blank" rel="noopener noreferrer"
                        href="https://x.com/Divyansh4code?t=iHA0YtK_nJXxg5gfHu2qeg&s=08" >
                            <BsTwitterX className="hover:scale-125 duration-200"></BsTwitterX>
                        </motion.a>
                        <motion.a 
                        variants={iconVarients(1.5)}
                        initial="initial"
                        animate="animate"
                        target="_blank" rel="noopener noreferrer"
                        href="mailto:akkisingh8266@gmail.com?cc=cc@example.com&bcc=bcc@example.com&subject=Meeting&body=Let%20us%20discuss%20further.">
                            <LuMail className="hover:scale-125 duration-200"></LuMail>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-11 lg:p-20 hidden md:block">
                <div className="flex justify-center">
                    <motion.img 
                    variants={iconVarients(1)}
                    initial="initial"
                    animate="animate"
                    transition={{duration:1 , delay:1.2}}
                    src={profilePic} alt="divyanshu" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero