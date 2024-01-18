/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Features = () => {
  return (
    <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="h-100">
          <h6 className="section-title bg-white text-start text-primary pe-3">Why Choose Us</h6>
          <h1 className="display-6 mb-4">Why People Trust Us? Learn About Us!</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row g-4">
            <div className="col-12">
              <div className="skill">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Digital Marketing</p>
                  <p className="mb-2">85%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="skill">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">SEO &amp; Backlinks</p>
                  <p className="mb-2">90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="skill">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Design &amp; Development</p>
                  <p className="mb-2">95%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="img-border">
          <img className="img-fluid" src="img/feature.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</div>

  )
};

export default Features;