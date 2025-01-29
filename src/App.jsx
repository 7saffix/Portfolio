import { Route, Routes } from "react-router-dom"

import Navbar from "./components/navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Project from "./pages/Project"
import Footer from "./components/Footer"


function App() {
 

  return (
    <div className="max-w-[1200px] mx-auto overflow-x-hidden">
   
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
