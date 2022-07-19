import React from 'react'

const Hero = () => {
  return (
    <>
        <div id="home" className="hero-area">
            <div className="container col-xxl-8 pt-5 pb-5">
                <div className="px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold text-white">Explore</h1>
                    <div className="col-lg-10 mx-auto">
                    <p className="mb-4 text-white">
                        Explore the trending templates and campaigns. With Inbranded, you can customize any template in to 
                        your liking and use to publish interesting campaigns
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary text-white btn-lg px-4 gap-3">
                            TRY FOR FREE
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero