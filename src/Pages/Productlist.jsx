import React from 'react'
import Navbar2 from '../components/shared/Navbar2'
import Sponsor from '../components/Sponsor'
import Announcement from '../components/Announcement'
//import Filter from '../components/shared/Filter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useLocation } from "react-router";
import { useState } from "react";

const Productlist = () => {
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

    return (
        <div style={{ backgroundColor: "#E8EDF5" }}>
            <Navbar2 />
            <Announcement />
            {/* <Filter /> */}
            <div className='container bg-transparent'>
        <div className='row'>
        <h2 className="mb-16 mb-md-24 p-5 ">{cat}</h2>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center py-2'>
                    <span className='text-bold h6 me-2 text-nowrap text-center'>Filter Products: </span>
                      <select class="form-select me-3 form-select-sm" name="color" onChange={handleFilters}>
                            <option disabled>Colors</option>
                            <option>White</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                        </select>
                        <select class="form-select form-select-sm" name="size" onChange={handleFilters}>
                            <option disabled>Size</option>
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
            <Products cat={cat} filters={filters} sort={sort} />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default Productlist