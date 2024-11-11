import { useState } from 'react'
import NavBar from './Component/NavBar/NavBar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Projects from './Component/Project/Project'


function App() {

  return (
    <main className='mx-auto relative'>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App
