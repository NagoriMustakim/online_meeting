import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Nav, Tab } from "react-bootstrap";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Link } from "react-router-dom";
import GooglePlayStore from "assets/images/icons/google-play-store.svg";
import windowLogo from "assets/images/icons/window-logo.svg";
import macLogo from "assets/images/icons/mac-logo.svg";
import ubantuLogo from "assets/images/icons/ubantu-logo.svg";
import copyLogo from "assets/images/icons/copy-logo.svg";

import Layout from "../Layout";

const Download = () => {
  const [os, setOs] = useState('');
  const [isCopied, setCopied] = useState(false);
  useEffect(() => {
    const getUserOS = () => {
      const { platform } = window.navigator;
      if (platform.indexOf("Win") !== -1) return "windows";
      if (platform.indexOf("Mac") !== -1) return "mac";
      if (platform.indexOf("Linux") !== -1) return "linux";
      return "unknown";
    };

    const detectedOs = getUserOS();
    setOs(detectedOs);
    document.querySelector(`.${detectedOs}-width`)?.classList.add("dynaBG");
  }, []);

  const handleOsChange = (newOs) => {
    setCopied(false);
    setOs(newOs);
    ["windows", "mac", "linux"].forEach((os) => {
      document.querySelector(`.${os}-width`)?.classList.toggle("dynaBG", os === newOs);
    });
  };

  const getCommand = () => {
    if (os === 'windows') {
      return "Invoke-WebRequest -Uri https://TonMeet.io/install.bat -OutFile install.bat; Start-Process cmd.exe -ArgumentList '/c install.bat'";
    } else if (os === 'mac') {
      return "curl -sSL -O https://TonMeet.io/install.sh && sh install.sh";
    } else if (os === 'linux') {
      return "curl -sSL -O https://TonMeet.io/install-linux.sh && bash install-linux.sh";
    }
    return '';
  };

  return (
    <Layout>
      <InnerBanner SmallTitle="Download" Title="Download Center" CustomClass="download-banner-section" />
      <section className="download-page pt-100">
        <Container>
          <div className="center">
            <Col lg="4" md="6" className="center-item">
              <div className="download-block wrap-contrainer windows-width" onClick={() => handleOsChange('windows')}>
                <div className="buttons-downloads">
                  <Image src={windowLogo} alt="Windows" />
                </div>
                <h2>Windows 10/11</h2>
              </div>
            </Col>
            <Col lg="3" md="6" className="center-item">
              <div className="download-block wrap-contrainer mac-width" onClick={() => handleOsChange('mac')}>
                <div className="buttons-downloads">
                  <Image src={macLogo} alt="MacOS" />
                </div>
                <h2 style={{ marginTop: "14px" }}>MacOS</h2>
              </div>
            </Col>
            <Col lg="4" md="6" className="center-item">
              <div className="download-block wrap-contrainer linux-width" onClick={() => handleOsChange('linux')}>
                <div className="buttons-downloads">
                  <Image src={ubantuLogo} alt="Ubuntu" />
                </div>
                <h2 style={{ marginTop: "14px" }}>Ubuntu</h2>
              </div>
            </Col>
          </div>

          <div className="copy_part">
            <div className="text-center">
              <p>{`Quick install by copy the command for your ${os === "windows" ? "Windows" : os === "mac" ? "OS" : "OS"}, paste it in your ${os === "windows" ? "Command Prompt" : os === "mac" ? "Terminal" : "Terminal"}, and start using TonMeet!`}</p>
            </div>
            <div className="download-block cmd">
              <img src={copyLogo} alt="Copy" className="copy-logo" />
              <p className="command-text">
                {getCommand()}
              </p>
              <button className="btn" onClick={() => {
                navigator.clipboard.writeText(getCommand())
                setCopied(true)
              }}>{isCopied ? "Copied" : "Copy"}</button>
            </div>
          </div>


          <div className="center-content">
            <Col lg="4" md="6">
              <div className="download-block-two">
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
                    <span className="txt" style={{ width: "12rem" }}>App Store</span>
                  </Link>
                  <Link to="/" className="btn gray-btn">
                    <span>
                      <Image src={GooglePlayStore} alt="Google Play Store" />
                    </span>
                    <span className="txt" style={{ width: "13rem" }}>Google Play</span>
                  </Link>
                </div>
                <p style={{ fontWeight: 500 }}>Expected to release by end of September 2024</p>
              </div>
            </Col>
          </div>

        </Container>
      </section>
    </Layout >
  );
};

export default Download;
