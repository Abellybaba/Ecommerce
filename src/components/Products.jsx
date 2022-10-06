/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { popularProducts } from '../data'
//import Product from './Product'

const Products = () => {
    return (
        // <div classNameName="container mb-5">
        //      <h2 classNameName="mb-16 mb-md-24">Discover our Products</h2>
        //      <div classNameName="row">
        //     {popularProducts.map((item) => (
        //        <Product item={item} key={item.id}/> 
        //     ) )}
        //     </div>
        // </div>

        <div className="py-20 overflow-hidden" style={{backgroundColor: "#E8EDF5"}}>
            <div className="container ">
                <h2 className="mb-16 mb-md-24 p-5 text-center">Discover our products</h2>
                <div className="row mb-24">
                {popularProducts.map((item,key) => (
                <div className="col-12 col-md-6 col-lg-3 mb-6 mb-lg-5 ">
                <div className="p-6 bg-light rounded">
                    <span className=" ms-2 mt-2 badge bg-transparent border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
                    <a className="d-block px-6 mt-6 mb-2 link-dark text-decoration-none" href="https://google.com/">
                        <img className="mb-5 mx-auto w-100 img-fluid" style={{ height: "224px", objectFit: "contain" }} src={item.img} alt="" />
                        <h5 className="ms-2 mb-2">BRILE water filter</h5>
                        <p className="ms-2 h6 text-info">$29.89</p>
                    </a>
                    <div className="p-2">
                        <a className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="https://google.com/" style={{ width: "48px", height: "48px" }}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                        </a>
                    </div>
                </div>
            </div>
                
           
              ) )}
 
                </div>
            </div>
        </div>


        // <div className="py-20">
        //     <div className="container" style={{ maxWidth: "1200px"}}>
        //         <h2 className="mb-16 mb-md-24 p-5 text-center">Discover our products</h2>
        //         <div className="d-inline-flex flex-row justify-content-around">
        //         {popularProducts.map((item) => (
        //         <Product item={item} key={item.id}/> 
        //      ) )}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Products