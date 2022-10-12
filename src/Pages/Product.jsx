import React from 'react'
import Navbar2 from '../components/shared/Navbar2'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import SingleProduct from '../components/SingleProduct'


const Product = () => {
  return (
    <div style={{ backgroundColor: "#E8EDF5" }}>
         <Navbar2 />
            <Announcement />
            <SingleProduct/>
            
            <Newsletter/>
            <Footer />
    </div>
  )
}

export default Product