/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/TeamStyle.css';

const Team = () => {
  return (
    <div className='team-section'>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
            <h1 className="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item text-center p-4">
                <img className="img-fluid border rounded-circle w-75 p-2 mb-4" src="img/team-1.jpg" alt />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Fuzail Karadia</h5>
                    <span>Front-End Web Developer</span>
                  </div>
                  <div className="team-social">
                    <a className="btn btn-square btn-primary rounded-circle" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary rounded-circle" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary rounded-circle" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item text-center p-4">
                <img className="img-fluid border rounded-circle w-75 p-2 mb-4" src="img/team-3.jpg" alt />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Abdullah Jagrala</h5>
                    <span>Front-End Web Developer</span>
                  </div>
                  <div className="team-social">
                    <a className="btn btn-square btn-primary rounded-circle" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary rounded-circle" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary rounded-circle" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Team;