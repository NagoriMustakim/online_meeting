import React from "react";
import { Container, Row, Col, Image, Nav, Tab } from "react-bootstrap";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Link } from "react-router-dom";
import WindowsDownload from "assets/images/icons/windows-download.svg";
import DownloadMacAppStore from "assets/images/icons/download-app-store-mac.svg";
import GooglePlayStore from "assets/images/icons/google-play-store.svg";

import Layout from "../Layout";

const Download = () => {
  return (
    <Layout>
      <InnerBanner SmallTitle="Download" Title="Download Center" CustomClass="download-banner-section" />
      <section className="download-page pt-100">
        <Container>
          <Row>
            <Col lg="4" md="6">
              <div className="download-block">
                <h2>Windows 10/11</h2>
                <div className="buttons-downloads">
                  <Link to="/" className="btn">
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
                  <Link to="/">
                    <Image src={WindowsDownload} alt="Windows Store" />
                  </Link>
                </div>
                <p>Supporting Windows 10/11</p>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="download-block">
                <h2>MacOS</h2>
                <div className="buttons-downloads">
                  <Link to="/" className="btn">
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
                  <Link to="/">
                    <Image
                      src={DownloadMacAppStore}
                      alt="MacOS Download App Store"
                    />
                  </Link>
                </div>
                <p>MacOS desktop</p>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="download-block">
                <h2>Ubuntu</h2>
                <div className="buttons-downloads">
                  <Link to="/" className="btn gray-btn">
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
                <p>Expected to release in March 2024</p>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="download-block">
                <h2>Mobile</h2>
                <div className="buttons-downloads">
                  <Link to="/" className="btn gray-btn">
                    <span>
                      <svg
                        width="19"
                        height="23"
                        viewBox="0 0 19 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4869 12.2306C15.4614 9.32448 17.7754 7.91047 17.8817 7.8456C16.5716 5.8595 14.5398 5.5882 13.8266 5.56608C12.1209 5.37883 10.4663 6.62769 9.59711 6.62769C8.71095 6.62769 7.37248 5.58525 5.93051 5.61474C4.07452 5.64423 2.33904 6.76187 1.38624 8.49583C-0.578929 12.0331 0.887147 17.2305 2.77008 20.0895C3.71154 21.4902 4.81181 23.0532 6.25236 22.9986C7.66172 22.9396 8.18775 22.0653 9.8892 22.0653C11.5736 22.0653 12.0685 22.9986 13.5374 22.9632C15.0502 22.9382 16.0016 21.5566 16.9105 20.1441C17.9994 18.5398 18.4361 16.9592 18.4531 16.8781C18.4177 16.8649 15.5167 15.7133 15.4869 12.2306ZM12.7122 3.68615C13.4707 2.70121 13.9883 1.35945 13.8451 0C12.7476 0.0501316 11.3765 0.788835 10.5854 1.75313C9.88636 2.60242 9.2625 3.99431 9.42272 5.30363C10.6563 5.39799 11.921 4.65634 12.7122 3.68615Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    App Store
                  </Link>
                  <Link to="/" className="btn gray-btn">
                    <span>
                      <Image src={GooglePlayStore} alt="Google Play Store" />
                    </span>
                    Google Play
                  </Link>
                </div>
                <Row>
                  <Col md="6">
                    <p>Expected to release by end of January 2024</p>
                  </Col>
                  <Col md="6">
                    <p>Expected to release by end of December 2023</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Download;
