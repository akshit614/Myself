import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between py-6 items center">
        <div className="flex felx-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-4 flex items-center gap-6 text-3xl">
        <FaLinkedin className="hover:text-neutral-50"></FaLinkedin>
        <FaGithub className="hover:text-neutral-50"></FaGithub>
        <FaTwitter className="hover:text-neutral-50"></FaTwitter>
        </div>
    </nav>
  )
}

export default Navbar