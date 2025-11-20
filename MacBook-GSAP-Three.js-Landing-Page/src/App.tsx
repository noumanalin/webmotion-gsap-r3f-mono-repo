import { lazy } from "react" 
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"

const Footer = lazy(() => import("./components/Footer"))



const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection/>
        Main App
        <div className="h-screen w-screen bg-amber-400"></div>
        <div className="h-screen w-screen bg-amber-800"></div>

      </main>
      <Footer />
    </>
  )
}

export default App