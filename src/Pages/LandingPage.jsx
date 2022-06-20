import React from 'react'
import Automation from '../Components/LandPageComponent/Automation'
import Footer from '../Components/LandPageComponent/Footer'
import GrowthCam from '../Components/LandPageComponent/GrowthCam'
import Hero from '../Components/LandPageComponent/Hero'
import Navbar from '../Components/LandPageComponent/Navbar'
import Newsletter from '../Components/LandPageComponent/Newsletter'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <GrowthCam />
        <Automation />
        <Newsletter />
        <Footer />
    </>
  )
}

export default LandingPage