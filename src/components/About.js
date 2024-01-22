/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React } from 'react';
import '../styles/FooterStyle.css';
import Footer from './Footer';
import Header from './Header';

const About = () => {
  return (
    <>
      <Header />

      {/* About Section */}
      <div>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-3">About</h1>
          </div>
        </div>


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
                  <p>Beyond Boundaries, Beyond Code: At <span className='text-primary fs-4'>WestCoders</span>, we're not just web developers; we're digital storytellers, architects of online experiences, and champions of innovation. Our passion for pushing boundaries translates into web solutions that redefine possibilities.</p>
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
      <Footer />
    </>
  )
};

export default About;