import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-500 pb-20 ">
        <h2 className="my-20 text-center font-semibold text-neutral-400 text-5xl">About 
            <span className="pl-2 text-white">Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-3xl h-96 " src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text:lg sm:text-xl  font-semibold text-purple-400">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About