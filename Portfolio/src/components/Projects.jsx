import { PROJECTS } from '../constants'
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-500 pb-20'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:100}}
      transition={{duration : 0.5}}
      className='my-20 text-center text-4xl sm:text-5xl font-semibold'>Projects</motion.h1>
      <div>{PROJECTS.map((project,index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration : 1}}
          className='w-full lg:w-1/4'>
          <img className='mb-6 rounded-lg h-28 w-48' src={project.image} width={150} height={150} alt={project.title} />
          </motion.div>
          <motion.div 
          whileHover={{scale:1.1}}
          transition={{ type: "spring", duration: 1, stiffness: 200 }}
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          className='w-full max-w-xl lg:w-3/4 shadow-[8px_6px_0px_0px_#4bdad4] border p-2 rounded-xl pl-2'>
            <h4 className='mb-2 font-semibold text-xl text-cyan-300'>{project.title}</h4>
            <a 
            target="_blank" rel="noopener noreferrer" 
            className='text-xl underline px-2 font-bold text-yellow-300' href={project.livelink}>Live
            </a>
            <a 
            target="_blank" rel="noopener noreferrer"
            className='underline text-lg' 
            href={project.github}>Github
            </a>

            {project.description.map((desc, index) => (
              <div key={index} className='flex'>
                 <span className='mb-4 pl-4'>{desc}</span>
              </div>
            ))}

            {project.technologies.map((tech,index) => (
              <span key={index} className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
            ))}
          </motion.div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects