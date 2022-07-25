import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-footer f-about">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo/logo.png" alt="#" />
                                    </a>
                                </div>
                                <p>Making the world a better place through constructing elegant hierarchies.</p>
                                <ul className="social">
                                    <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-youtube"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Why RebrandU?</h3>
                                        <ul>
                                            <li><Link to="/audience">Audience</Link></li>
                                            <li> <Link to="/campaign">Campaign</Link></li>
                                            <li><Link to="/automation">Automation</Link></li>
                                            <li><Link to="/integration">Integrations</Link></li>
                                            <li><Link to="/rebrandu-vs-crm">RebrandU vs CRM</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Product</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">RebrandU</a></li>
                                            {/* <li><a href="javascript:void(0)">Documentation</a></li>
                                            <li><a href="javascript:void(0)">Guides</a></li>
                                            <li><a href="javascript:void(0)">API Status</a></li>
                                            <li><a href="javascript:void(0)">Live Support</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Company</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">About Us</a></li>
                                            <li><a href="javascript:void(0)">Our Blog</a></li>
                                            <li><a href="javascript:void(0)">Contact Us</a></li>
                                            <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                            <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Legal</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                                            <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                            <li><a href="javascript:void(0)">Catering Services</a></li>
                                            <li><a href="javascript:void(0)">Customer Relations</a></li>
                                            <li><a href="javascript:void(0)">Innovation</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer