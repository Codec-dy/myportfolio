import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectPage from './pages/ProjectPage'
import Certificates from './pages/Certificates'
import Certificate from './pages/Certificate'
import Footer from './components/Footer'
import GraphicDesign from './pages/GraphicDesign'
import { AnimatePresence,motion } from 'framer-motion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AnimatePresence mode="wait">
    <div className='p-4 sm:px-[5vw] '>
      <Navbar />
      <Routes>
        <Route path="/" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Landing /></motion.div>} />
        <Route path="/contact" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Contact /></motion.div>} />
        <Route path="/projects" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Projects /></motion.div>} />
        <Route path="/project/:id" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><ProjectPage /></motion.div>} />
        <Route path="/about" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><About /></motion.div>} />
        <Route path="/certificates" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Certificates /></motion.div>} />
        <Route path="/certificate" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Certificate /></motion.div>} />
        <Route path="/project/graphicdesign/:id" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><GraphicDesign/></motion.div>} />
      </Routes>
      <Footer />
    </div>
    </AnimatePresence>
  )
}

export default App
