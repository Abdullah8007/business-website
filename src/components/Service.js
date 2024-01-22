/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React } from 'react'
import '../styles/FooterStyle.css';
import Header from './Header';
import Footer from './Footer';

const Service = () => {


  return (
    <>
      <Header />

      {/* Service Section */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated pt-5 slideInDown">Service</h1>
        </div>
      </div>

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
                <h4 className="mb-0">Web Development</h4>
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
      <Footer />
    </>
  )
};

export default Service;