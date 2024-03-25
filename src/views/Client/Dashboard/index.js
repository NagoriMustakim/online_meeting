import React from "react";
import { Container, Row, Col, Image, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import ScrollAnimation from "react-animate-on-scroll";

import SlackLogo from "assets/images/icons/slack-logo.svg";
import PrudentialLogo from "assets/images/icons/prudential-logo.svg";
import MicrosoftLogo from "assets/images/icons/microsoft-logo.svg";
import ZooverLogo from "assets/images/icons/zoover-logo.svg";
import HomeBanner from "assets/images/homebanner.png";
import QuickStart from "assets/images/icons/quick-start.png";
import RecordPlay from "assets/images/icons/record-play.png";
import EasyCustomization from "assets/images/icons/easy-customization.png";
import SocialHookup from "assets/images/icons/social-hookup.png";
import LineCurve from "assets/images/icons/line-curve.svg";
import FinancialServices from "assets/images/financial-services.jpg";
import Dots from "assets/images/icons/dots.svg";
import HomeAboutImage from "assets/images/home-about-image.jpg";
import CircleIcon from "assets/images/icons/circle-icon.svg";
import DotsYellow from "assets/images/icons/dots-yellow.svg";
import PartnersLogo1 from "assets/images/partners-logo/partners-1.png";
import PartnersLogo2 from "assets/images/partners-logo/partners-2.png";
import PartnersLogo3 from "assets/images/partners-logo/partners-3.png";
import PartnersLogo4 from "assets/images/partners-logo/partners-4.png";
import PartnersLogo5 from "assets/images/partners-logo/partners-5.png";
import ClientImage from "assets/images/client-image.jpg";
import EducationIndustry from "assets/images/education-industry.jpg";
import TechnologyIndustry from "assets/images/technology-industry.jpg";
import HealthcareImage from "assets/images/healthcare.jpg";

import Layout from "../Layout";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Dashboard = () => {
  return (
    <Layout>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col md="6">
              <ScrollAnimation animateIn="fadeInLeft" delay={50}>
                <div className="banner-content">
                  <div className="small-title">Virtual Meeting Assistance</div>
                  <h1>
                    Virtual <span className="bg-text">Meeting</span> Platform
                    For Online Conferenced Video
                  </h1>
                  <p>
                    Replace formal video conferences with a tranquil,
                    user-centric solution seamlessly incorporated into your
                    platform through <b>ZATAHUB</b>
                  </p>

                  <Link to="/download" className="btn">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.7 17.5H15.3M12 5.4V13.1M12 13.1L15.85 9.25M12 13.1L8.15 9.25M12 23C18.0753 23 23 18.0753 23 12C23 5.9247 18.0753 1 12 1C5.9247 1 1 5.9247 1 12C1 18.0753 5.9247 23 12 23Z"
                          stroke="CurrentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Download
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            <Col md="6" className="text-center text-lg-end mt30">
              <ScrollAnimation animateIn="fadeInRight" delay={100}>
                <Image src={HomeBanner} alt="Banner" />
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
        <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="bg-white">
            <div className="logos-section">
              <div className="logo-item">
                <Image src={SlackLogo} alt="Slack" />
              </div>
              <div className="logo-item">
                <Image src={PrudentialLogo} alt="Prudential" />
              </div>
              <div className="logo-item">
                <Image src={MicrosoftLogo} alt="Microsoft" />
              </div>
              <div className="logo-item">
                <Image src={ZooverLogo} alt="Zoover" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section className="repeat-section advantages-section bg-fff6f0">
        <Image src={LineCurve} className="LineCurve" alt="Line Curve" />
        <Container>
          <Row className="align-items-center">
            <Col lg="5">
              <ScrollAnimation animateIn="fadeInLeft" delay={50}>
                <div className="section-title">
                  <h2>What Advantages Of Using Our Application</h2>
                  <p>
                    This video conferencing platform distinguishes itself
                    through its unique advantages, prioritizing user comfort as
                    a paramount objective.
                  </p>
                </div>
              </ScrollAnimation>
            </Col>
            <Col lg="7">
              <Row className="">
                <Col md="6">
                  <ScrollAnimation animateIn="fadeInUp" delay={50}>
                    <div className="block-design">
                      <div className="icon bg-573feb">
                        <Image src={QuickStart} alt="Quick Start" />
                      </div>
                      <h3>Quick Start</h3>
                      <p>
                        Initiate your journey with unparalleled ease – a single
                        click unleashes the seamless, efficient start you
                        deserve.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" delay={150}>
                    <div className="block-design">
                      <div className="icon bg-fecf25">
                        <Image src={RecordPlay} alt="Record & Play" />
                      </div>
                      <h3>Record & Play</h3>
                      <p>
                        Are you tired of missing out on important information
                        during online meetings? Look no further! With our
                        virtual meeting platform for online conferences, you can
                        now record and play back any session at your
                        convenience.
                      </p>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col md="6" className="mt-6">
                  <ScrollAnimation animateIn="fadeInUp" delay={100}>
                    <div className="block-design">
                      <div className="icon bg-f84d00">
                        <Image
                          src={EasyCustomization}
                          alt="Easy Customization"
                        />
                      </div>
                      <h3>Easy Customization</h3>
                      <p>
                        Simplify personalization with our platform's
                        user-friendly customization, enabling effortless
                        fine-tuning of your experience.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" delay={200}>
                    <div className="block-design">
                      <div className="icon bg-b4a6ff">
                        <Image src={SocialHookup} alt="Social Hookup" />
                      </div>
                      <h3>Social Hookup</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </div>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="repeat-section">
        <Container>
          <ScrollAnimation animateIn="fadeInUp" delay={50}>
            <div className="section-title text-center">
              <h2>
                How to empower your{" "}
                <span className="bg-text">organization</span>
                with cross-industry and cross-border solutions
              </h2>
            </div>
          </ScrollAnimation>
          <div className="custom-tab-design">
            <Tab.Container defaultActiveKey="first">
              <Row className="align-items-center">
                <Col lg={2}>
                  <ScrollAnimation animateIn="fadeInUp" delay={50}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.337"
                            height="21.497"
                            viewBox="0 0 20.337 21.497"
                          >
                            <path
                              d="M-1071.494-197.677l-3.193-1.061a4.152,4.152,0,0,1-2.694-3.742l.01-4.52-1.259-.822a3.924,3.924,0,0,1-1.787-3.3,3.924,3.924,0,0,1,1.787-3.3l6.02-3.93a4.356,4.356,0,0,1,2.372-.653,4.351,4.351,0,0,1,2.391.666l5.988,3.929a3.927,3.927,0,0,1,1.778,3.292q0,.2-.019.387v5.477a.751.751,0,0,1-.751.751.75.75,0,0,1-.75-.751v-2.758q-.125.1-.259.185l-1.262.828v4.515a4.154,4.154,0,0,1-2.693,3.742l-3.191,1.06-.006,0a4.213,4.213,0,0,1-1.243.172A4.135,4.135,0,0,1-1071.494-197.677Zm-4.387-4.8a2.682,2.682,0,0,0,1.667,2.317l3.19,1.06a3.109,3.109,0,0,0,1.551,0l3.186-1.059a2.684,2.684,0,0,0,1.667-2.318v-3.531l-3.228,2.118a4.371,4.371,0,0,1-2.381.655,4.376,4.376,0,0,1-2.382-.655l-3.26-2.129Zm4.092-14.615-6.022,3.931a2.4,2.4,0,0,0-1.108,2.042,2.4,2.4,0,0,0,1.108,2.042l6.02,3.93a2.911,2.911,0,0,0,1.56.41,2.908,2.908,0,0,0,1.558-.41l5.99-3.93a2.394,2.394,0,0,0,1.083-1.727v-.446a.763.763,0,0,1,.007-.106,2.4,2.4,0,0,0-1.09-1.8l-5.99-3.929,0,0a2.89,2.89,0,0,0-1.561-.415A2.9,2.9,0,0,0-1071.788-217.094Z"
                              transform="translate(1080.418 219.002)"
                              fill="currentColor"
                            />
                          </svg>
                          Education <br /> Industry
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21.499"
                            height="21.5"
                            viewBox="0 0 21.499 21.5"
                          >
                            <path
                              d="M-1103.25-236.5c-2.771,0-4.647-.586-5.906-1.844S-1111-241.48-1111-244.25v-6c0-2.77.586-4.647,1.844-5.9s3.135-1.845,5.906-1.845h6c2.771,0,4.648.587,5.906,1.845s1.844,3.135,1.844,5.9v6c0,2.77-.586,4.647-1.844,5.906s-3.135,1.844-5.906,1.844Zm-4.845-18.595c-.959.959-1.406,2.5-1.406,4.845v6c0,2.346.446,3.886,1.406,4.845s2.5,1.406,4.845,1.406h6c2.347,0,3.886-.447,4.845-1.406s1.406-2.5,1.406-4.845v-6c0-2.346-.446-3.885-1.406-4.845s-2.5-1.4-4.845-1.4h-6C-1105.6-256.5-1107.136-256.054-1108.094-255.1Zm2.165,14.006a.751.751,0,0,1-.75-.751v-5.12a1.892,1.892,0,0,1,1.89-1.89h1.891v-2.66a1.892,1.892,0,0,1,1.89-1.89h1.52a1.887,1.887,0,0,1,1.88,1.89v4.36h1.907a1.908,1.908,0,0,1,1.89,1.878v3.422a.75.75,0,0,1-.751.75h-7.451a.755.755,0,0,1-.127.011Zm.751-5.871v4.37h2.281v-4.76h-1.891A.39.39,0,0,0-1105.179-246.96Zm7.578,4.361h2.29v-2.653a.4.4,0,0,0-.39-.4h-1.9Zm-1.508,0v-8.91a.381.381,0,0,0-.38-.391h-1.52a.391.391,0,0,0-.39.391v3.294a.762.762,0,0,1,.009.116v5.5Z"
                              transform="translate(1111 258)"
                              fill="currentColor"
                            />
                          </svg>
                          Financial <br /> Services
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21.499"
                            height="21.5"
                            viewBox="0 0 21.499 21.5"
                          >
                            <path
                              d="M-1057.38-231.5c-1.937,0-3-.6-3.409-2h-5.512a.751.751,0,0,1-.75-.751.75.75,0,0,1,.75-.75h2.3v-2.8h-2.25c-1.408,0-2.834-.123-3.73-1.02a4.887,4.887,0,0,1-1.018-3.486c0-.015,0-.03,0-.045s0-.02,0-.03q0-.085,0-.17v-5.7c0-1.408.123-2.834,1.02-3.73s2.323-1.02,3.73-1.02h10c1.408,0,2.834.123,3.73,1.02s1.02,2.322,1.02,3.73v1.179a2.515,2.515,0,0,1,1.417.964,4.1,4.1,0,0,1,.581,2.447v8.56c0,2.557-1.042,3.6-3.6,3.6Zm-2.1-12.16v8.56a2.448,2.448,0,0,0,.4,1.7,2.446,2.446,0,0,0,1.7.4h4.28a2.444,2.444,0,0,0,1.7-.4,2.446,2.446,0,0,0,.4-1.7v-8.56c0-1.754-.507-1.949-1.342-2.056a6.555,6.555,0,0,0-.759-.044h-4.28a3.878,3.878,0,0,0-1.317.17,1.054,1.054,0,0,0-.38.232,1.71,1.71,0,0,0-.375,1.061v0l0,.05c0,.022,0,.045-.005.068s0,.055-.005.083c0,.006,0,.011,0,.017s0,.023,0,.035Q-1059.48-243.861-1059.48-243.66Zm-1.5,8.66q0-.05,0-.1v-2.7h-1.52v2.8Zm-7.94-4.881c.407.407,1.206.58,2.67.58h5.27v-2.3h-8.488A2.674,2.674,0,0,0-1068.92-239.881Zm7.94-3.219v-.56c0-2.557,1.043-3.6,3.6-3.6h4.38v-.99c0-1.465-.174-2.263-.581-2.67s-1.205-.58-2.669-.58h-10c-1.464,0-2.263.173-2.67.58s-.58,1.205-.58,2.67v5.15Zm5.74,8.75h0a2.893,2.893,0,0,1-2.89-2.89,2.9,2.9,0,0,1,.608-1.77l.026-.033a2.876,2.876,0,0,1,2.255-1.086h0a2.887,2.887,0,0,1,1.89.7l.008.006a2.929,2.929,0,0,1,.992,2.181,2.893,2.893,0,0,1-2.89,2.89Zm0-1.5a1.393,1.393,0,0,0,1.371-1.162,1.4,1.4,0,0,0,.019-.229,1.425,1.425,0,0,0-.485-1.056,1.388,1.388,0,0,0-.905-.334,1.387,1.387,0,0,0-1.1.541,1.389,1.389,0,0,0-.289.763q0,.043,0,.086A1.392,1.392,0,0,0-1055.241-235.85Zm-1.82-6.74h0a1.823,1.823,0,0,1,1.821-1.82,1.822,1.822,0,0,1,1.82,1.82h0a1.822,1.822,0,0,1-1.82,1.82A1.823,1.823,0,0,1-1057.061-242.59Zm1.821.319a.32.32,0,0,0,.319-.32.32.32,0,0,0-.319-.32.321.321,0,0,0-.32.32.321.321,0,0,0,.152.272l0,0,.007,0,.007,0h0a.319.319,0,0,0,.123.036Z"
                              transform="translate(1071 253)"
                              fill="currentColor"
                            />
                          </svg>
                          Technology <br /> Industry
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21.5"
                            height="21.5"
                            viewBox="0 0 21.5 21.5"
                          >
                            <path
                              d="M-1025.25-196.5h-19a.75.75,0,0,1-.75-.751.75.75,0,0,1,.75-.75h.25v-15.25a4.926,4.926,0,0,1,1.057-3.319A4.633,4.633,0,0,1-1039.25-218h10a4.634,4.634,0,0,1,3.693,1.431,4.93,4.93,0,0,1,1.057,3.319V-198h.249a.75.75,0,0,1,.751.75.75.75,0,0,1-.751.751Zm-.75-1.5v-15.25a3.5,3.5,0,0,0-.693-2.339,3.225,3.225,0,0,0-2.557-.912h-10a3.229,3.229,0,0,0-2.558.912,3.5,3.5,0,0,0-.692,2.339V-198h4.49v-5.31a1.692,1.692,0,0,1,1.69-1.69h4.129a1.672,1.672,0,0,1,1.2.5,1.658,1.658,0,0,1,.477,1.192v5.3Zm-6.009,0v-5.324a.168.168,0,0,0-.049-.122.184.184,0,0,0-.132-.054h-4.129a.2.2,0,0,0-.19.19V-198ZM-1035-208.25V-210h-1.75a.75.75,0,0,1-.751-.751.75.75,0,0,1,.751-.75h1.75v-1.75a.75.75,0,0,1,.75-.751.75.75,0,0,1,.751.751v1.75h1.75a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.751h-1.75v1.75a.75.75,0,0,1-.751.75A.75.75,0,0,1-1035-208.25Z"
                              transform="translate(1045 218)"
                              fill="currentColor"
                            />
                          </svg>
                          Health <br /> Care
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </ScrollAnimation>
                </Col>
                <Col lg={10}>
                  <ScrollAnimation animateIn="fadeInRight" delay={50}>
                    <Tab.Content>
                      <Tab.Pane
                        eventKey="first"
                        className="fadeAnimationRightCustom"
                      >
                        <div className="tab-image-section">
                          <Image
                            src={EducationIndustry}
                            alt="Education Industry"
                          />
                          <Image src={Dots} alt="Dots" className="dots" />
                        </div>
                        <div className="tab-content-section">
                          <h3>Education Industry</h3>
                          <p>
                            The education industry has undergone a significant
                            transformation in recent years, with the rise of
                            online learning platforms and virtual meeting
                            platforms. As more and more students turn to online
                            education for its flexibility and convenience, the
                            demand for virtual meeting platforms has increased.
                            These platforms provide a space for students and
                            teachers to connect and engage in real-time
                            discussions,
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        className="fadeAnimationRightCustom"
                      >
                        <div className="tab-image-section">
                          <Image
                            src={FinancialServices}
                            alt="Financial Services"
                          />
                          <Image src={Dots} alt="Dots" className="dots" />
                        </div>

                        <div className="tab-content-section">
                          <h3>Financial Services</h3>
                          <p>
                            In today's digital age, financial services have
                            become increasingly accessible and convenient
                            through the use of virtual meeting platforms for
                            online interactions. These platforms provide a
                            secure and efficient way for individuals to connect
                            with financial advisors and institutions from the
                            comfort of their own homes.
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="third"
                        className="fadeAnimationRightCustom"
                      >
                        <div className="tab-image-section">
                          <Image
                            src={TechnologyIndustry}
                            alt="Technology Industry"
                          />
                          <Image src={Dots} alt="Dots" className="dots" />
                        </div>

                        <div className="tab-content-section">
                          <h3>Technology Industry</h3>
                          <p>
                            The technology industry is constantly evolving and
                            shaping the way we live and work. With the rise of
                            the internet and digital communication, virtual
                            meeting platforms have become essential for
                            businesses and individuals alike. These platforms
                            provide a convenient and efficient way to conduct
                            meetings online, eliminating the need for physical
                            presence.
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="fourth"
                        className="fadeAnimationRightCustom"
                      >
                        <div className="tab-image-section">
                          <Image src={HealthcareImage} alt="Health Care" />
                          <Image src={Dots} alt="Dots" className="dots" />
                        </div>

                        <div className="tab-content-section">
                          <h3>Health Care</h3>
                          <p>
                            With the advent of technology, the healthcare
                            industry has witnessed significant advancements in
                            recent years. One such innovation is the virtual
                            meeting platform for online health care services.
                            This platform allows patients and healthcare
                            professionals to connect virtually, eliminating the
                            need for physical consultations.
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </section>

      <section className="repeat-section about-section bg-f3f4f6">
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <ScrollAnimation animateIn="fadeInLeft" delay={50}>
                <div className="section-title">
                  <div className="small-title">About Us</div>
                  <h2>What We Do</h2>
                  <p>
                    Welcome to our virtual meeting platform for online
                    gatherings! At our company, we understand the importance of
                    effective communication and collaboration in today's digital
                    world.
                  </p>
                  <p>
                    Our platform is designed to provide a seamless and
                    interactive experience for all participants, allowing them
                    to connect and engage from anywhere in the world.
                  </p>
                  <Link href="/" className="btn outline-btn">
                    Learn More
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            <Col md="6" className="mt30">
              <div className="home-about-image">
                <Image src={CircleIcon} alt="Circle" className="circle-icon" />
                <Image src={DotsYellow} alt="Circle" className="dots-yellow" />
                <ScrollAnimation animateIn="fadeInRight" delay={100}>
                  <Image src={HomeAboutImage} alt="About" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={50}>
                  <div className="our-mission-box">
                    <small>Our Mission</small>
                    <h2>
                      The platform that breaks the barriers of human connection
                    </h2>
                  </div>
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="repeat-section trusted-partners-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="4">
              <ScrollAnimation animateIn="fadeInUp" delay={50}>
                <div className="section-title">
                  <div className="small-title">Partners</div>
                  <h2 className="mb-0">Trusted Global Partners Network</h2>
                </div>
              </ScrollAnimation>
            </Col>
            <Col lg="8">
              <ScrollAnimation animateIn="fadeInUp" delay={100}>
                <ul>
                  <li>
                    <Image src={PartnersLogo1} alt="Partner" />
                  </li>
                  <li>
                    <Image src={PartnersLogo2} alt="Partner" />
                  </li>
                  <li>
                    <Image src={PartnersLogo4} alt="Partner" />
                  </li>
                  <li>
                    <Image src={PartnersLogo3} alt="Partner" />
                  </li>
                  <li>
                    <Image src={PartnersLogo5} alt="Partner" />
                  </li>
                </ul>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonail-section bg-b4a6ff-light">
        <Container>
          <Row>
            <ScrollAnimation animateIn="fadeInUp" delay={50}>
              <div className="section-title">
                <div className="small-title">Testimonials</div>
                <h2>
                  Bringing value <br /> across different brands.
                </h2>
                <Link to="/" className="btn outline-btn">
                  Read Success Stories
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
              >
                <SwiperSlide>
                  <Row className="align-items-center">
                    <Col md="6" className="order-2 order-md-1">
                      <div className="testimonails-left-section">
                        <div className="client-image">
                          <Image src={ClientImage} alt="Client" />
                          <span></span>
                          <div className="quote-icon">
                            <svg
                              width="23"
                              height="17"
                              viewBox="0 0 23 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.76 0.319998L7.4 11.56L6.08 6.52C7.65333 6.52 8.92 6.96 9.88 7.84C10.8667 8.72 11.36 9.94667 11.36 11.52C11.36 13.0667 10.8533 14.3067 9.84 15.24C8.85333 16.1733 7.6 16.64 6.08 16.64C4.56 16.64 3.29333 16.1733 2.28 15.24C1.29333 14.3067 0.8 13.0667 0.8 11.52C0.8 11.0933 0.826667 10.6667 0.88 10.24C0.96 9.81333 1.10667 9.29333 1.32 8.68C1.56 8.06666 1.90667 7.26666 2.36 6.28L5.16 0.319998H10.76ZM22.36 0.319998L19 11.56L17.68 6.52C19.2533 6.52 20.52 6.96 21.48 7.84C22.4667 8.72 22.96 9.94667 22.96 11.52C22.96 13.0667 22.4533 14.3067 21.44 15.24C20.4533 16.1733 19.2 16.64 17.68 16.64C16.16 16.64 14.8933 16.1733 13.88 15.24C12.8933 14.3067 12.4 13.0667 12.4 11.52C12.4 11.0933 12.4267 10.6667 12.48 10.24C12.56 9.81333 12.7067 9.29333 12.92 8.68C13.16 8.06666 13.5067 7.26666 13.96 6.28L16.76 0.319998H22.36Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <Image
                            src={DotsYellow}
                            alt="Dots"
                            className="dots-yellow"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md="6" className="order-1 order-md-2">
                      <div className="testimonails-right-section">
                        <div className="client-feedback-detail">
                          <div className="quote">
                            <svg
                              width="55"
                              height="40"
                              viewBox="0 0 55 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.824 0.767996L16.76 27.744L13.592 15.648C17.368 15.648 20.408 16.704 22.712 18.816C25.08 20.928 26.264 23.872 26.264 27.648C26.264 31.36 25.048 34.336 22.616 36.576C20.248 38.816 17.24 39.936 13.592 39.936C9.944 39.936 6.904 38.816 4.472 36.576C2.104 34.336 0.92 31.36 0.92 27.648C0.92 26.624 0.984 25.6 1.112 24.576C1.304 23.552 1.656 22.304 2.168 20.832C2.744 19.36 3.576 17.44 4.664 15.072L11.384 0.767996H24.824ZM52.664 0.767996L44.6 27.744L41.432 15.648C45.208 15.648 48.248 16.704 50.552 18.816C52.92 20.928 54.104 23.872 54.104 27.648C54.104 31.36 52.888 34.336 50.456 36.576C48.088 38.816 45.08 39.936 41.432 39.936C37.784 39.936 34.744 38.816 32.312 36.576C29.944 34.336 28.76 31.36 28.76 27.648C28.76 26.624 28.824 25.6 28.952 24.576C29.144 23.552 29.496 22.304 30.008 20.832C30.584 19.36 31.416 17.44 32.504 15.072L39.224 0.767996H52.664Z"
                                fill="currentCOlor"
                              />
                            </svg>
                          </div>
                          <h3>
                            Save time managing social media for your business
                          </h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <p>
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here',
                            making it look like readable English.
                          </p>
                          <div className="stars">
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="client-name">
                            <h4>John Doe</h4>
                            <p>- TeleFigon</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </SwiperSlide>
                <SwiperSlide>
                  <Row className="align-items-center">
                    <Col md="6" className="order-2 order-md-1">
                      <div className="testimonails-left-section">
                        <div className="client-image">
                          <Image src={ClientImage} alt="Client" />
                          <span></span>
                          <div className="quote-icon">
                            <svg
                              width="23"
                              height="17"
                              viewBox="0 0 23 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.76 0.319998L7.4 11.56L6.08 6.52C7.65333 6.52 8.92 6.96 9.88 7.84C10.8667 8.72 11.36 9.94667 11.36 11.52C11.36 13.0667 10.8533 14.3067 9.84 15.24C8.85333 16.1733 7.6 16.64 6.08 16.64C4.56 16.64 3.29333 16.1733 2.28 15.24C1.29333 14.3067 0.8 13.0667 0.8 11.52C0.8 11.0933 0.826667 10.6667 0.88 10.24C0.96 9.81333 1.10667 9.29333 1.32 8.68C1.56 8.06666 1.90667 7.26666 2.36 6.28L5.16 0.319998H10.76ZM22.36 0.319998L19 11.56L17.68 6.52C19.2533 6.52 20.52 6.96 21.48 7.84C22.4667 8.72 22.96 9.94667 22.96 11.52C22.96 13.0667 22.4533 14.3067 21.44 15.24C20.4533 16.1733 19.2 16.64 17.68 16.64C16.16 16.64 14.8933 16.1733 13.88 15.24C12.8933 14.3067 12.4 13.0667 12.4 11.52C12.4 11.0933 12.4267 10.6667 12.48 10.24C12.56 9.81333 12.7067 9.29333 12.92 8.68C13.16 8.06666 13.5067 7.26666 13.96 6.28L16.76 0.319998H22.36Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <Image
                            src={DotsYellow}
                            alt="Dots"
                            className="dots-yellow"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md="6" className="order-1 order-md-2">
                      <div className="testimonails-right-section">
                        <div className="client-feedback-detail">
                          <div className="quote">
                            <svg
                              width="55"
                              height="40"
                              viewBox="0 0 55 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.824 0.767996L16.76 27.744L13.592 15.648C17.368 15.648 20.408 16.704 22.712 18.816C25.08 20.928 26.264 23.872 26.264 27.648C26.264 31.36 25.048 34.336 22.616 36.576C20.248 38.816 17.24 39.936 13.592 39.936C9.944 39.936 6.904 38.816 4.472 36.576C2.104 34.336 0.92 31.36 0.92 27.648C0.92 26.624 0.984 25.6 1.112 24.576C1.304 23.552 1.656 22.304 2.168 20.832C2.744 19.36 3.576 17.44 4.664 15.072L11.384 0.767996H24.824ZM52.664 0.767996L44.6 27.744L41.432 15.648C45.208 15.648 48.248 16.704 50.552 18.816C52.92 20.928 54.104 23.872 54.104 27.648C54.104 31.36 52.888 34.336 50.456 36.576C48.088 38.816 45.08 39.936 41.432 39.936C37.784 39.936 34.744 38.816 32.312 36.576C29.944 34.336 28.76 31.36 28.76 27.648C28.76 26.624 28.824 25.6 28.952 24.576C29.144 23.552 29.496 22.304 30.008 20.832C30.584 19.36 31.416 17.44 32.504 15.072L39.224 0.767996H52.664Z"
                                fill="currentCOlor"
                              />
                            </svg>
                          </div>
                          <h3>
                            Save time managing social media for your business
                          </h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <p>
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here',
                            making it look like readable English.
                          </p>
                          <div className="stars">
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="client-name">
                            <h4>John Doe</h4>
                            <p>- TeleFigon</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </SwiperSlide>
                <SwiperSlide>
                  <Row className="align-items-center">
                    <Col md="6" className="order-2 order-md-1">
                      <div className="testimonails-left-section">
                        <div className="client-image">
                          <Image src={ClientImage} alt="Client" />
                          <span></span>
                          <div className="quote-icon">
                            <svg
                              width="23"
                              height="17"
                              viewBox="0 0 23 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.76 0.319998L7.4 11.56L6.08 6.52C7.65333 6.52 8.92 6.96 9.88 7.84C10.8667 8.72 11.36 9.94667 11.36 11.52C11.36 13.0667 10.8533 14.3067 9.84 15.24C8.85333 16.1733 7.6 16.64 6.08 16.64C4.56 16.64 3.29333 16.1733 2.28 15.24C1.29333 14.3067 0.8 13.0667 0.8 11.52C0.8 11.0933 0.826667 10.6667 0.88 10.24C0.96 9.81333 1.10667 9.29333 1.32 8.68C1.56 8.06666 1.90667 7.26666 2.36 6.28L5.16 0.319998H10.76ZM22.36 0.319998L19 11.56L17.68 6.52C19.2533 6.52 20.52 6.96 21.48 7.84C22.4667 8.72 22.96 9.94667 22.96 11.52C22.96 13.0667 22.4533 14.3067 21.44 15.24C20.4533 16.1733 19.2 16.64 17.68 16.64C16.16 16.64 14.8933 16.1733 13.88 15.24C12.8933 14.3067 12.4 13.0667 12.4 11.52C12.4 11.0933 12.4267 10.6667 12.48 10.24C12.56 9.81333 12.7067 9.29333 12.92 8.68C13.16 8.06666 13.5067 7.26666 13.96 6.28L16.76 0.319998H22.36Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <Image
                            src={DotsYellow}
                            alt="Dots"
                            className="dots-yellow"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md="6" className="order-1 order-md-2">
                      <div className="testimonails-right-section">
                        <div className="client-feedback-detail">
                          <div className="quote">
                            <svg
                              width="55"
                              height="40"
                              viewBox="0 0 55 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.824 0.767996L16.76 27.744L13.592 15.648C17.368 15.648 20.408 16.704 22.712 18.816C25.08 20.928 26.264 23.872 26.264 27.648C26.264 31.36 25.048 34.336 22.616 36.576C20.248 38.816 17.24 39.936 13.592 39.936C9.944 39.936 6.904 38.816 4.472 36.576C2.104 34.336 0.92 31.36 0.92 27.648C0.92 26.624 0.984 25.6 1.112 24.576C1.304 23.552 1.656 22.304 2.168 20.832C2.744 19.36 3.576 17.44 4.664 15.072L11.384 0.767996H24.824ZM52.664 0.767996L44.6 27.744L41.432 15.648C45.208 15.648 48.248 16.704 50.552 18.816C52.92 20.928 54.104 23.872 54.104 27.648C54.104 31.36 52.888 34.336 50.456 36.576C48.088 38.816 45.08 39.936 41.432 39.936C37.784 39.936 34.744 38.816 32.312 36.576C29.944 34.336 28.76 31.36 28.76 27.648C28.76 26.624 28.824 25.6 28.952 24.576C29.144 23.552 29.496 22.304 30.008 20.832C30.584 19.36 31.416 17.44 32.504 15.072L39.224 0.767996H52.664Z"
                                fill="currentCOlor"
                              />
                            </svg>
                          </div>
                          <h3>
                            Save time managing social media for your business
                          </h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <p>
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here',
                            making it look like readable English.
                          </p>
                          <div className="stars">
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="client-name">
                            <h4>John Doe</h4>
                            <p>- TeleFigon</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </SwiperSlide>
              </Swiper>

              <div className="static-text">There are many variations</div>
            </ScrollAnimation>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Dashboard;
