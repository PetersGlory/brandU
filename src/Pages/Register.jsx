import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-hidden" style={styles.imgs}>

                </div>
                <div className="col-md-6 col-sm-12 p-lg-5 pt-5">
                    <Link to="/" className="btn btn-outline-danger">
                        <i className="bi bi-arrow-left"></i>
                    </Link>
                    <br />
                    <h3 className="text-center mt-5">Register to continue</h3>
                    
                    <div className="container p-lg-5">
                        <div className="form-group my-4">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group my-4">
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group my-4">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <Link to="/dashboard" className="btn btn-primary mx-auto d-block btn-block col-12">Register</Link>

                        <small>By signing up, you agree to InBranded's Privacy policy and Terms of use</small>

                        <p className="text-secondary">Already have an account? <Link to="/login" className="text-warning">Login</Link></p>
                    </div>

                    <div className="mt-3 mb-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <h4> - OR - </h4>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-between p-3">
                        <button className="col-3 btn-outline-primary btn text-center">
                            <i className="bi bi-facebook text-primary"></i> <br />
                            <small className="">Register with Facebook</small>
                        </button>
                        <button className="col-3 btn-outline-primary btn text-center">
                            <i className="bi bi-google text-danger"></i> <br />
                            <small className="">Register with Google</small>
                        </button>
                        <button className="col-3 btn-outline-primary btn text-center">
                            <i className="bi bi-twitter text-primary"></i> <br />
                            <small className="">Register with Twitter</small>
                        </button>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    </>
  )
}

export default Register

const styles = {
    imgs: {
        backgroundImage: 'url("https://inbranded.co/image/header-1.png")',
        height: '100vh',
    }
}