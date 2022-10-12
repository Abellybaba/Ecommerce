/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
    <section class=" bg-light overflow-hidden">
  <div class="container">
    <div class="text-center p-2 p-md-5 border-bottom">
      <a class="d-inline-block" href="#">
        <img class="img-fluid" src="../asset/logo.png" alt=""/>
      </a>
      <ul class="row align-items-center mt-2 mt-md-4 justify-content-center list-unstyled mb-4">
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Category</a></li>
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Collection</a></li>
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Story</a></li>
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Brand</a></li>
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Partners</a></li>
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Videos</a></li>
        <li class="col-12 col-sm-6 col-md-4 col-lg-auto mb-1 mb-md-3"><a class="btn bg-white py-2 rounded-pill" href="#">Contact</a></li>
      </ul>
      <div class="row mt-20 text-start">
        <div class="col-12 col-lg-auto mb-10 mb-lg-0">
          <h6 class="mb-3 lead fw-bold text-dark">Contact Us</h6>
          <p class="h6 text-primary">+1 647-447-8680</p>
        </div>
        <div class="col-12 col-lg-auto mb-10 mb-lg-0">
          <h6 class="mb-3 lead fw-bold text-dark">Email</h6>
          <p class="h6 text-primary">info@abelokoh.com</p>
        </div>
        <div class="col-auto ms-md-auto ">
          <div class="d-flex flex-wrap align-items-center justify-content-center">
            <h6 class="me-10 mb-0 lead fw-bold text-primary">Follow Us:</h6>
            <div class="d-flex ms-2">
              <a class="d-inline-block me-2" href="#">
                <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" width="30px" alt=""/>
              </a>
              <a class="d-inline-block me-2" href="#">
                <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png" width="30px" alt=""/>
              </a>
              <a class="d-inline-block" href="#">
                <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/5968/5968823.png" width="30px" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 text-center">
      <p class="text-secondary">© Copyright 2022 OANWave</p>
    </div>
  </div>
</section>
  )
}

export default Footer