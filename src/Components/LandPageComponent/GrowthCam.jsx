import React from 'react'

const GrowthCam = () => {
  return (
    <>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://inbranded.co/image/use-inbranded-to-grow.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Use Inbranded to grow your Brand</h1>
                <p className="lead">
                    From acquiring new leads through unique campaigns to reaching them through automations, 
                    Inbranded provides you with the tools to make the most of every lead, converting them from 
                    just an impression to active and engaged users
                </p>
                <div className="d-grid gap-2 d-md-flex mt-2 pt-4 justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Talk to Sales</button>
                </div>
            </div>
            </div>
        </div>

        <div class="container mt-5 pb-5 campaign">
            <div class="row">
                <div class="col-md col-sm-12">
                    <div className="card-icon"><i className="bi bi-people"></i></div>
                    <h4 className="text-start">Audience</h4>
                    <p className="lead">
                        Put your audience at the heart of everything you do, grow them and use their insights to 
                        make smarter decisions on campaigns.
                    </p>
                    <a href="#" className="text-start" style={{color: "#FF0066", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a>
                </div>
                <div class="col-md col-sm-12">
                    <div className="card-icon"><i className="bi bi-send"></i></div>
                    <h4 className="text-start">Campaign</h4>
                    <p className="lead">
                        Create innovative campaigns to build awareness, leads, or other strategic brand goals. 
                        Campaign types include Image, Contest, Survey, Email, and many more.
                    </p>
                    <a href="#" className="text-start" style={{color: "#FF0066", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a>
                </div>
                <div class="col-md col-sm-12">
                    <div className="card-icon"><i className="bi bi-tools"></i></div>
                    <h4 className="text-start">Automation</h4>
                    <p className="lead">
                        Automate a series of actions based on events or trends. Example is to generate a personalized 
                        badge whenever a new audience is added and deliver to their email
                    </p>
                    <a href="#" className="text-start" style={{color: "#FF0066", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default GrowthCam