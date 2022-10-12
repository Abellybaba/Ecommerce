/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ width: "100vw", height: "100vh", backgroundImage: `url("https://images.pexels.com/photos/9594096/pexels-photo-9594096.jpeg?auto=compress&cs=tinysrgb&w=800")`, backgroundSize: "cover" }}>
            <div className="py-5 container">
                <div class="row">
                    <div class="col-12 col-md-9 col-xl-5 mx-auto">
                        <div class="p-5 bg-light rounded text-center">
                            <span class="text-muted">Sign In</span>
                            <h3 class="fw-bold mb-5">Join our community</h3>
                            <form action="#">
                                <input class="form-control mb-2 p-3" type="email" placeholder="E-mail address" />
                                <input class="form-control mb-2 p-3" type="password" placeholder="Password" />
                                <button class="btn btn-primary py-2 w-50 mb-2">Get Started</button>
                                <div className="d-flex flex-column">
                                <a class="link-secondary d-inline-block mb-3" href="#"><small>Forgot password?</small></a>
                                <a class="d-flex justify-content-center align-items-center mb-2 py-2 bg-white rounded text-muted text-decoration-none" href="#">
                                    <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png" width="20px" alt="" />
                                    <span class="text-muted">Sign in with Facebook</span>
                                </a>
                                <a class="d-flex justify-content-center align-items-center py-2 bg-white rounded text-muted text-decoration-none" href="#">
                                    <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3128/3128310.png" width="20px" alt="" />
                                    <span class="text-muted">Sign in with Twitter</span>
                                </a>
                                </div>
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

export default Login