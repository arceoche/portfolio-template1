{/*import { BrowserRouter, Routes, Route } from 'react-router-dom'*/}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Services from './components/Services'
import About from './components/About'
import CalendlyBadge from './components/CalendlyBadge'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App(){
  return(
    <>
      <div className="mx-auto max-w-[1700px] p-6 md:px-8">
        <Navbar />
        <Hero />
        <Certificates />
        <Projects />
        <Services />
        <About />
        <CalendlyBadge />
        <Contact />
      </div>
      
      <Footer />
    </>

  )
}

export default App