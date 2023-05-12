import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App