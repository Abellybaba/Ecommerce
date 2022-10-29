import React from 'react'
import { categories } from "../data";
import { Link } from "react-router-dom";


const Shopnow = () => {
  return (
      <div className="container pb-5">
         
          <div className="row d-flex ">
                {categories.map((item) => ( 
                    <div className="col-12 col-lg-4 position-relative" item={item} key={item.id}>
                    <img className="img-fluid rounded" src={item.img} alt="" />
                    <Link to={`/products/${item.cat}`}>
                    <div className=" position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                        <h3 className="text-bold text-light align-items-center">{item.title}</h3>
                        <button type="button" class="btn btn-light p-3 ">Shop Now</button>
                    </div>
                    </Link>
                </div>
                ))}
              {/* <div className="col-12 col-lg-4 position-relative" >
                  <img className="img-fluid rounded" src="https://images.pexels.com/photos/1846944/pexels-photo-1846944.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                  <div className=" position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                      <h3 className="text-bold text-light align-items-center">SHIRT STYLE</h3>
                      <button type="button" class="btn btn-light p-3 ">Shop Now</button>
                  </div>
              </div>
              <div className="col-12 col-lg-4 position-relative" >
                  <img className="img-fluid rounded-pill" src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                  <div className=" position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                      <h3 className="text-bold text-light">LOUNGEWEAR</h3>
                      <button type="button" class="btn btn-light p-3 ">Shop Now</button>
                  </div>
              </div>
              <div className="col-12 col-lg-4 position-relative" >
                  <img className="img-fluid rounded" src="https://images.pexels.com/photos/2489986/pexels-photo-2489986.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                  <div className=" position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                      <h3 className="text-bold text-light">JACKETS</h3>
                      <button type="button" class="btn btn-light p-3 ">Shop Now</button>
                  </div>
              </div> */}
          </div>
   
      </div>
  );
};

export default Shopnow