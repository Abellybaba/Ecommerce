import React from 'react'
import Announcement from '../components/Announcement'
import Hero from '../components/Hero'
//import Navbar from '../components/Navbar'
import Navbar2 from '../components/shared/Navbar2'
import Sponsor from '../components/Sponsor'
import Category from '../components/Category'
import Shopnow from '../components/Shopnow'
import Products from '../components/Products'
//import Product from '../components/Product'

const Home = () => {
  return (
    <div style={{backgroundColor: "#E8EDF5"}}>
      <Announcement/>
    <Navbar2/>
    <Hero/>
    <Sponsor />
    <Category />
    <Shopnow />
    <Products/>
 
    </div>
  )
}

export default Home