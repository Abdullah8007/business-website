/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterStyle.css';

const About = () => {
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

      {/* About Section */}
      <div>
        <div className="container-xxl py-5">
          <div className="container mt-5">
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
                <p>Beyond Boundaries, Beyond Code: At <span className='text-primary fs-4'>CodeNexus</span>, we're not just web developers; we're digital storytellers, architects of online experiences, and champions of innovation. Our passion for pushing boundaries translates into web solutions that redefine possibilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-certificate fa-4x text-primary mb-4" />
                <h5 className="mb-3">Years Experience</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">1</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users-cog fa-4x text-primary mb-4" />
                <h5 className="mb-3">Team Members</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">2</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users fa-4x text-primary mb-4" />
                <h5 className="mb-3">Satisfied Clients</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">1</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-check fa-4x text-primary mb-4" />
                <h5 className="mb-3">Projects Done</h5>
                <h1 className="display-5 mb-0" data-toggle="counter-up">3</h1>
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

export default About;