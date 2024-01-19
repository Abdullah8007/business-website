/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from 'react';
// import { Link } from 'react-scroll';
import '../styles/FooterStyle.css';
import '../styles/HeaderStyle.css';
import '../styles/TeamStyle.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 200 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <>
      {/* Header Section */}
      <div id='header'>
        <div className="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
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
                      <h6 className="mb-0">webgenius@gmail.com</h6>
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
                <a href="https://webgenius-eight.vercel.app" className="navbar-brand ms-3">Web<span className='text-dark'>Genius</span></a>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-3 p-lg-0">
                  <Link to='/home'><a href='/' className="nav-item nav-link active">Home</a></Link>
                  <Link to='/about'><a href='/' className="nav-item nav-link">About</a></Link>
                  <Link to='/service'><a href='/' className="nav-item nav-link">Services</a></Link>
                  <Link to='/project'><a href='/' className="nav-item nav-link">Projects</a></Link>
                  <Link to='/contact'><a href='/' className="nav-item nav-link">Contact</a></Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Home Section */}
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1">
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            </button>
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to={1} aria-label="Slide 2">
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
            </button>
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to={2} aria-label="Slide 3">
              <img className="img-fluid" src="img/carousel-3.jpg" alt="Image" />
            </button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                  <h1 className="display-1 text-white mb-0 animated zoomIn">Turning Ideas into Digital Realities</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                  <h1 className="display-1 text-white mb-0 animated zoomIn">Creative &amp; Innovative Digital Solution</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                  <h1 className="display-1 text-white mb-0 animated zoomIn">Creative &amp; Innovative Digital Solution</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* About Section */}
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
                <p>We measure our success by the success stories of our clients. The websites we develop aren't just lines of code; they are pathways to your success. From enhancing your brand's online presence to driving conversions and engagement, we take pride in being a part of your achievements</p>
                <p>Beyond Boundaries, Beyond Code: At<span className='text-primary fs-4'> WebGenius</span>, we're not just web developers; we're digital storytellers, architects of online experiences, and champions of innovation. Our passion for pushing boundaries translates into web solutions that redefine possibilities.</p>
                <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container-xxl py-5">
        <div className="container">
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

      {/* Team Section */}
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
                  <img className="img-fluid border rounded-circle w-75 p-2 mb-4" src="img/fuzail.jpg" alt />
                  <div className="team-text">
                    <div className="team-title">
                      <h5>Fuzail Karadia</h5>
                      <span>Front-End Web Developer</span>
                    </div>
                    <div className="team-social">
                      <a className="btn btn-square btn-primary rounded-circle" href='https://github.com/fuzail-karadia' target='_blank' rel='noreferrer'><i className="fab fa-github" /></a>
                      <a className="btn btn-square btn-primary rounded-circle" href='https://www.linkedin.com/in/fuzail-karadia-0a2935230/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin" /></a>
                      <a className="btn btn-square btn-primary rounded-circle" href='https://www.instagram.com/fuzail.karadia/' target='_blank' rel='noreferrer'><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item text-center p-4">
                  <img className="img-fluid border rounded-circle w-75 p-2 mb-4" src="img/abdullah.jpg" alt />
                  <div className="team-text">
                    <div className="team-title">
                      <h5>Abdullah Jagrala</h5>
                      <span>Front-End Web Developer</span>
                    </div>
                    <div className="team-social">
                      <a className="btn btn-square btn-primary rounded-circle" href='https://github.com/Abdullah8007' target='_blank' rel='noreferrer'><i className="fab fa-github" /></a>
                      <a className="btn btn-square btn-primary rounded-circle" href='https://www.linkedin.com/in/abdullah-jagrala-789234280/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin" /></a>
                      <a className="btn btn-square btn-primary rounded-circle" href='https://www.instagram.com/a_jagrala_007/' target='_blank' rel='noreferrer'><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
              <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
              <h1 className="display-6 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
            </div>
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.5s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 200 }} defaultValue={""} />
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
                {/* <a className="btn btn-link" href>Terms &amp; Condition</a>
                <a className="btn btn-link" href>Support</a> */}
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
                  © <a href="https://webgenius-eight.vercel.app" target='_blank' rel='noreferrer'>WebGenius</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  Designed By <a href="https://abdullahjagrala.vercel.app">Abdullah Jagrala</a> | <a href="https://fuzailkaradia.vercel.app">Fuzail Karadia</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></button> */}
      </div>
    </>
  )
};

export default Home;