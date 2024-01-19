/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from 'react';
import '../styles/HeaderStyle.css';

const Header = () => {

    const [nav, setNav] = useState(false);

    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      scrollValue > 200 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    return (
      <div id='header'>
        <div className="container-fluid d-md-none py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="row align-items-center justify-content-center top-bar">
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex align-items-center justify-content-center">
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
                  <div className="d-flex align-items-center justify-content-center">
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
                  <div className="d-flex align-items-center justify-content-center">
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
        <header>
          <div className='container-fluid bg-primary'>
            <div className={`${nav === true ? "sticky" : ""} `}>
              <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-0 wow fadeIn container" data-wow-delay="0.1s">
                <a href="#" className="navbar-brand ms-3">Web<span className='text-dark'>Genius</span></a>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-3 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About Us</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <a href="project.html" className="nav-item nav-link">Projects</a>
                    <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

    )
  };

  export default Header;