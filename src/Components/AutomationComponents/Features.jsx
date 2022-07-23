import React from 'react'

const Features = () => {
  return (
    <>
        <div className="container mt-5 pt-5 pb-5">
            <div className="container col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Customer Journeys</h1>
                        <p className="text-secondary">
                        Configure workflows with actions to be taken based on your audience's behaviour.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/customer-journey-map.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 mt-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Configure Actions</h1>
                        <p className="text-secondary">
                        Configure actions triggered by events or with data. For instance, when a new audience is added to your campaign, generate a personalized badge and deliver to their emails with a personalized message.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/configure%20actions.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
{/* 
            <div className="container col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Surveys</h1>
                        <p className="text-secondary">
                        Create surveys to get insightful feedback directly from your audience.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/survey-page-mockup.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Features