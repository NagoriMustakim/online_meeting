import React from "react";
import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import "../../../assets/css/footer.scss";

import Logo from "assets/images/logo.svg";

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section">
        <Container>
          <div className="footer-all-cols">
            <div className="footer-cols">
              <Image src={Logo} alt="Logo" />
              <p>
                We are the bridge that connects hearts and minds globally.
                Through seamless video communication
              </p>
            </div>
            <div className="footer-cols">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/scan">Scan</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="footer-cols">
              <ul>
                <li>
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Testimonials</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-cols">
              <ul style={{ width: "100px" }}>
                <li>
                  <Link to="/temps-of-service">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-cols">
              <p>Follow us on</p>
              <ul>
                <li>
                  <Link to="https://discord.gg/m75zvtcYST" target="_blank">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6361 1.87549C17.212 1.20919 15.6893 0.724949 14.0973 0.449219C13.9018 0.802695 13.6734 1.27813 13.5159 1.65633C11.8236 1.40184 10.1469 1.40184 8.48573 1.65633C8.32828 1.27813 8.09468 0.802695 7.89741 0.449219C6.30374 0.724949 4.77928 1.21097 3.35518 1.87902C0.482756 6.21962 -0.29591 10.4524 0.0934236 14.6251C1.99856 16.0478 3.84487 16.9121 5.66003 17.4776C6.1082 16.8608 6.50791 16.2051 6.85224 15.5141C6.19644 15.2649 5.56832 14.9574 4.97482 14.6004C5.13227 14.4837 5.28628 14.3618 5.43508 14.2363C9.05501 15.9294 12.9882 15.9294 16.5648 14.2363C16.7154 14.3618 16.8694 14.4837 17.0251 14.6004C16.4299 14.9591 15.8 15.2666 15.1442 15.5159C15.4885 16.2051 15.8865 16.8626 16.3364 17.4794C18.1533 16.9138 20.0014 16.0496 21.9065 14.6251C22.3633 9.78789 21.1261 5.59397 18.6361 1.87549ZM7.34541 12.0589C6.25874 12.0589 5.36759 11.0445 5.36759 9.80909C5.36759 8.57372 6.23972 7.5575 7.34541 7.5575C8.45114 7.5575 9.34226 8.57194 9.32323 9.80909C9.32495 11.0445 8.45114 12.0589 7.34541 12.0589ZM14.6545 12.0589C13.5678 12.0589 12.6767 11.0445 12.6767 9.80909C12.6767 8.57372 13.5488 7.5575 14.6545 7.5575C15.7602 7.5575 16.6514 8.57194 16.6323 9.80909C16.6323 11.0445 15.7602 12.0589 14.6545 12.0589Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-section">
            Copyright &copy; {currentYear} TonMeet Video Communications, Inc.{" "}
            <span>All rights reserved</span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default DefaultFooter;
