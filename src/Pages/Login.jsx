/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
  
    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };




    return (
        <div className="d-flex align-items-center justify-content-center" style={{ width: "100vw", height: "100vh", backgroundImage: `url("https://images.pexels.com/photos/9594096/pexels-photo-9594096.jpeg?auto=compress&cs=tinysrgb&w=800")`, backgroundSize: "cover" }}>
            <div className="py-5 container">
                <div class="row">
                    <div class="col-12 col-md-9 col-xl-5 mx-auto">
                        <div class="p-5 bg-light rounded text-center">
                            <span class="text-muted">Sign In</span>
                            <h3 class="fw-bold mb-5">Join our community</h3>
                            <form action="#">
                                <input class="form-control mb-2 p-3" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                                <input class="form-control mb-2 p-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                <button class="btn btn-primary py-2 w-50 mb-2" onClick={handleClick} disabled={isFetching}>LOGIN</button>
                                <div className="d-flex flex-column">
                                    {error && <span className='text-danger'>Something went wrong...</span>}
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
                                    <span>Don't have an account?</span>
                                    <a href="#">Sign Up</a>
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