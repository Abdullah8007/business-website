/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/FooterStyle.css';

const Service = () => {

  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 200 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);


  return (
    <>
      <header>
        <div className='container-fluid bg-primary'>
          <div className={`${nav === true ? "sticky" : ""} `}>
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-0 wow fadeIn container" data-wow-delay="0.1s">
              <a href="https://webgenius-eight.vercel.app" className="navbar-brand ms-3">West<span className='text-dark'>Coders</span></a>
              <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-3 p-lg-0 nav-link">
                  <Link to='/home'><a className="nav-item nav-link active">Home</a></Link>
                  <Link to='/about'><a className="nav-item nav-link">About</a></Link>
                  <Link to='/service'><a className="nav-item nav-link">Services</a></Link>
                  <Link to='/project'><a className="nav-item nav-link">Projects</a></Link>
                  <Link to='/contact'><a className="nav-item nav-link">Contact</a></Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Service Section */}
      <div className="container-xxl py-5">
        <div className="container mt-5">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
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
                <h4 className="mb-0">UI/UX Design</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='footer-section'>
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-4 col-md-12">
                <h5 className="text-light mb-4">Address</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Western Park, Kashimira, Mira Road(E), Thane-401107</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 9359108007 | +91 9892488862</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href><i className="fab fa-youtube" /></a>
                  <a className="btn btn-square btn-outline-secondary rounded-circle me-0" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-light mb-4">Quick Links</h5>
                <a className="btn btn-link" href>About Us</a>
                <a className="btn btn-link" href>Contact Us</a>
                <a className="btn btn-link" href>Our Services</a>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-light mb-4">Gallery</h5>
                <div className="row g-2">
                  <div className="col-4">
                    <img className="img-fluid rounded" src="img/project-1.jpg" alt="Image" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded" src="img/project-2.jpg" alt="Image" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded" src="img/project-3.jpg" alt="Image" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded" src="img/project-4.jpg" alt="Image" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded" src="img/project-5.jpg" alt="Image" />
                  </div>
                  <div className="col-4">
                    <img className="img-fluid rounded" src="img/project-6.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Newsletter</h5>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                    <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div> */}
            </div>
          </div>
          <div className="container-fluid copyright">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center mb-md-0">
                  © <a href="https://webgenius-eight.vercel.app" target='_blank' rel='noreferrer'>WestCoders</a>, All Right Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Service;