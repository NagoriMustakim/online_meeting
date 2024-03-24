import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Image, Dropdown } from "react-bootstrap";

import Logo from "assets/images/logo.svg";
import ProfileImage from "assets/images/profile-image.png";

import Notification from "../../../assets/images/icons/notification.svg";
import Down from "../../../assets/images/icons/arrow-down.svg";
import Logout from "../../../assets/images/icons/logout.svg";

const DefaultHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [isNavOpen]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop >= 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const userEmail = JSON.parse(localStorage.getItem("email"));
  const profileImg = JSON.parse(localStorage.getItem("avatar"));
  const userName = JSON.parse(localStorage.getItem("name"));

  const logoutHandler = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <>
      <header className={`ZataHub-header ${isSticky ? "is-sticky" : ""}`}>
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <Image src={Logo} alt="ZataHub" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={isNavOpen ? "toggle-btn active" : "toggle-btn"}
              type="button"
              aria-label="Toggle navigation"
            >
              {isNavOpen ? (
                <>
                  <span className="cross-bar"></span>
                  <span className="cross-bar"></span>
                </>
              ) : (
                <>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </>
              )}
            </button>

            <div className={isNavOpen ? "menu-list active" : "menu-list"}>
              <ul>
                {/* <li className="close-menu" onClick={toggleNavbar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.506"
                    height="22.506"
                    viewBox="0 0 22.506 22.506"
                  >
                    <path
                      d="M21.213,22.628,11.587,13,2.121,22.467A1,1,0,0,1,.707,21.053l9.466-9.466L.707,2.121A1,1,0,0,1,2.121.707l9.466,9.466L21.053.707a1,1,0,0,1,1.414,1.414L13,11.587l9.627,9.626a1,1,0,0,1-1.415,1.415Z"
                      transform="translate(-0.414 -0.414)"
                      fill="currentColor"
                    />
                  </svg>
                </li> */}
                <li className="sub-menu">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="sub-menu">
                  <NavLink to="/scan">Scan</NavLink>
                </li>
                <li className="sub-menu">
                  <NavLink to="/pricing">Pricing</NavLink>
                </li>

                <li className="sub-menu">
                  <NavLink to="/download">Download</NavLink>
                </li>
              </ul>
            </div>
            {userEmail ? (
              <div className="right-btn">
                <div style={{ paddingRight: 30 }}>
                  <img
                    src={Notification}
                    style={{ width: 24, height: 24 }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#171E26",
                    justifyContent: "space-between",
                    width: "150px",
                  }}
                >
                  <div>
                    <Link to="/profile">
                      <img
                        src={profileImg}
                        style={{ width: 48, height: 48, borderRadius: 100 }}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="dropdown">
                    <div
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "80px",
                        }}
                      >
                        <span style={{ fontSize: "16px" }}>{userName}</span>
                        <img src={Down} alt="" />
                      </div>
                    </div>
                    <ul className="dropdown-menu">
                      <div
                        style={{
                          display: "flex",
                          cursor: "pointer",
                          alignItems: "center",
                        }}
                        onClick={() => logoutHandler()}
                      >
                        <li>
                          <span
                            className="dropdown-item"
                            style={{ fontSize: "14px" }}
                          >
                            Log Out
                          </span>
                        </li>
                        <div>
                          <img src={Logout} alt="" />
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="right-btn">
                <Link to="/signin" className="btn outline-btn">
                  Sign In
                </Link>                
              </div>
            )}           
          </nav>
        </div>
      </header>
    </>
  );
};

export default DefaultHeader;
