import {HERO_CONTENT} from "../constants/index"

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-6xl font-medium tracking-tight lg:text-8xl lg:mt-8 hover:scale-110 cursor-pointer transform-smooth">Divyanshu</h1>
                    <h1 className="pb-16 text-6xl font-medium tracking-tight lg:text-8xl hover:scale-110 cursor-pointer transform-smooth">chaudhary</h1>
                    <span className="bg-gradient-to-r from-pink-500 via-slate-200 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight font-semibold">Full Stack Developer</span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-11 lg:p-8">
                <div className="flex justify-center">
                    <img src={profilePic} alt="divyanshu" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero