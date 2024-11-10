import { useState } from 'react'
import NavBar from './Component/NavBar/NavBar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'


function App() {

  return (
    <main className='mx-auto relative'>
      <NavBar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
