import React from 'react'

const Features = () => {
  return (
    <>
        <div className="container mt-5 pt-5 pb-5">
            <div className="container col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Visualize your audience lifecycle</h1>
                        <p className="text-secondary">
                            Every user who engages with your campaign is added as an audience, every of their activity 
                            is tracked, you can track their lifetime engagements from one simple dashboard
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/visualize-audience-audience-page.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 mt-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Organize your audience into segments</h1>
                        <p className="text-secondary">
                        Segment your audience based on location, demographics, interests, behaviour and maximize on their engagements.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/organize-your-audience-into-segments.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Targeted actions and automations</h1>
                        <p className="text-secondary">
                            Create actions like sending emails to all or part of your audience, configure automations 
                            to take care of redundant but important tasks.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/targeted-actions.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Features