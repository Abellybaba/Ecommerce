/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    Link
} from "react-router-dom";
import {useSelector} from "react-redux"

const Navbar2 = () => {

const quantity = useSelector(state => state.cart.quantity);
const user = useSelector((state) => state.user.currentUser);

    return (
        <div>
            <nav className="navbar navbar-expand-lg py-4" style={{ backgroundColor: "#E8EDF5" }}>
                <div className="container">
                
                        <Link className="navbar-brand" to="/">    
                        <img
                            className="img-fluid"
                            src="../asset/logo.png"
                            alt=""
                            width="45px"
                        />
                        </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav08"
                        aria-controls="nav08"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav08">
                        <ul className="d-none d-lg-flex navbar-nav mx-auto mt-3 mt-lg-0 mb-3 mb-lg-0 position-absolute top-50 start-50 translate-middle">
                            <li className="nav-item me-4 h5 fw-bold">
                                    <Link className="nav-link "style={{ textDecoration: "none", color: "black" }} to="/">Home</Link>
                            </li>
                            <li className="nav-item me-4 h5 fw-bold">
                                
                                    <Link className="nav-link text-dark" style={{ textDecoration: "none", color: "black" }}
                                        to="/products">Shop</Link>
                                
                            </li>
                            <li className="nav-item me-4 h5 fw-bold">
                                
                                <Link className="nav-link" style={{ textDecoration: "none", color: "black" }}
                                        to="/products/men">Products</Link>
                
                            </li>
                            
                        </ul>
                        {/* mobile menu list */}
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 d-lg-none">
                            <li className="nav-item me-4">
                            <Link style={{ textDecoration: "none", color: "black" }} to="/">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                            <Link style={{ textDecoration: "none", color: "black" }}
                                        to="/products">Shop</Link>
                            </li>
                            <li className="nav-item me-4 ">
                            <Link style={{ textDecoration: "none", color: "black" }}
                                        to="/product">Product</Link>
                            </li>
                            
                        </ul>
                        {/* end of mobile menu */}
                        <div className="d-flex ms-lg-auto align-items-center justify-content-even">
                                <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
                            <div className="position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" className="bi bi-bag-check-fill me-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                </svg>
                                <span class="badge bg-warning text-dark position-absolute top-0 end-0">{quantity}</span>
                            </div>
                            </Link>
                            {!user && 
                            <Link className="btn btn-outline-secondary me-2 ms-2 bg-dark text-white" 
                            style={{ textDecoration: "none"}}
                                        to="/login">Sign In</Link>
                                    }
                                    {!user && 
                            <Link className="btn btn-dark me-2 ms-2"
                            style={{ textDecoration: "none",color: "white" }}
                                        to="/register">Sign Up</Link>
                                    }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;
