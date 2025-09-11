import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects.jsx'
import { useGSAP } from '@gsap/react'
import Navber from './components/navigastion/Navber.jsx'

function App() {

 


  return (
    <div >   
    <Navber/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App