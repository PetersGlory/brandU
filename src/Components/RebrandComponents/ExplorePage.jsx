import React from 'react'
import { Link } from 'react-router-dom'
const ExplorePage = () => {
  return (
    <>
       <div className="container mt-5 pt-5 pb-5">
            <div className="container-fluid col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/dynamic-platform.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Dynamic platform for dynamic business needs</h1>
                        <p className="text-secondary">
                        Inbranded allows you to create different campaign types for different business needs. From lead generation through form and image campaigns, to lead conversion via email campaign. CRM focuses on tracking while we focus on real engagement
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Visualize your audience lifecycle</h1>
                        <p className="text-secondary">
                        With a unified platform for building engagement, you can publish campaigns and actively visualize how your audience responds to campaigns rather than passively track data points without context.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/visualize-audience.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="container-fluid col-xxl-8 mt-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://inbranded.co/image/convert-leads-to-customers.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="display-6 fw-bold lh-1 mb-3">Convert leads to customers</h1>
                        <p className="text-secondary">
                            Interested customers are those who show-up interest through campaigns, this, in turn, 
                            generates leads. Hence, the conversion is organic at InBranded. Hence, the conversion is organic at InBranded as product/service is directed to leads.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExplorePage