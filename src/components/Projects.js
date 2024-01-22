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
          <div className="owl-carousel project-carousel wow fadeInUp projects-head bg-white" data-wow-delay="0.1s">
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={1}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/Balwa-Project.png" alt />
                <a href="img/Balwa-Project.png" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>Balwa Car Cool</h6>
              <span>Car Air Conditioning Service</span>
            </div>
            {/* <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={2}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-2.jpg" alt />
                <a href="img/project-2.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={3}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-3.jpg" alt />
                <a href="img/project-2.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={4}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-4.jpg" alt />
                <a href="img/project-4.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={5}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-5.jpg" alt />
                <a href="img/project-5.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={6}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-6.jpg" alt />
                <a href="img/project-6.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={7}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-7.jpg" alt />
                <a href="img/project-7.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={8}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-8.jpg" alt />
                <a href="img/project-8.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={9}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-9.jpg" alt />
                <a href="img/project-9.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div>
            <div className="project-item border rounded h-100 p-4 m-3 projects" data-dot={10}>
              <div className="position-relative mb-4">
                <img className="img-fluid rounded" src="img/project-10.jpg" alt />
                <a href="img/project-10.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x" /></a>
              </div>
              <h6>UI / UX Design</h6>
              <span>Digital agency website design and development</span>
            </div> */}
          </div>
        </div>
      </div>


      {/* Footer Section */}

      <Footer />

    </>
  )
};

export default Projects;