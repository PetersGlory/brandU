import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
            <div className="container p-2">
                <Link className="navbar-brand" to="/">BrandU</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row justify-content-between" id="navbarScroll">
                    <ul className="col-md-8 pl-5 col-sm-12 navbar-nav me-auto my-2 navbar-nav-scroll justify-content-center" style={{bsScrollHeight: "100px"}}>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Why BrandU?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="/">Audience</Link></li>
                                <li><Link className="dropdown-item" to="/">Campaign</Link></li>
                                <li><Link className="dropdown-item" to="/">Automation</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Integration</Link></li>
                                <li><Link className="dropdown-item" to="/">Emails with BrandU</Link></li>
                                <li><Link className="dropdown-item" to="/">BrandU vs CRM</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="/">Blog</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav col-md-4 col-sm-12 pl-5 row">
                        
                        <li className="nav-item col-5">
                            <Link to="/login" className="btn btn-outline-primary nav-link" style={{width: '100%', }}>Login</Link>
                        </li>
                        <li className="nav-item col-5">
                            <Link to="/signup" className="btn btn-primary text-white nav-link" style={{width: '100%', }}>Try for free</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar