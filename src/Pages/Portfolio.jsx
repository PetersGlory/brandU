import React from 'react'
import ExplorePage from '../Components/PortfolioComponents/ExplorePage'
import Hero from '../Components/PortfolioComponents/Header'
import Header from '../Components/HomeComponents/Header'
import Footer from '../Components/HomeComponents/Footer'
import Newsletter from '../Components/LandPageComponent/Newsletter'

const Portfolio = () => {
  return (
    <>
        <Header />
        <Hero />
        <ExplorePage />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Portfolio