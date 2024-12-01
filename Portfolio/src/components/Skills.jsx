import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiDjango, SiTypescript, SiPostman, SiExpress, SiPrisma } from "react-icons/si";
import { FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-32">
        <h1 className="my-20 text-center text-5xl text-neutral-100 font-bold">
            Code : Skills
        </h1>
        <div className="flex flex-wrap flex-col items-center justify-center gap-10">
            <div className="flex gap-8 flex-wrap items-center justify-center">
                <div className="rounded-lg border border-purple-400 shadow-[6px_6px_0px_0px_#CAA6F7] border-solid p-1 md:p-2 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth px-4">
                    <RiReactjsLine className="text-3xl text-cyan-300"/> 
                    <p className="text-white">ReactJs</p>
                </div>
                <div className="rounded-lg border border-yellow-300 shadow-[6px_6px_0px_0px_#dada44] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <IoLogoJavascript className="text-3xl text-yellow-300"/>
                    <p className="text-white">JavaScript</p>
                </div>
                <div className="rounded-lg border border-green-400 shadow-[6px_6px_0px_0px_#6fd044] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <SiMongodb className="text-3xl text-green-400"/>
                    <p className="text-white">MongoDB</p>
                </div>
                <div className="rounded-lg border border-green-400 shadow-[6px_6px_0px_0px_#6fd044] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <FaNodeJs className="text-3xl text-green-600"/>
                    <p className="text-white">NodeJs</p>
                </div>
                <div className="rounded-lg border border-yellow-300 shadow-[6px_6px_0px_0px_#dada44] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <FaPython className="text-3xl text-yellow-400"/>
                    <p className="text-white">Python</p>
                </div>
                
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center">
                <div className="rounded-lg border border-cyan-400 shadow-[6px_6px_0px_0px_#4bdad4] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <BiLogoPostgresql className="text-3xl text-cyan-300"/>
                    <p className="text-white">Postgres</p>
                </div>
                <div className="rounded-lg border border-purple-400 shadow-[6px_6px_0px_0px_#CAA6F7] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <SiTypescript className="text-3xl text-blue-600 bg-white rounded"/>
                    <p className="text-white">TypeScript</p>
                </div>
                
                <div className="rounded-lg border border-cyan-400 shadow-[6px_6px_0px_0px_#4bdad4] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <SiExpress className="text-3xl text-cyan-300"/>
                    <p className="text-white">ExpressJs</p>
                </div>
                
                <div className="rounded-lg border border-red-400 shadow-[6px_6px_0px_0px_#df2121] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <FaGitAlt className="text-3xl text-red-600"/>
                    <p className="text-white">Git</p>
                </div>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center">
               
                <div className="rounded-lg border border-orange-400 shadow-[6px_6px_0px_0px_#f1bb47] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <FaAws className="text-3xl text-amber-700"/>
                    <p className="text-white">AWS</p>
                </div>
                
                <div className="rounded-lg border border-green-400 shadow-[6px_6px_0px_0px_#6fd044] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <SiDjango className="text-3xl text-green-600"/>
                    <p className="text-white">Django</p>
                </div>
                <div className="rounded-lg border border-cyan-400 shadow-[6px_6px_0px_0px_#4bdad4] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <VscVscode className="text-3xl text-blue-600"/>
                    <p className="text-white">Vscode</p>
                </div>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center">
                <div className="rounded-lg border border-purple-400 shadow-[6px_6px_0px_0px_#CAA6F7] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                        <SiPrisma className="text-3xl text-cyan-300"/>
                        <p className="text-white">Prisma</p>
                </div>
                <div className="rounded-lg border border-orange-400 shadow-[6px_6px_0px_0px_#f1bb47] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                    <SiPostman className="text-3xl text-orange-500 bg-white rounded-full"/>
                    <p className="text-white">Postman</p>
                </div>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center">
                <div className="rounded-lg border border-purple-400 shadow-[6px_6px_0px_0px_#dd21df] border-solid p-1 md:p-2 px-4 flex items-center justify-center gap-2 md:min-w-[160px] min-w-[100px] hover:scale-110 cursor-pointer transform-smooth">
                        <SiPrisma className="text-3xl text-cyan-300"/>
                        <p className="text-white">More</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills