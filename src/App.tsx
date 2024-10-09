import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar, Hero, About,Skills } from './components';


function App() {

  return (
   <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
   </div>
  )
}

export default App
