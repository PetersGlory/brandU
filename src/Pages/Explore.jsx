import React from 'react'
import ExplorePage from '../Components/ExploreComponents/ExplorePage'
import Header from '../Components/ExploreComponents/Header'
import Footer from '../Components/LandPageComponent/Footer'
import Navbar from '../Components/LandPageComponent/Navbar'
import Newsletter from '../Components/LandPageComponent/Newsletter'

const Explore = () => {
  return (
    <>  
        <Navbar />
        <Header />
        <ExplorePage />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Explore