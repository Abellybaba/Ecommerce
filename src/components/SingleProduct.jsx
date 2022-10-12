/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const SingleProduct = () => {
    return (
        <section className="py-5">
            <div className="container bg-light shadow-lg rounded">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                        <img class="mx-auto img-fluid rounded" src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 rounded me-1" style={{ backgroundColor: "#E8EDF5" }}>
                        <h2 className="display-4 fw-bold mb-3">Summer Dress</h2>
                        <p className="lead text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
                        <h4 className="fw-bold">$20.00</h4>
                        <p className="text-muted">Female, Unisex</p>
                        <div className="d-flex justify-content-between py-3 w-75">
                            <div className="row">
                                <label className="col">Color</label>
                                <div className="rounded-circle col me-1" style={{ height: "25px", width: "20px", backgroundColor: "black" }}></div>
                                <div className="rounded-circle col me-1" style={{ height: "25px", width: "20px", backgroundColor: "blue" }}></div>
                                <div className="rounded-circle col me-1" style={{ height: "25px", width: "20px", backgroundColor: "grey" }}></div>
                            </div>
                            <div className="row align-items-center me-2">
                                <label className="col">Size</label>
                                <select class="form-select form-select-sm w-25 col" name="" id="">
                                    <option selected disabled>Size</option>
                                    <option value="">XS</option>
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                    <option value="">XL</option>
                                    <option value="">XXL</option>
                                </select>

                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-3 w-75">
                            <div className="row p-2">
                            <span className="col" style={{cursor: "pointer" }}><img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt="" width="30px" height="30px"/></span>
                            <span className="col rounded border-2 h4">1</span>
                            <span className="col" style={{cursor: "pointer" }}><img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="" width="30px" height="30px"/></span>
                            </div>
                            <div className="">
                                <button type="button" className="rounded border-1 p-3 bg-dark text-light" >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default SingleProduct