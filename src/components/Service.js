/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Service = () => {
  return (
    <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
      <h1 className="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <a className="service-item d-block rounded text-center h-100 p-4" href>
          <img className="img-fluid rounded mb-4" src="img/service-1.jpg" alt />
          <h4 className="mb-0">Web Design</h4>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <a className="service-item d-block rounded text-center h-100 p-4" href>
          <img className="img-fluid rounded mb-4" src="img/service-2.jpg" alt />
          <h4 className="mb-0">App Development</h4>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <a className="service-item d-block rounded text-center h-100 p-4" href>
          <img className="img-fluid rounded mb-4" src="img/service-3.jpg" alt />
          <h4 className="mb-0">SEO Optimization</h4>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <a className="service-item d-block rounded text-center h-100 p-4" href>
          <img className="img-fluid rounded mb-4" src="img/service-4.jpg" alt />
          <h4 className="mb-0">Social Marketing</h4>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <a className="service-item d-block rounded text-center h-100 p-4" href>
          <img className="img-fluid rounded mb-4" src="img/service-5.jpg" alt />
          <h4 className="mb-0">Email Marketing</h4>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <a className="service-item d-block rounded text-center h-100 p-4" href>
          <img className="img-fluid rounded mb-4" src="img/service-6.jpg" alt />
          <h4 className="mb-0">PPC Advertising</h4>
        </a>
      </div>
    </div>
  </div>
</div>

  )
};

export default Service;