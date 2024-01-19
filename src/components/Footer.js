/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-scroll';
import '../styles/FooterStyle.css';

const Footer = () => {
    return (
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
                            <a className="btn btn-link" href>Terms &amp; Condition</a>
                            <a className="btn btn-link" href>Support</a>
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
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a href="/">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <a href="https://abdullahjagrala.vercel.app">Abdullah Jagrala</a> | <a href="https://fuzailkaradia.vercel.app">Fuzail Karadia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><Link to="header" spy={true} smooth={true} offset={0} duration={100}><i className="bi bi-arrow-up" /></Link></button>
        </div>

    )
};

export default Footer;