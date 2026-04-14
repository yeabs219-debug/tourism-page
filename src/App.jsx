import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/hero'
import Navbar from './components/navbar'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
   <Hero/>
    </>
  )
}

export default App
