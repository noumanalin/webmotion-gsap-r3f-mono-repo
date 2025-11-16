import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother); 

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <div className="h-screen w-screen"></div>
        main
      </main>
    </>
  )
}

export default App