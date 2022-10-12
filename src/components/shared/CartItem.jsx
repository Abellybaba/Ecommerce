/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CartItem = () => {
    return (
        <div classNameNameName="overflow-hidden" style={{ backgroundColor: "#E8EDF5" }}>
            <div className="container py-5 bg-light my-4 shadow-lg">
                <div className="p-3">
                    <h2 className="mb-5">Shopping Cart</h2>
                    <p className="mb-10 mb-md-16 text-secondary">Fusce pharetra lectus felis, eget temp.</p>
                    <div className="row mb-5 align-items-center justify-content-between">
                        <div className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex flex-wrap align-items-center">
                            <div className="d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                                <img className="img-fluid" width="128px" src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png" alt="" />
                            </div>
                            <div className="col-12 col-md-auto">
                                <h3 className="mb-2 lead fw-bold">BRILE water filter carafe</h3>
                                <p className="mb-8 text-secondary">Maecenas 0.7 commodo sit</p>
                                <p className="text-secondary">ID: 934584-848593-443</p>
                            </div>
                        </div>
                        <div className="d-flex col-12 col-md-auto justify-content-between align-items-center flex-md-column">
                            <p className="mb-lg-12 text-end h6 text-dark">$29.89</p>
                            <div className="row fw-bold text-secondary border rounded-2 w-50">
                                <button className="col-3 col-lg-3 btn p-3 p-md-3">
                                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                                </button>
                                <input className="col form-control text-center text-md-start border-0" type="number" placeholder="1" />
                                <button className="col-3 col-lg-3 btn p-3 p-md-3">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap mb-10 align-items-center justify-content-between rounded p-3 px-md-12 bg-dark">
                        <div className="mb-4 mb-md-0">
                            <h5 className="text-white">Subtotal</h5>
                            <p className="text-light">Shipping and taxes will be calculated at checkout.</p>
                        </div>
                        <span className="lead fw-bold text-white">$89.67</span>
                    </div>
                    <div className="mt-3 d-flex flex-column flex-md-row mb-10 align-items-center justify-content-between">
                        <button type="button" className="btn btn-dark p-3">Continue Shopping</button>
                        <div className="d-flex align-items-center justify-content-center p-3">
                            <a className="col col-md-auto btn-light text-uppercase me-2 text-nowrap" href="#">Cart (1)</a>
                            <a className="col col-md-auto btn-primary text-nowrap" href="#">Wishlist (0)</a>
                        </div>
                        <button type="button" className="btn btn-dark p-3">Checkout Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem