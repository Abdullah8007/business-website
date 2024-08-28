/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React } from 'react';
import '../styles/FooterStyle.css';
import Footer from './Footer';
import Header from './Header';
import '../styles/ProjectStyle.css';

const Projects = () => {

  return (
    <>
      {/* <Header /> */}
      <Header />


      {/* Project Section */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated pt-5 slideInDown">Projects</h1>
        </div>
      </div>

      <div className="container-xxl py-5 project-section">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <h6 className="section-title bg-white text-center text-primary px-3">Our Projects</h6>
            <h1 className="display-6 mb-4">Learn More About Our Complete Projects</h1>
          </div>

          <div className='row'>
            <div className="project-carousel wow fadeInUp projects-head bg-white col-lg-6" data-wow-delay="0.1s">
              <div className="project-item border rounded h-100 p-3 m-lg-3 m-sm-0 projects">
                <div className="position-relative mb-4">
                  <img className="img-fluid rounded" src="img/Balwa-Project.png" alt />
                  <a className='balwa' href="img/Balwa-Project.png" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
                </div>
                <h6><a href='https://www.balwacarcool.in/' target='_blank' rel='noreferrer'>Balwa Car Cool</a></h6>
                <span>Car Air Conditioning Service</span>
              </div>
            </div>

            <div className="project-carousel wow fadeInUp projects-head bg-white col-lg-6" data-wow-delay="0.1s">
              <div className="project-item border rounded h-100 p-3 m-lg-3 m-sm-0 projects">
                <div className="position-relative mb-4">
                  <img className="img-fluid rounded" src="img/Chem-Proof Pumps.png" alt />
                  <a className='balwa' href="img/Chem-Proof Pumps.png" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
                </div>
                <h6><a href='https://www.chemproofpump.com/' target='_blank' rel='noreferrer'>Chem-Proof Pumps India Pvt Ltd</a></h6>
                <span>One Stop Solution For All Your Pumping...</span>
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

export default Projects;