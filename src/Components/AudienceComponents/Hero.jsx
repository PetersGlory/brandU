import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <section id="home" className="hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                            <img src="https://inbranded.co/image/track-your-audience.png" alt="#" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="hero-content">
                            <h1 className="wow fadeInLeft text-primary" data-wow-delay=".4s">
                                Track your audience and build strong engagement
                            </h1>
                            <p className="wow fadeInLeft text-secondary" data-wow-delay=".6s">
                                Manage your audience with one simple yet advance tool.    
                            </p>
                            <div className="button wow fadeInLeft" data-wow-delay=".8s">
                                <Link to="/register" className="btn">TRY FOR FREE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
            <div className="bubble x6"></div>
            <div className="bubble x7"></div>
            <div className="bubble x8"></div>
            <div className="bubble x9"></div>
            <div className="bubble x10"></div>
        </section>
    </>
  )
}

export default Hero