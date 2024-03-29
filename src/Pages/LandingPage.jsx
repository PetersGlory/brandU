import React from 'react'
import Features from '../Components/HomeComponents/Features'
import Footer from '../Components/HomeComponents/Footer'
import Header from '../Components/HomeComponents/Header'
import Hero from '../Components/HomeComponents/Hero'
import Newsletter from '../Components/HomeComponents/Newsletter'
import Automation from '../Components/LandPageComponent/Automation'

const LandingPage = () => {
  return (
    <>
        <Header />
        <Hero />
        <Features />
        <Automation />
        <Newsletter />
        <Footer />
    </>
  )
}

export default LandingPage