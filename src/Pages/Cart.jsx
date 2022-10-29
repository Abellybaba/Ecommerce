import React from 'react'
import Navbar2 from '../components/shared/Navbar2'
//import CartItem from '../components/shared/CartItem'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../reqMethod";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE; // Stripe publishable key


const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);

  return (
    <div style={{ backgroundColor: "#E8EDF5" }}>
      <Navbar2 />
      <Announcement />
      <div className="container my-2">
        <h2 className="my-2">Shopping Cart</h2>
        {cart.products?.map(product => (
          <div className="overflow-hidden" style={{ backgroundColor: "#E8EDF5" }}>
          <div className="container py-2 bg-light my-2 shadow-lg">{product.product.title}
            <div className="p-1">
              <p className="mb-10 mb-md-16 text-secondary">{product.product.categories}</p>
              <div className="row mb-5 align-items-center justify-content-between">
                <div className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex flex-wrap align-items-center">
                  <div className="d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                    <img className="img-fluid me-2" width="128px" src={product.product.img} alt="" />
                  </div>
                  <div className="col-12 col-md-auto">
                    <h3 className="mb-2 lead fw-bold">{product.product.title}</h3>
                    <p className="mb-8 text-secondary">{product.product.size}</p>
                    <p className="mb-8 text-secondary">{product.product.color}</p>
                    <p className="text-secondary">{product.product._id}</p>
                  </div>
                </div>
                <div className="d-flex col-12 col-md-auto justify-content-between align-items-center flex-md-column ms-2">
                  <p className="mb-lg-12 text-end h6 text-dark">${product.product.price}</p>
                  <div className="row fw-bold text-secondary border rounded-2 w-50">
                    <button className="col-3 col-lg-3 btn p-3 p-md-3">
                      <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                    </button>
                    <input className="col form-control text-center text-md-start border-0" type="number" placeholder={product.quantity} />
                    <button className="col-3 col-lg-3 btn p-3 p-md-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        ))}

        <div className="d-flex flex-wrap mb-10 align-items-center justify-content-between rounded p-3 px-md-12 bg-dark">
          <div className="mb-4 mb-md-0">
            <p className="text-light">Estimated Shipping</p>
            <p className="text-light">Shipping Discount</p>
            <h5 className="text-white">Subtotal</h5>
          </div>
          <div className="d-flex flex-column">
            <span className="lead fw-bold text-white">${cart.total}</span>
            <span className="lead fw-normal text-white">$00.00</span>
            <span className="lead fw-bold text-white">{cart.total}</span>
          </div>
        </div>
        <div className="mt-3 d-flex flex-column flex-md-row mb-10 align-items-center justify-content-between">
          <button type="button" className="btn btn-dark p-3">Continue Shopping</button>
          <div className="d-flex align-items-center justify-content-center p-3">
            {/* <a className="col col-md-auto btn-light text-uppercase me-2 text-nowrap" href="#">Cart (1)</a>
                            <a className="col col-md-auto btn-primary text-nowrap" href="#">Wishlist (0)</a> */}
          </div>
          <StripeCheckout
          className="bg-dark p-3" style={{ backgroundColor: "black" }}
              name="Oanwave EShop"
              image='../assets/images/logo.png'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            />
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Cart