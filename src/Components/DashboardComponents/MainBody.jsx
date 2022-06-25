import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'
import './dash.css'

const MainBody = () => {
  return (
    <>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <Main />
            </div>
        </div>
    </>
  )
}

export default MainBody