import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="container-fluid">
            <footer className="py-5 container">
                <div className="row">
                <div className="col-md-3 col-sm-12">
                    <h5>Why Inbranded?</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Inbranded vs CRM</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Emails with Inbranded</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Integrations</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-12">
                    <h5>Product</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Inbranded</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Getdp</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">ClassicTools</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-12">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h5>Company</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>&copy; Copyright 2022 BrandU Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    </>
  )
}

export default Footer