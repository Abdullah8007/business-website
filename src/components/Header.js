/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from 'react';
import '../styles/HeaderStyle.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [nav, setNav] = useState(false);

    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      scrollValue > 200 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    return (
      <div id='header'>
        <header>
          <div className='container-fluid bg-primary'>
            <div className={`${nav === true ? "sticky" : ""} `}>
              <nav className="navbar navbar-expand-lg navbar-dark py-3 px-lg-0 wow fadeIn container"  data-wow-delay="0.1s">
                <a href="#" className="navbar-brand ms-3">West<span className='text-dark'>Coders</span></a>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-3 p-lg-0 nav-link">
                  <NavLink to='/home'><a className="nav-item nav-link active">Home</a></NavLink>
                  <NavLink to='/about'><a className="nav-item nav-link">About</a></NavLink>
                  <NavLink to='/service'><a className="nav-item nav-link">Services</a></NavLink>
                  <NavLink to='/projects'><a className="nav-item nav-link">Projects</a></NavLink>
                  <NavLink to='/contact'><a className="nav-item nav-link">Contact</a></NavLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    )
  };

  export default Header;