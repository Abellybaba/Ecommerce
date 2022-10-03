/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
    return (
        <div className="" style={{backgroundColor: "#E8EDF5"}}>
            <nav className="navbar p-3 navbar-expand-xl flex-column border-bottom" >
                <div className="container-fluid px-12 py-8 py-xl-0">
                    <button className="navbar-burger navbar-toggler" type="button">
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* hide when its medium and small screen */}
                    <div className="position-relative d-none d-xl-flex navbar-collapse">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <a className="navbar-brand" href="#">
                                <img className="img-fluid" style={{ width: '40px', height: '40px' }} src="https://cdn-icons-png.flaticon.com/512/3145/3145827.png" alt="" />
                            </a>
                            <ul className=" d-xxl-flex navbar-nav position-absolute top-50 start-50 translate-middle align-items-center">
                                <li className="nav-item me-3"><a className="nav-link" href="#">Category</a></li>
                                <li className="nav-item me-3"><a className="nav-link" href="#">Collection</a></li>
                                <li className="nav-item me-3"><a className="nav-link" href="#">Story</a></li>
                                <li className="nav-item me-3"><a className="nav-link" href="#">Brand</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Photos</a></li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center justify-content-end me-xl-12">
                            <a className="link-light text-decoration-none me-3 text-dark" href="#">
                                <svg width={23} height={20} viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <button type="button" class="btn btn-primary position-relative">
                                Cart
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </div>

                        {/* nav ending */}
                        <button className="btn align-self-stretch border-start py-10 px-10 fw-bold">
                            <div className="d-flex align-items-center">
                                <img className="img-fluid me-2" style={{ width: '36px', height: '36px' }} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                                <span className="me-2 fw-bold">Abel</span>
                                <span>
                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* medium version navigation */}
                    <div className="d-xl-none d-flex align-items-center justify-content-end">
                        <a className="link-light text-decoration-none me-3 text-dark" href="#">
                            <svg width={23} height={20} viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <button type="button" class="btn btn-primary position-relative">
                                Cart
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                    </div>
                </div>
            </nav>

            {/* small mobile menu */}
            <div className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-sm" style={{ zIndex: 9999 }}>
                <div className="navbar-close position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-25" />
                <nav className="position-relative h-100 w-100 d-flex flex-column py-6 px-6 bg-white border-end overflow-auto">
                    <div className="d-flex align-items-center mb-8">
                        <a className="me-auto h6" href="#">
                            <img className="img-fluid" style={{ width: '36px', height: '36px' }} src="https://cdn-icons-png.flaticon.com/512/3145/3145827.png" alt="" width="auto" />
                        </a>
                        <button className="navbar-close btn p-0">
                            <svg className="text-secondary" style={{ width: '20px', height: '20px' }} width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="d-flex mb-8 justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="img-fluid me-2" style={{ width: '36px', height: '36px' }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" alt="" />
                            <span className="me-2 fw-bold">Abel</span>
                            <span>
                                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <a className="link-dark text-decoration-none me-3" href="#">
                                <svg width={23} height={20} viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <button type="button" class="btn btn-primary position-relative me-4">
                                Cart
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            {/* <a className="link-dark text-decoration-none d-flex align-items-center" href="#">
                                <svg className="me-3" width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="d-inline-block text-center bg-light rounded-circle fw-bold" style={{ width: '24px', height: '24px' }}>3</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="align-items-center">
                    <input className="form-control mb-10 py-3 px-8 bg-light border-0" type="search" placeholder="Search" />
                    <ul className="list-unstyled mb-2 h5">
                        <li className="mb-8"><a className="link-dark text-decoration-none" href="#">Category</a></li>
                        <li className="mb-8"><a className="link-dark text-decoration-none" href="#">Collection</a></li>
                        <li className="mb-8"><a className="link-dark text-decoration-none" href="#">Story</a></li>
                        <li className="mb-8"><a className="link-dark text-decoration-none" href="#">Brand</a></li>
                        <li><a className="link-dark text-decoration-none" href="#">Photos</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Navbar