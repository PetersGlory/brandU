import React from 'react'
import {Link} from 'react-router-dom'
import '../dash.css'
const Sidebar = () => {
  return (
    <>
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3 active" aria-current="page">
                    <span className="bi bi-house-fill"></span>&nbsp;
                    Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className="bi bi-plus-circle"></span>&nbsp;
                    Create
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className="bi bi-journal-check"></span> &nbsp;
                    Audience
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className="bi bi-images"></span>&nbsp;
                    Designs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className='bi bi-journals'></span>&nbsp;
                    Campaigns
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className="bi bi-wrench-adjustable-circle-fill"></span>&nbsp;
                    Automations
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className="bi bi-gear"></span>&nbsp;
                    Settings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link p-3">
                    <span className="bi bi-box-arrow-left"></span>&nbsp;
                    Logout
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Sidebar