import { useState } from 'react'
import NavBar from './Component/NavBar/NavBar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Projects from './Component/Project/Project'
import WorkExperience from './Component/Experiece/Experience'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'


function App() {

  return (
    <main className='mx-auto relative'>
      <NavBar/>
      <Hero/>
      <About/>
      <WorkExperience/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </main>
  )
}

export default App
