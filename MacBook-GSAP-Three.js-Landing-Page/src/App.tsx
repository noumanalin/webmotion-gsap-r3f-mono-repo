import { lazy } from "react" 
import Navbar from "./components/Navbar"

const Footer = lazy(() => import("./components/Footer"))



const App = () => {
  return (
    <>
      <Navbar />
      <main>
        Main App
      </main>
      <Footer />
    </>
  )
}

export default App