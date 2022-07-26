import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import Hero from '../components/HeroSection'
import Sections from '../components/InfoSection'
import {
  homeObjFour,
  homeObjOne,
  homeObjTwo,
} from '../components/InfoSection/data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Sections {...homeObjOne} />
      <Sections {...homeObjTwo} />
      <Services />
      <Sections {...homeObjFour} />
      <Footer />
    </>
  )
}

export default Home
