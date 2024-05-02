import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import BottomSvg from "../../assets/svgs/bottom-arrow-svgrepo-com.svg";
const NavBar = () => {

  return (
    <Container>
      <header className="header">
        <nav className="nav">
          <NavLink className="nav_logo">Document AI</NavLink>
          <div className={"nav__menu"} id="nav-menu">
            <NavLink to="/" className="nav__link">
              Homepage
            </NavLink>
            <NavLink to="/news" className="nav__link">
              About us
            </NavLink>
            <NavLink to="/about-us" className="nav__link">
              Services
              <img src={BottomSvg} alt="" className="svgContainer" />
            </NavLink>
            <NavLink to="/favorite" className="nav__link">
              Porfolio
            </NavLink>
            <NavLink to="/location" className="nav__link">
              Contact us
            </NavLink>
            <NavLink to="/get-started" className="nav__link nav__cta">
              Pages
              <img src={BottomSvg} alt="" className="svgContainer" />
            </NavLink>
            <div className="nav__close" id="nav-close">
              <div className="get_started">GET STARTED</div>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default NavBar;
