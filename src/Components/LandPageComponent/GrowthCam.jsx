import React from 'react'

const GrowthCam = () => {
  return (
    <>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="container mt-5 pb-5 campaign">
                <div className="row">
                    <div className="col-md col-sm-12 text-center pt-5">
                        <center>
                            <div className="card-icon text-center border">
                                <i className="bi bi-people"></i>
                            </div>
                        </center>
                        <h4 className="text-">Audience</h4>
                        <p className="lead">
                            Put your audience at the heart of everything you do, grow them and use their insights to 
                            make smarter decisions on campaigns.
                        </p>
                        <a href="#" className="text-start" style={{color: "#e46700e3", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a>
                    </div>
                    <div className="col-md col-sm-12 text-center pt-5">
                        <center>
                            <div className="card-icon border">
                                <i className="bi bi-send"></i>
                            </div>
                        </center>
                        <h4 className="text-center">Campaign</h4>
                        <p className="lead">
                            Create innovative campaigns to build awareness, leads, or other strategic brand goals. 
                            Campaign types include Image, Contest, Survey, Email, and many more.
                        </p>
                        <a href="#" className="text-start" style={{color: "#e46700e3", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a>
                    </div>
                    <div className="col-md col-sm-12 text-center pt-5">
                        <center>
                            <div className="card-icon border">
                                <i className="bi bi-tools"></i>
                            </div>
                        </center>
                        <h4 className="text-center">Automation</h4>
                        <p className="lead">
                            Automate a series of actions based on events or trends. Example is to generate a personalized 
                            badge whenever a new audience is added and deliver to their email
                        </p>
                        <a href="#" className="text-start" style={{color: "#e46700e3", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://media.istockphoto.com/photos/financial-growth-bar-on-white-reflective-surface-picture-id916567374?b=1&k=20&m=916567374&s=170667a&w=0&h=bIVKrumRpgnucIp4DI1fTHgPC7kPizdztv3o4XCziXU=" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
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

    </>
  )
}

export default GrowthCam