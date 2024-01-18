/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Testimonials = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="display-6 mb-4">What Our Clients Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item bg-light rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-1.jpg" alt />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-2.jpg" alt />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-3.jpg" alt />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-4.jpg" alt />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Testimonials;