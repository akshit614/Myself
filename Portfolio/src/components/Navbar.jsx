import { FaLinkedin,FaGithub } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="mb-10 justify-center md:justify-between py-6 items hidden md:flex">
        <div className="flex felx-shrink-0 items-center">
          <p className="text-4xl pl-2 pr-6  text-white">
            DC
          </p>
        </div>
        <div className="m-4 flex items-center gap-20 text-3xl text-white">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/divyanshu-chaudhary-4aaa53222/">
            <FaLinkedin className="hover:scale-125 duration-200"></FaLinkedin>
          </a >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/akshit614">
          <FaGithub className="hover:scale-125 duration-200"></FaGithub>
          </a>
          <a href=" https://x.com/Divyansh4code?t=iHA0YtK_nJXxg5gfHu2qeg&s=08 " target="_blank" rel="noopener noreferrer">
          <BsTwitterX className="hover:scale-125 duration-200"></BsTwitterX>
          </a>
        </div>
    </nav>
  )
}

export default Navbar