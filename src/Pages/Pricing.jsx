import React, {useState} from 'react'
import Footer from '../Components/LandPageComponent/Footer'
import Navbar from '../Components/LandPageComponent/Navbar'
import Newsletter from '../Components/LandPageComponent/Newsletter'
import Hero from '../Components/PricingComponents/Hero'
import PricingCard from '../Components/PricingComponents/PricingCard'

const Pricing = () => {
  const [pricingCard, setPricingCard] = useState([
    {title:"10k Credit", li1:"Up to ", li2:" - 4k image generation or", li3:"- 6k email sending", amount:"9.99$"},
    {title:"22k Credit", li1:"Up to ", li2:" - 8k image generation or", li3:"- 14k email sending", amount:"19.99$"},
    {title:"60k Credit", li1:"Up to ", li2:" - 24k image generation or", li3:"- 40k email sending", amount:"49.99$"},
    {title:"150k Credit", li1:"Up to ", li2:" - 60k image generation or", li3:"- 100k email sending", amount:"99.99$"},
    {title:"350k Credit", li1:"Up to ", li2:" - 140k image generation or", li3:"- 230k email sending", amount:"199.99$"},
    {title:"1M Credit", li1:"Up to ", li2:" - 400k image generation or", li3:"- 600k email sending", amount:"499.99$"},
  ])
  return (
    <>
        <Navbar />
        <Hero />
        
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col-md-8 col-sm-12 row row-cols-1 row-cols-md-3 mb-3 justify-content-center">
            {pricingCard && pricingCard.map((pricing, index) =>(
              <PricingCard
              key={index}
              title={pricing.title}
              li1={pricing.li1}
              li2={pricing.li2}
              li3={pricing.li3}
              amount={pricing.amount}
              />
            ))}
          </div>
          <div className="col-md-4 col-sm-12 pt-5">
              <h3 className="text-dark text-start fw-bold pt-5">Funding Your Account?</h3>
              <p className="text-start">
                Here is a basic credit plan, you can purchase as much as you need and also check below for our 
                pricing math to see how much you get for your chosen price.
              </p>
              <a href="#" className="text-start" style={{color: "#e46700e3 !important", fontWeight:"bold"}}>Our Pricing math <i className="bi bi-arrow-up"></i></a>
          </div>
        </div>
        <Newsletter />
        <Footer />
    </>
  )
}

export default Pricing