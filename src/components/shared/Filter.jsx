import React from 'react'
import { useLocation } from "react-router";
import { useState } from "react";


const Filter = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const handleSort = (e) => setSort(e.target.value)
  console.log(filters,sort);

  return (
    <div className='container bg-transparent'>
        <div className='row'>
        <h2 className="mb-16 mb-md-24 p-5 ">Best Sellers</h2>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center py-2'>
                    <span className='text-bold h6 me-2 text-nowrap text-center'>Filter Products: </span>
                      <select class="form-select me-3 form-select-sm" name="color" onChange={handleFilters}>
                            {/* <option disabled>Colors</option> */}
                            <option>White</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                        </select>
                        <select class="form-select form-select-sm" name="size" onChange={handleFilters}>
                            {/* <option selected disabled>Size</option> */}
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='text-bold h6 me-2 text-nowrap'>Sort Products: </span>
                <select class="form-select form-select-sm" onChange={handleSort}>
                            <option value="newest">Newest</option>
                            <option value="asc">Price (asc)</option>
                            <option value="desc">Price (desc)</option>
                            
                        </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter