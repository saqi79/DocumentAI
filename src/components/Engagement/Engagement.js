import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Engagement.css";

import Image1Img from "../../assets/images/logo_1.png";
import Image2Img from "../../assets/images/logo_2.png";
import Image3Img from "../../assets/images/logo_3.png";
import Image4Img from "../../assets/images/logo_4.png";
import Image5Img from "../../assets/images/logo_5.png";
import Image7Img from "../../assets/images/logo_7.png";
import Image8Img from "../../assets/images/logo_8.png";

const Engagement = () => {
  return (
    <>
      <Container>
        <div className="main-engagement-container">
          <div className="engagement-top">
            <p>
              Join over 300,000+ businesses to <br /> create unique brand
              designs.
            </p>
          </div>
          <div className="engagement-bottom">
            <Row>
              <Col lg={12}>
                <Container>
                  <Row>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image8Img} alt="" />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image2Img} alt="" />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image3Img} alt="" />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image4Img} alt="" />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={12}>
                <Container>
                  <Row>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image5Img} alt="" />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image2Img} alt="" />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image7Img} alt="" />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="engagement-imgaes">
                        <img src={Image8Img} alt="" />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Engagement;
