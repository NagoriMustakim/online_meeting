import React from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomeAboutImage from "assets/images/about-us-image.jpg";
import CircleIcon from "assets/images/icons/circle-icon.svg";
import DotsYellow from "assets/images/icons/dots-yellow.svg";

import Layout from "../Layout";
import AllTeam from "views/Components/Team/allTeam";

const AboutUs = () => {
  return (
    <Layout>
      <InnerBanner
        SmallTitle="About Us"
        Title="What We Do"
        CustomClass="vertical-center"
      />

      <section className="repeat-section about-section about-us-page">
        <Container>
          <Row>
            <Col md="6">
              <div className="section-title">
                <div className="small-title">ZohaTub</div>
                <h2>
                  Welcome to our virtual meeting platform for online gatherings!
                </h2>
                <p>
                  At our company, we understand the importance of effective
                  communication and collaboration in today's digital world. Our
                  platform is designed to provide a seamless and interactive
                  experience for all participants, allowing them to connect and
                  engage from anywhere in the world.
                </p>
                <p>
                  With advanced features and user-fr​iendly interface, our
                  virtual meeting platform offers a range of tools and
                  functionalities to enhance productivity and facilitate
                  efficient meetings. Whether you are a small business looking
                  for a cost-effective solution or a large corporation in need
                  of a robust platform, we have got you covered. Trust us to
                  provide you with a reliable and secure virtual meeting
                  experience that will surpass your expectations.
                </p>
              </div>
            </Col>

            <Col md="6" className="mmt-5">
              <div className="home-about-image">
                <Image src={CircleIcon} alt="Circle" className="circle-icon" />
                <Image src={DotsYellow} alt="Circle" className="dots-yellow" />
                <Image src={HomeAboutImage} alt="About" />
                <div className="our-mission-box">
                  <small>Our Mission</small>
                  <h2>
                    The platform that breaks the barriers of human connection
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="repeat-section zatahub-team-section bg-f3f4f6">
        <Container>
          <Row className="align-items-center">
            <Col lg="4" md="12">
              <div className="section-title">
                <div className="small-title">ZohaTub Team</div>
                <h2>We care with leadership</h2>
                <Link to="/" className="btn outline-btn">
                  View All Team
                </Link>
              </div>
            </Col>
            <AllTeam />
          </Row>
          <Image
            src={CircleIcon}
            alt="Circle"
            className="zatahub-team-circle-icon"
          />
          <Image
            src={DotsYellow}
            alt="Circle"
            className="zatahub-team-dots-yellow"
          />
        </Container>
      </section>
    </Layout>
  );
};

export default AboutUs;
