import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
            <div className="container p-2">
                <a className="navbar-brand" href="#">BrandU</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row justify-content-between" id="navbarScroll">
                    <ul className="col-md-8 navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-center" style={{bsScrollHeight: "100px"}}>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Why BrandU?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Audience</a></li>
                                <li><a className="dropdown-item" href="#">Campaign</a></li>
                                <li><a className="dropdown-item" href="#">Automation</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Integration</a></li>
                                <li><a className="dropdown-item" href="#">Emails with BrandU</a></li>
                                <li><a className="dropdown-item" href="#">BrandU vs CRM</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Blog</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav col-md-4 row">
                        
                        <li className="nav-item col-5">
                            <button className="btn btn-outline-primary nav-link" style={{width: '100%', }}>Login</button>
                        </li>
                        <li className="nav-item col-5">
                            <button className="btn btn-primary text-white nav-link" style={{width: '100%', }}>Try for free</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar