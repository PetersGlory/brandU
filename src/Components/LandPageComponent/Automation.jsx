import React from 'react'

const Automation = () => {
  return (
    <>
        <div className="bg-light mt-5 pt-5 pb-5">
            <div className="container col-xxl-8 bg-light mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/people-collage-min.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-6 fw-bold lh-1 mb-3">For Brands of all Sizes</h1>
                        <p className="lead">
                            From SMEs to established brands, Inbranded remains committed to providing the best tools 
                            to build your brand and engage your users.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 bg-light">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/automation-mockup-homepage.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Automation is the new Gold</h1>
                        <p className="lead">
                            Perform the right action with the right content at the right moment without the extra effort. 
                            Set up interesting automations like:
                        </p>
                        <ul className="mt-3">
                            <li className="nav-item mt-3">
                                When new audience is added, generate a personalized badge and deliver to their email 
                                with a personalized message
                            </li>
                            <li className="nav-item mt-3">
                                On my audience birthday, generate a birthday badge for them and send to their email, 
                                also notify me on Slack
                            </li>
                            <li className="nav-item mt-3">
                                On every campaign response, serialize the data and put it on Google Sheets.
                            </li>
                        </ul>
                        <div className="d-grid gap-2 pt-3 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Automation