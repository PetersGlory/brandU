import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div id="home" className="hero-area">
            <div className="container col-xxl-8 pt-5 pb-5">
                <div className="px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold text-primary">Our Portfolio</h1>
                    <div className="col-lg-10 mx-auto">
                    <p className="mb-4 text-secondary">
                    We are proud show you some of the magic we've made
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/register" className="btn btn-primary text-white btn-lg px-4 gap-3">
                            TRY FOR FREE
                        </Link>
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
        </div>
    </>
  )
}

export default Hero