import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
const ExplorePage = () => {
  return (
    <>
        <div className="container-fluid col-xxl-8 px-4 py-5 bg-white">
            <div className="container mt-5 pb-5 campaign">
                <div className="row">
                    <div className="col-md col-sm-12 text-center pt-5">
                        <center>
                            <div className="card-icon text-center border">
                                <i className="bi bi-upload"></i>
                            </div>
                        </center>
                        <h4 className="fw-bold">Publish</h4>
                        <p className="lead">
                            Publish a campaign in minutes using any of our collections of specially designed templates. 
                            Designs can also be created from scratch using our Design Builder
                        </p>
                        {/* <a href="#" className="text-start" style={{color: "#e46700e3", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a> */}
                    </div>
                    <div className="col-md col-sm-12 text-center pt-5">
                        <center>
                            <div className="card-icon border">
                                <i className="bi bi-share"></i>
                            </div>
                        </center>
                        <h4 className="fw-bold">Share</h4>
                        <p className="lead">
                            Get a sharable link that would your users create their campaign entries. 
                            Campaign can also be integrated into your website
                        </p>
                        {/* <a href="#" className="text-start" style={{color: "#e46700e3", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a> */}
                    </div>
                    <div className="col-md col-sm-12 text-center pt-5">
                        <center>
                            <div className="card-icon border">
                                <i className="bi bi-globe"></i>
                            </div>
                        </center>
                        <h4 className="fw-bold">Track</h4>
                        <p className="lead">
                            Analyse your audience, where they come from, what they do and where they go. 
                            Track visits, clicks and more every step of the way
                        </p>
                        {/* <a href="#" className="text-start" style={{color: "#e46700e3", fontWeight:"bold"}}>Learn more <i className="bi bi-covet-right"></i></a> */}
                    </div>
                </div>
                <center>
                    <Link to="/signup" className="btn mt-5 btn-primary">create campaign</Link>
                </center>
            </div>
        </div>
        <Cards />
            <center>
                <Link to="/explore/template" className="btn mt-5 mb-5 btn-primary">Explore all templates</Link>
            </center>
    </>
  )
}

export default ExplorePage