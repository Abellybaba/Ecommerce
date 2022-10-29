/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
//import { popularProducts } from '../data'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import Product from './Product'


const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `https://aoshop-api.onrender.com/api/products?category=${cat}`
                        : 'https://aoshop-api.onrender.com/api/products'
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    //Second useEffect to filter the responds
    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    //useEffect for sorting
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <div className="py-20 overflow-hidden" style={{ backgroundColor: "#E8EDF5" }}>
            <div className="container mt-5">
                {/* <h2 className="mb-16 mb-md-24 p-5 text-center">Discover our products</h2> */}
                <div className="row mb-24">
                    {cat ? filteredProducts.map((item, key) => (
                        <div className="col-12 col-md-6 col-lg-3 mb-6 mb-lg-5 ">
                            <div className="p-6 bg-light rounded">
                                <span className=" ms-2 mt-2 badge bg-transparent border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
                                <a className="d-block px-6 mt-6 mb-2 link-dark text-decoration-none" href="#">
                                    <img className="mb-5 mx-auto w-100 img-fluid" style={{ height: "224px", objectFit: "contain" }} src={item.img} alt="" />
                                    <h5 className="ms-2 mb-2 text-nowrap" style={{ overflow: "hidden" }}>{item.title}</h5>
                                    <p className="ms-2 h6 text-info">{item.price}</p>
                                </a>
                                <div className="p-2 d-flex align-items-center">
                                        <div className="ms-auto me-2 d-flex align-items-center justify-content-between gap-2" >
                                            <div className="border rounded p-2">
                                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                                            </div>
                                            <div className="border rounded p-2">
                                            <Link to={`/product/${item._id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                            </Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    )) :
                        products.slice(0, 8).map((item, key) => (
                            <div className="col-12 col-md-6 col-lg-3 mb-6 mb-lg-5 ">
                                <div className="p-6 bg-light rounded">
                                    <span className=" ms-2 mt-2 badge bg-transparent border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
                                    <a className="d-block px-6 mt-6 mb-2 link-dark text-decoration-none" href="#">
                                        <img className="mb-5 mx-auto w-100 img-fluid" style={{ height: "224px", objectFit: "contain" }} src={item.img} alt="" />
                                        <h5 className="ms-2 mb-2 text-nowrap" style={{ overflow: "hidden" }}>{item.title}</h5>
                                        <p className="ms-2 h6 text-info">{item.price}</p>
                                    </a>
                                    <div className="p-2 d-flex align-items-center">
                                        <div className="ms-auto me-2 d-flex align-items-center justify-content-between gap-2" >
                                            <div className="border rounded p-2">
                                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                                            </div>
                                            <div className="border rounded p-2">
                                            <Link to={`/product/${item._id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

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