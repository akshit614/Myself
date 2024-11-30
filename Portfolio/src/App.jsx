import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1.5px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App