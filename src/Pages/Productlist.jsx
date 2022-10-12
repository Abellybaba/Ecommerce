import React from 'react'
import Navbar2 from '../components/shared/Navbar2'
import Sponsor from '../components/Sponsor'
import Announcement from '../components/Announcement'
import Filter from '../components/shared/Filter'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Productlist = () => {
    return (
        <div style={{ backgroundColor: "#E8EDF5" }}>
            <Navbar2 />
            <Announcement />
            <Filter/>
            <Products/>
            <Sponsor />
            <Footer />
        </div>
    )
}

export default Productlist