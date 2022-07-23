import React from 'react'
import Features from '../Components/AudienceComponents/Features'
import Header from '../Components/HomeComponents/Header'
import Footer from '../Components/HomeComponents/Footer'
import Hero from '../Components/AudienceComponents/Hero'
import Newsletter from '../Components/AudienceComponents/Newsletter'
import Pricing from '../Components/AudienceComponents/Pricing'
import Automation from '../Components/LandPageComponent/Automation'

const Campaign = () => {
  return (
    <>
        <Header />
        <Hero />
        <Features />
        <Automation />
        <Pricing />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Campaign