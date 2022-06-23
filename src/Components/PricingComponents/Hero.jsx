import React from 'react'

const Hero = () => {
    const handleChange=()=> {
        var imgGen = document.getElementById("img-gen").value
        var emailSend = document.getElementById("email-send").value

        document.getElementById("credit-needed").value = emailSend * 1.5 + imgGen * 2.5
    }
// handleChange();
  return (
    <>
        <div className="bg-light">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <div className="pricing-top-section-body-second">
                            <h5>How does the credit work?</h5>
                            <hr />
                            <div className="pricing-top-section-body-second-row">
                                <p className="pricing-top-section-body-second-row-label">One image generated =</p>
                                <h5 className="pricing-top-section-body-second-row-content">2.5 Credit</h5>
                            </div>
                            <div className="pricing-top-section-body-second-row">
                                <p className="pricing-top-section-body-second-row-label">One email sent = </p>
                                <h5 className="pricing-top-section-body-second-row-content">1.5 Credit</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Credit Breakdown</h1>
                        <p className="lead">
                            We have simplified our pricing to a credit based billing to enable you pay only for what you need. 
                            We have done the simple math, but you can purchase as much as you may need.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">
                    Simple pricing, unmatched value
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                    Our new credit billing gives you the flexibility of a simpler pricing.
                    </p>
                </div>
            </div>
        </div>

        <section className="pricing-footer-section" id="pricingMath">
            <div className="container">
                <div className="pricing-footer-section-body">
                    <div className="pricing-footer-section-body-card">
                        <h6>IF YOU WANT</h6>
                        <div className="pricing-footer-section-body-card-input-div">
                            <input type="number" id="img-gen" defaultValue={"1000"} onKeyUp={handleChange}/>
                            <label htmlFor="img-gen">Generated image</label>
                        </div>
                        <div className="pricing-footer-section-body-card-input-div">
                            <input type="number" id="email-send" defaultValue={"500"} onKeyUp={handleChange}/>
                            <label htmlFor="email-send">Email sending</label>
                        </div>
                        <h6>YOU WILL NEED</h6>
                        <div className="pricing-footer-section-body-card-input-div">
                            <img src="https://inbranded.co/image/check-circle.svg" style={{height: "18px",marginRight: "10px"}}
                                alt="check circle"/>
                            <input type="number" id="credit-needed" readonly="readonly"/>
                            <label htmlFor="credit-needed">Total credit</label>
                        </div>
                    </div>
                    <div className="pricing-top-section-body-first">
                        <h2 className="pricing-section-header-1">Our Pricing math</h2>
                        <p>
                            Want to know how many credit you need for what?
                            Enter your requirement to see how many credit you need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero