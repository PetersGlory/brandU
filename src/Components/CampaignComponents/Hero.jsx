import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <section id="home" className="hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="hero-content text-white">
                            <h1 className="wow fadeInLeft text-white" data-wow-delay=".4s">
                            Create campaigns to meet your strategic goal
                            </h1>
                            <p className="wow fadeInLeft text-white" data-wow-delay=".6s">
                            Create innovative campaigns to build awareness, leads, or other strategic brand goals.
                            </p>
                            <div className="button wow fadeInLeft" data-wow-delay=".8s">
                                <Link to="/register" className="btn">TRY FOR FREE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                            <img src="https://inbranded.co/image/create-campaign.png" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero