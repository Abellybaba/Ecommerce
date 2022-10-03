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
  <div className="carousel-inner">
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=800" className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1438795/pexels-photo-1438795.jpeg?auto=compress&cs=tinysrgb&w=800" className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2013/03/27/12/21/woman-97088_1280.jpg" className="d-block w-100" alt="Slide 3" style={{display: "block" }}/>
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