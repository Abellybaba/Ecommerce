import React from 'react'

const Newsletter = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="p-3 p-md-5 bg-light rounded border shadow-lg">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0 bg-aqua">
                            <h3 className="fw-bold">Sign up to our newsletter</h3>
                            <p class="text-muted">We offer discount to our special customers that signup</p>

                        </div>
                        <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
                            <form action="#">
                                <div className="d-flex justify-content-end">
                                    <input className="form-control me-2 w-100 w-md-50" type="email" placeholder="Type your e-mail" />
                                    <button className="btn btn-dark">Action</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter