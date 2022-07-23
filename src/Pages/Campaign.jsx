import React from 'react'
import Features from '../Components/CampaignComponents/Features'
import Header from '../Components/HomeComponents/Header'
import Footer from '../Components/HomeComponents/Footer'
import Hero from '../Components/CampaignComponents/Hero'
import Newsletter from '../Components/AudienceComponents/Newsletter'
const Campaign = () => {
  return (
    <>
        <Header />
        <Hero />
        <Features />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Campaign