/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterStyle.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [nav, setNav] = useState(false);

    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 200 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p3ni5em', 'template_rx84hnm', form.current, 'Hx3WVWHd8ydmqLeQz')
          .then(() => {
            if(!alert("Form Submitted Successfully!!!"));
          }).catch(() => {
            alert("Failed to Submit Form.");
          });
          e.target.reset()
      };

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


            {/* Contact Section */}
            <div>
                <div className="container-xxl py-5">
                    <div className="container mt-5">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                            <h1 className="display-6 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
                        </div>
                        <div className="row g-0 justify-content-center">
                            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.5s">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" name='user_name' placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" name='user_email' placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" name='subject' placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" name='message' id="message" style={{ height: 200 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl pt-5 px-sm-3 wow fadeIn" data-wow-delay="0.1s">
                    <iframe className="w-100 mb-n2" style={{ height: 450 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.202573044232!2d72.88796107580961!3d19.27355494573959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b07c4fb0f457%3A0x5013987f12dadb34!2sWestern%20Park!5e0!3m2!1sen!2sin!4v1705691246435!5m2!1sen!2sin" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
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

export default Contact;