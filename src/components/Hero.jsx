import React from 'react'

const 
Hero = () => {
  return (
    <div >
        <div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="0" className=""></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="1" className="active" aria-current="true"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" style={{height: "100vh" }}> 
    <div className="carousel-item">
      <img src="https://i.ibb.co/cXFnLLV/3.png" width="900px" className="img-fluid" alt="Slide 1" />
      <div className="carousel-caption d-sm-block text-dark">
        <h5 className="fs-2">Summer Sale</h5>
        <p className="fs-5">Don't Compromise on Style! Get Flat 30% Off.</p>
      </div>
    </div>
    <div className="carousel-item active">
      <img src="https://i.ibb.co/DG69bQ4/2.png" width="900px"  className="img-fluid img-md-fluid" alt="Slide 2" />
      <div className="carousel-caption d-sm-block text-dark">
        <h5 className="fs-2">Summer Sale</h5>
        <p className="fs-5">Don't Compromise on Style! Get Flat 30% Off.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/DG69bQ4/2.png" width="900px" className="img-fluid" alt="Slide 3"/>
      <div className="carousel-caption d-sm-block text-dark mb-3">
        <h5 className="fs-2">Summer Sale</h5>
        <p className="fs-5">Don't Compromise on Style! Get Flat 30% Off.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
    </div>
  )
}

export default 
Hero