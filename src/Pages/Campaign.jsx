import React from 'react'
import Features from '../Components/AudienceComponents/Features'
import Footer from '../Components/AudienceComponents/Footer'
import Header from '../Components/HomeComponents/Header'
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