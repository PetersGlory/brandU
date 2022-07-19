import React from 'react'

const Pricing = () => {
  return (
    <>
        <section id="pricing" className="pricing-table section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">pricing</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Funding Your Account?</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">
                            Here is a basic credit plan, you can purchase as much as you need and also check below 
                            for our pricing math to see how much you get for your chosen price.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-table wow fadeInUp" data-wow-delay=".2s">
                        <div className="table-head">
                            <h4 className="title">10k Credit</h4>
                            <p>All the basics for starting a new business</p>
                            <div className="price">
                                <h2 className="amount">9.99$</h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn text-white">Purchase</a>
                            </div>
                        </div>
                        <div className="table-content">
                            <h4 className="middle-title">Up to</h4>
                            <ul className="table-list">
                                <li><i className="lni lni-checkmark-circle"></i> 4k image generation or</li>
                                <li><i className="lni lni-checkmark-circle"></i> 6k email sending</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-table wow fadeInUp" data-wow-delay=".4s">
                        <div className="table-head">
                            <h4 className="title">22k Credit</h4>
                            <p>All the basics for starting a new business</p>
                            <div className="price">
                                <h2 className="amount">19.99$</h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn text-white">Purchase</a>
                            </div>
                        </div>
                        <div className="table-content">
                            <h4 className="middle-title">Up to</h4>
                            <ul className="table-list">
                                <li><i className="lni lni-checkmark-circle"></i> 8k image generation or</li>
                                <li><i className="lni lni-checkmark-circle"></i> 14k email sending</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-table wow fadeInUp" data-wow-delay=".6s">
                        <div className="table-head">
                            <h4 className="title">60k Credit</h4>
                            <p>All the basics for starting a new business</p>
                            <div className="price">
                                <h2 className="amount">49.99$</h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn text-white">Purchase</a>
                            </div>
                        </div>
                        <div className="table-content">
                            <h4 className="middle-title">Up to</h4>
                            <ul className="table-list">
                                <li><i className="lni lni-checkmark-circle"></i>  24k image generation or</li>
                                <li><i className="lni lni-checkmark-circle"></i> 40k email sending</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    
                    <div className="single-table wow fadeInUp" data-wow-delay=".8s">
                        
                        <div className="table-head">
                            <h4 className="title">150k Credit</h4>
                            <p>All the basics for starting a new business</p>
                            <div className="price">
                                <h2 className="amount">99.99$</h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn text-white">Purchase</a>
                            </div>
                        </div>
                        
                        <div className="table-content">
                            <h4 className="middle-title">Up to</h4>
                            <ul className="table-list">
                                <li><i className="lni lni-checkmark-circle"></i>  60k image generation or</li>
                                <li><i className="lni lni-checkmark-circle"></i> 100k email sending</li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing