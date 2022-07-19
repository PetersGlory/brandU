import React from 'react'

const Newsletter = () => {
  return (
    <>
        <section className="section call-action">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                        <div className="cta-content">
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                Join our newsletter
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                Join our newsletter to get information on happenings, product updates and more.    
                            </p>
                            <div className="button wow fadeInUp" data-wow-delay=".6s">
                                <a href="javascript:void(0)" className="btn">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Newsletter