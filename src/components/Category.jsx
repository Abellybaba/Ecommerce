/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Category = () => {
  return (
    <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 p-2 position-relative img-fluid">
          <img className="img-fluid rounded d-block"  src="https://images.pexels.com/photos/4530873/pexels-photo-4530873.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
            <h3 className="position-absolute bottom-0 start-0 p-3">Men Clothings</h3>
        </div>
        <div className="col-12 col-lg-6 p-2 position-relative" style={{cursor: "pointer"}}>
          <img className="img-fluid rounded d-block" src="https://images.pexels.com/photos/4530873/pexels-photo-4530873.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
          <h3 className="position-absolute bottom-0 start-0 p-3">Women Clothings</h3>
        </div>
        <div className="col-12 col-md-4 p-2 position-relative" style={{cursor: "pointer"}}>
          <img className="img-fluid rounded" src="https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
          <h3 className="position-absolute bottom-0 start-0 p-3 text-light">Denim</h3>
        </div>
        <div className="col-12 col-md-4 p-2 position-relative" style={{cursor: "pointer"}}>
          <img className="img-fluid rounded" src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
          <h3 className="position-absolute bottom-0 start-0 p-3 text-light">Shoes</h3>
        </div>
        <div className="col-12 col-md-4 p-2 position-relative" style={{cursor: "pointer"}}>
          <img className="img-fluid rounded" src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=800" alt=""/>
          <h3 className="position-absolute bottom-0 start-0 p-3 text-light">Kids Clothings</h3>
        </div>
      </div>
    </div>
  </section>


  )
}

export default Category