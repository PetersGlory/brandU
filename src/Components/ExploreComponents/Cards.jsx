import React from 'react'
import { Link } from 'react-router-dom'
import './template.css'

const Cards = () => {
  return (
    <>
        <main> 
            <div className="container-fluid bg-trasparent my-4 p-3" style={{position: "relative"}}>
                <h3 className="text-dark fw-bold">Top Template <i className="bi bi-arrow-right"></i></h3> 
                <div className="row row-cols-1 row-cols-xs-2 mt-4 row-cols-sm-2 row-cols-lg-4 g-3"> 
                    <div className="col-sm col-md-4"> 
                        <div className="card h-100 shadow-sm"> 
                            <img src="https://image-service.inbranded.co/exports/previews/d-059985b2-4db9-4d12-9f0b-17dfea78c58f/1627165209364.png" className="card-img-top" alt="..." /> 
                            <div className="card-body"> 
                                <h5 className="card-title">
                                    Meritorious Service Award template
                                </h5> 
                                <div className="text-center my-4"> 
                                    <a href="#" className="btn btn-primary">Use Template</a> 
                                </div> 
                            </div> 
                        </div>
                    </div> 
                    <div className="col-sm col-md-4"> 
                        <div className="card h-100 shadow-sm"> 
                            <img src="https://image-service.inbranded.co/exports/previews/d-097eac22-0523-40e1-bdba-34b6752e778b/1634491613304.png" className="card-img-top" alt="..." /> 
                            <div className="card-body"> 
                                <h5 className="card-title">
                                   Movie Time
                                </h5> 
                                <div className="text-center my-4"> 
                                    <a href="#" className="btn btn-primary">Use Template</a> 
                                </div> 
                            </div> 
                        </div>
                    </div> 
                    <div className="col-sm col-md-4"> 
                        <div className="card h-100 shadow-sm"> 
                            <img src="https://image-service.inbranded.co/exports/previews/d-0fc694e2-4eb7-4fb9-88cb-0cb6c0a53a68/1630787496308.png" className="card-img-top" alt="..." /> 
                            <div className="card-body"> 
                                <h5 className="card-title">
                                    Grow your business with us
                                </h5> 
                                <div className="text-center my-4"> 
                                    <a href="#" className="btn btn-primary">Use Template</a> 
                                </div> 
                            </div> 
                        </div>
                    </div> 
                    <div className="col-sm col-md-4"> 
                        <div className="card h-100 shadow-sm"> 
                            <img src="https://image-service.inbranded.co/exports/previews/d-b1fc9ae0-a013-48b8-a28c-102bf415e007/1626473930162.png" className="card-img-top" alt="..." /> 
                            <div className="card-body"> 
                                <h5 className="card-title">
                                   Certificate of recognition
                                </h5> 
                                <div className="text-center my-4"> 
                                    <a href="#" className="btn btn-primary">Use Template</a> 
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </main>
     </>
  )
}

export default Cards