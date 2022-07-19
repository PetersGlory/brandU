import React from 'react'
import ExplorePage from '../Components/ExploreComponents/ExplorePage'
import Hero from '../Components/ExploreComponents/Header'
import Header from '../Components/HomeComponents/Header'
import Footer from '../Components/HomeComponents/Footer'
import Newsletter from '../Components/LandPageComponent/Newsletter'

const Explore = () => {
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

export default Explore