/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { publicRequest } from "../reqMethod";
import {useDispatch} from "react-redux"
import {addProduct} from "../redux/cartRedux"



const SingleProduct = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  //const [count, setCount] = useState(1);
  const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("api/products/find/"+id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);

      const handleCount = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
      };

      const handleClick = () => {
        dispatch(
            addProduct({product:product, quantity:quantity, price: product.price * quantity})
            
            );
      };


    return (
        <section className="py-5">
            <div className="container bg-light shadow-lg rounded">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 p-3">
                        <img class="mx-auto img-fluid rounded" src={product.img} alt="" />
                    </div>
                    <div className="col-12 col-lg-6 rounded me-1 p-3" style={{ backgroundColor: "#E8EDF5" }}>
                        <h3 className="fw-bold mb-3">{product.title}</h3>
                        <p className="lead text-muted mb-5">{product.desc}</p>
                        <h4 className="fw-bold">${product.price}</h4>
                        <p className="text-muted">{product.categories}</p>
                        <div className="d-flex justify-content-between py-3 w-75">
                            <div className="row">
                                <label className="col">Color:</label>
                                {product.color}
                               
                                {/* <div className="rounded-circle col me-1" style={{ height: "25px", width: "20px", backgroundColor: "black" }}></div>
                                <div className="rounded-circle col me-1" style={{ height: "25px", width: "20px", backgroundColor: "blue" }}></div>
                                <div className="rounded-circle col me-1" style={{ height: "25px", width: "20px", backgroundColor: "grey" }}></div> */}
                            </div>
                            <div className="row align-items-center me-2">
                                <label className="col">Size:</label>
                                <select class="form-select form-select-sm w-25 col" name="" id="">
                                    {product.size?.map((s)=>(
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-3 w-75">
                            <div className="row p-2">
                            <span className="col" style={{cursor: "pointer" }}><img onClick={() => handleCount("dec")} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="" width="30px" height="30px"/></span>
                            <span className="col rounded border-2 h4">{quantity}</span>
                            <span className="col" style={{cursor: "pointer" }}><img onClick={() => handleCount("inc")} src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt="" width="30px" height="30px"/></span>
                            </div>
                            <div className="">
                                <button type="button" className="rounded border-1 p-3 bg-dark text-light" onClick={handleClick}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default SingleProduct