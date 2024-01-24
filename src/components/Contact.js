/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import { React } from 'react';
import '../styles/FooterStyle.css';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {

    return (
        <>
            {/* Header Section */}
            <Header />

            {/* Contact Section */}
            <div>
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-5">
                        <h1 className="display-4 text-white animated pt-5 slideInDown">Contact</h1>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container mt-5">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                            <h1 className="display-6 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
                        </div>
                        <div className="row g-0 justify-content-center">
                            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.5s">
                                <form action='https://formspree.io/f/xeqyeopj' method='POST'>
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
            <Footer />
        </>
    )
};

export default Contact;