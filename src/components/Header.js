/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
    return (
    <div>
  <div className="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="row align-items-center top-bar">
      <div className="col-lg-4 col-md-12 text-center text-lg-start">
        <a href className="navbar-brand m-0 p-0">
          <h1 className="fw-bold text-primary m-0"><i className="fa fa-laptop-code me-3" />DGcom</h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
      </div>
      <div className="col-lg-8 col-md-7 d-none d-lg-block">
        <div className="row">
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-end">
              <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                <i className="far fa-clock text-primary" />
              </div>
              <div className="ps-3">
                <p className="mb-2">Opening Hour</p>
                <h6 className="mb-0">Mon - Fri, 8:00 - 9:00</h6>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-end">
              <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                <i className="fa fa-phone text-primary" />
              </div>
              <div className="ps-3">
                <p className="mb-2">Call Us</p>
                <h6 className="mb-0">+91 9359108007</h6>
                <h6 className="mb-0">+91 9892488862</h6>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-end">
              <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                <i className="far fa-envelope text-primary" />
              </div>
              <div className="ps-3">
                <p className="mb-2">Email Us</p>
                <h6 className="mb-0">info@example.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <a href="#" className="navbar-brand ms-3 d-lg-none">MENU</a>
    <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav me-auto p-3 p-lg-0">
        <a href="index.html" className="nav-item nav-link active">Home</a>
        <a href="about.html" className="nav-item nav-link">About Us</a>
        <a href="service.html" className="nav-item nav-link">Services</a>
        <a href="project.html" className="nav-item nav-link">Projects</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
            <a href="feature.html" className="dropdown-item">Features</a>
            <a href="team.html" className="dropdown-item">Our Team</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="404.html" className="dropdown-item">404 Page</a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">Contact Us</a>
      </div>
      <a href="https://htmlcodex.com/web-design-agency-html-template-pro" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Pro Version</a>
    </div>
  </nav>
</div>

  )
};

export default Header;