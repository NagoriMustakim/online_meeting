import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Logo from "assets/images/logo.svg";

const Header2 = () => {
  return (
    <>
      <header className={`ZataHub-header`}>
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <Image src={Logo} alt="ZataHub" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header2;
