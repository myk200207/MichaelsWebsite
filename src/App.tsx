import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar, Hero, About } from './components';


function App() {

  return (
   <div>
    <NavBar/>
    <Hero/>
    <About/>
   </div>
  )
}

export default App
