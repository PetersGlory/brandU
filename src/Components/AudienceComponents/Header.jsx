import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" style={{borderRight:"none"}} to="/">
                                    <img src="assets/images/logo/white-logo.png" alt="logo" />
                                    {/* <h3>BrandU</h3> */}
                                </Link>
                                <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">Why BrandU?</a>
                                            <ul className="sub-menu collapse" id="submenu-1-4">
                                                <li className="nav-item"><a href="javascript:void(0)">Blog Grid Sidebar</a>
                                                </li>
                                                <li className="nav-item"><a href="javascript:void(0)">Blog Single</a></li>
                                                <li className="nav-item"><a href="javascript:void(0)">Blog Single
                                                        Sibebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#pricing" className="page-scroll"
                                                aria-label="Toggle navigation">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">Resources</a>
                                            <ul className="sub-menu collapse" id="submenu-1-4">
                                                <li className="nav-item"><a href="javascript:void(0)">Blog</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/explore" aria-label="Toggle navigation">Explore</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button add-list-button">
                                    <Link to="/login" className="btn">Login</Link>
                                    <Link to="/register" className="btn">Try for free</Link>
                                </div>
                            </nav>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header