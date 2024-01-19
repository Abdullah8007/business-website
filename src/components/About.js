/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const About = () => {
  return (
    <div>
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-certificate fa-4x text-primary mb-4" />
                <h5 className="mb-3">Years Experience</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users-cog fa-4x text-primary mb-4" />
                <h5 className="mb-3">Team Members</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users fa-4x text-primary mb-4" />
                <h5 className="mb-3">Satisfied Clients</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-check fa-4x text-primary mb-4" />
                <h5 className="mb-3">Projects Done</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" src="img/about.jpg" alt />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 className="display-6 mb-4">#1 Web Development Agency With <span className="text-primary">1 Year</span> Of Experience</h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default About;