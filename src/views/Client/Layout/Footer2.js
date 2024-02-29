import React from "react";
import { Container } from "react-bootstrap";
import "../../../assets/css/footer.scss";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section">
        <Container>
          <div className="copyright-section">
            Copyright &copy; {currentYear} ZataHub Video Communications, Inc.{" "}
            <span>All rights reserved</span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer2;
