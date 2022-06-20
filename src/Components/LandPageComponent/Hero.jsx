import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="bg-light">
            <div className="container col-xxl-8 bg-light">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/header-1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Build your brand, engage your audience</h1>
                        <p className="lead">
                            Build a focused audience by engaging them through tools that keeps them always interested.
                        </p>
                        <div className="d-grid gap-2 pt-3 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                Try for free
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