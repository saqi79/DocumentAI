import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";

import WebImg from "../../assets/svgs/web.svg";

const Services = () => {
  const CardData = [
    {
      logo: WebImg,
      head: "Website Development",
      subhead:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum praesentium rem distinctio totam aut mollitia aliquam atque tempora?",
    },
    {
      logo: WebImg,
      head: "App Development",
      subhead:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum praesentium rem distinctio totam aut mollitia aliquam atque tempora?",
    },
    {
      logo: WebImg,
      head: "Digital Marketing",
      subhead:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum praesentium rem distinctio totam aut mollitia aliquam atque tempora?",
    },
    {
      logo: WebImg,
      head: "Graphic Design",
      subhead:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum praesentium rem distinctio totam aut mollitia aliquam atque tempora?",
    },
    {
      logo: WebImg,
      head: "Brand Identity",
      subhead:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum praesentium rem distinctio totam aut mollitia aliquam atque tempora?",
    },
    {
      logo: WebImg,
      head: "Search Engine Optimization",
      subhead:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum praesentium rem distinctio totam aut mollitia aliquam atque tempora?",
    },
  ];
  return (
    <>
      <Container>
        <div className="main-service-container">
          <div className="service-top pb-5">
            <p>WHAT WE OFFER</p>
            <p>
              Where Strategy Meets Digital. Your <br /> Success Story Begins
              with Digimax.
            </p>
          </div>
          <div className="service-bottom">
            <Row>
              {CardData.map((val, index) => {
                console.log(val.logo);
                return (
                  <Col lg={4}>
                    <div className="serviceCard-outer my-2">
                      <div className="serviceCard">
                        <div className="serviceCard-content">
                          <div className="serviceCard-top pb-4">
                            <img src={val.logo} alt="" />
                          </div>
                          <div className="serviceCard-mid pb-5">
                            <h5>{val.head}</h5>
                            <p>{val.subhead}</p>
                          </div>
                          <div className="learnMore">
                            <div className="get_started">GET STARTED</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Services;
