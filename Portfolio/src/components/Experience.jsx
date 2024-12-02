import { EXPERIENCES } from "../constants"
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 flex flex-col justify-center items-center">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration : 1}}
        className="my-20 text-center text-5xl font-semibold">Experience</motion.h1>
        <div className="max-w-2xl"> 
            {EXPERIENCES.map((i,index) => (
                <motion.div key={index} 
                whileHover={{scale:1.1}}
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1, x:10}}
                transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
                className="mb-8 flex flex-wrap lg:justify-center p-3 border-[1px] rounded-xl border-neutral-600 items-center shadow-[6px_4px_0px_0px_#CAA6F7]" > 
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration : 1 }}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-200">{i.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration : 1.5}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {i.role} - <span className="text-sm text-purple-200">
                                {i.company}
                            </span>
                        </h6>
                        <p className="mb-4 text-neutral-100">{i.description}</p>
                        {i.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 py-1 px-1 text-sm font-medium text-purple-800">{tech}</span>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Experience