import React from 'react'
import Announcement from '../components/Announcement'
import Hero from '../components/Hero'
//import Navbar from '../components/Navbar'
import Navbar2 from '../components/shared/Navbar2'
import Sponsor from '../components/Sponsor'
import Category from '../components/Category'
import Shopnow from '../components/Shopnow'

const Home = () => {
  return (
    <div>
      <Announcement/>
    <Navbar2/>
    <Hero/>
    <Sponsor />
    <Category />
    <Shopnow />
    </div>
  )
}

export default Home