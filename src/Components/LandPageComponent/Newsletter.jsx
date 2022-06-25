import React from 'react'

const Newsletter = () => {
  return (
    <>
        <div className="bg-primary p-3">
            <div className="px-4 py-5 my-5 text-center row justify-content-center align-items-center">
                    <h1 className="display-5 fw-bold col-md-8 text-white">Try the platform for user focused brands</h1>
                <div className="col-lg-6 mx-auto">
                {/* <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg text-white px-4 gap-3">Try for free</button>
                        <button type="button" className="btn btn-outline-white btn-lg px-4">Talk to Sales</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-light p-3">
            <div className="px-4 py-5 my-5 text-center row justify-content-center align-items-center">
                    <h1 className="display-5 fw-bold col-md-8">Join our newsletter</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Join our newsletter to get information on happenings, product updates and more.
                </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Subscribe</button>
                    </div>
                    <p className="text-secondary">
                    Your data is protected. We never spam in your inbox
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Newsletter