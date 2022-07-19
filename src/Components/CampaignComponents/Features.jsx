import React from 'react'

const Features = () => {
  return (
    <>
        <section id="features" className="features section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">Features</h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">Your Experience Gets Better And Better Over Time.
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                            <i className="lni lni-cloud-upload"></i>
                            <h3>Audience</h3>
                            <p>
                                Put your audience at the heart of everything you do, grow them and use their insights 
                                to make smarter decisions on campaigns.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                            <i className="lni lni-lock"></i>
                            <h3>Campaign</h3>
                            <p>
                                Create innovative campaigns to build awareness, leads, or other strategic brand goals. 
                                Campaign types include Image, Contest, Survey, Email, and many more.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                            <i className="lni lni-reload"></i>
                            <h3>Automation</h3>
                            <p>
                                Automate a series of actions based on events or trends. Example is to generate a 
                                personalized badge whenever a new audience is added and deliver to their email
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-achievement section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                        <div className="title">
                            <h2>Try the platform for user focused brands</h2>
                            {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                        
                        <div className="button add-list-button">
                            <a href="#" className="btn border">Get Started</a>
                            <a href="#" className="btn border">Talk to Sales</a>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div class="button wow fadeInUp" data-wow-delay=".6s">
                                    <a href="javascript:void(0)" class="btn">Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div class="button wow fadeInUp" data-wow-delay=".6s">
                                    <a href="javascript:void(0)" class="btn">Talk to Sales</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features