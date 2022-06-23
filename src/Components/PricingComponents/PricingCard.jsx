import React from 'react'

const PricingCard = ({title, li1, li2, li3, amount}) => {
  return (
    <>
            <div className="col-md-5 col-sm-10">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3" style={{backgroundColor:"rgba(0, 118, 228, 0.883)", color:"#fff"}}>
                        <h4 className="my-0 fw-normal text-white">{title}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{amount}<small className="text-muted fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>{li1}</li>
                        <li>{li2}</li>
                        <li>{li3}</li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PricingCard