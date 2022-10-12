/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Register = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ width: "100vw", height: "100vh", backgroundImage: `url("https://images.pexels.com/photos/972887/pexels-photo-972887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, backgroundSize: "cover"}}>
            <div className="py-5 container">
                <div class="row">
                    <div class="col-12 col-md-9 col-xl-5 mx-auto">
                        <div class="p-5 bg-light rounded text-center">
                            <span class="text-muted">Sign Up</span>
                            <h3 class="fw-bold mb-5">Create new account</h3>
                            <form action="#">
                                <div class="row mb-3">
                                    <div class="col-12 col-lg-6 mb-2 mb-lg-0">
                                        <input class="form-control" type="text" placeholder="First Name" />
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <input class="form-control" type="text" placeholder="Last Name" />
                                    </div>
                                    
                                </div>
                                <div class="row mb-3">
                                    <div class="col-12 col-lg-6 mb-2 mb-lg-0">
                                        <input class="form-control" type="text" placeholder="User Name" />
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <input class="form-control" type="email" placeholder="Email" />
                                    </div>
                                    
                                </div>
                                <div class="row mb-2 d-flex">
                                    <div class="col-12 col-lg-6 mb-2 mb-lg-0">
                                        <input class="form-control" type="password" placeholder="Password" />
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <input class="form-control" type="password" placeholder="Password" />
                                    </div>
                                    
                                </div>
                                <label class="mb-3">
                                    <input class="form-check-input me-2" type="checkbox" name="terms" value="1" />
                                    <small class="text-muted">By signing up, you agree to our <a href="#">Terms, Data Policy</a> and <a href="#">Cookies Policy</a>.</small>
                                </label>
                                <button class="btn btn-primary py-2 w-100 mb-3">Sign Up</button>
                            </form>
                            <p class="text-muted">
                                <small>
                                    <span>Already have an account?</span>
                                    <a href="#">Sign In</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register