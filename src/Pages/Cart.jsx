import React from 'react'
import Navbar2 from '../components/shared/Navbar2'
import CartItem from '../components/shared/CartItem'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'



const Cart = () => {
  return (
    <div style={{ backgroundColor: "#E8EDF5" }}>
         <Navbar2 />
            <Announcement />
            <CartItem/>
            
            
            <Footer />
    </div>
  )
}

export default Cart