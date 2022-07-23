import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div id="home" className="hero-area">
            <div className="container col-xxl-8 pt-5 pb-5">
                <div className="px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold text-white">A faster, more reliable way of brand engagement</h1>
                    <div className="col-lg-10 mx-auto">
                    <p className="mb-4 text-white">
                    You could dawdle on connecting with customers Or you can grow your brand with real customer engagements with Inbranded.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/register" className="btn btn-primary text-white btn-lg px-4 gap-3">
                            TRY FOR FREE
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero