import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import Facebook from "../../Images/facebook.svg";
import Instagram from "../../Images/Instagram.svg";
import youtube from "../../Images/youtube.svg";
import Linkedin from "../../Images/linkedin.svg";
import Fire from "../../Images/ball.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container container pt-5">
        <footer>
          <Row>
            <Col md={6}>
              <div className="co-discrip">
                <div className="co-head">
                  <h2>Document AL</h2>
                  <p>
                    Transforming Ideas into Digital Excellence. Elevate your
                    online presence with our innovative solutions and strategic
                    digital services.
                  </p>
                </div>
                <div className="socials">
                  <img src={Facebook} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={youtube} alt="" />
                  <img src={Linkedin} alt="" />
                  <img src={Fire} alt="" />
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="Services">
                <h2 className="head-clr">Services</h2>
                <div className="all-Service font-style">
                  <a href="">
                    <span>Website Development</span>
                  </a>
                  <a href="">
                    <span>App Development</span>
                  </a>
                  <a href="">
                    <span>Digital Marketing</span>
                  </a>
                  <a href="">
                    <span>Graphic Design</span>
                  </a>
                  <a href="">
                    <span>Brand Identity</span>
                  </a>
                  <a href="">
                    <span>Search Engine Optimization</span>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="Support">
                <h2 className="head-clr">Support</h2>
                <div className="all-Support font-style">
                  <a href="">
                    <span>Help Center</span>
                  </a>
                  <a href="">
                    <span>FAQ</span>
                  </a>
                  <a href="">
                    <span>Ticket Support</span>
                  </a>
                  <a href="">
                    <span>Sales Support</span>
                  </a>
                  <a href="">
                    <span>Contact us</span>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={2}>
            <div className="Company">
                <h2 className="head-clr">Company</h2>
                <div className="about-co font-style">
                  <a href="">
                    <span>About us</span>
                  </a>
                  <a href="">
                    <span>Our Team</span>
                  </a>
                  <a href="">
                    <span>Careers</span>
                  </a>
                  <a href="">
                    <span>Article & News</span>
                  </a>
                  <a href="">
                    <span>Legal Notices</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </footer>
      </div>
    </>
  );
};

export default Footer;
