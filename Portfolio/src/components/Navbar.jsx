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
          <a href="">
            <FaLinkedin className="hover:text-neutral-50"></FaLinkedin>
          </a>
          <FaGithub className="hover:text-neutral-50"></FaGithub>
          <BsTwitterX className="hover:text-neutral-50"></BsTwitterX>
        </div>
    </nav>
  )
}

export default Navbar