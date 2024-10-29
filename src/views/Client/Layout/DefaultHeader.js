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
              <Image src={Logo} alt="TonMeet" />
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
                <Link to="/signup" className="btn">
                  Sign Up
                </Link>
              </div>
            )}

            {/* <div className="after-login-menu">
              <div className="notifications">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0206 2.91016C8.71058 2.91016 6.02058 5.60016 6.02058 8.91016V11.8002C6.02058 12.4102 5.76058 13.3402 5.45058 13.8602L4.30058 15.7702C3.59058 16.9502 4.08058 18.2602 5.38058 18.7002C9.69058 20.1402 14.3406 20.1402 18.6506 18.7002C19.8606 18.3002 20.3906 16.8702 19.7306 15.7702L18.5806 13.8602C18.2806 13.3402 18.0206 12.4102 18.0206 11.8002V8.91016C18.0206 5.61016 15.3206 2.91016 12.0206 2.91016Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13.8699 3.19945C13.5599 3.10945 13.2399 3.03945 12.9099 2.99945C11.9499 2.87945 11.0299 2.94945 10.1699 3.19945C10.4599 2.45945 11.1799 1.93945 12.0199 1.93945C12.8599 1.93945 13.5799 2.45945 13.8699 3.19945Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.0195 19.0605C15.0195 20.7105 13.6695 22.0605 12.0195 22.0605C11.1995 22.0605 10.4395 21.7205 9.89953 21.1805C9.35953 20.6405 9.01953 19.8805 9.01953 19.0605"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </Link>
              </div>
              <div className="profile-detail">
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    <div className="profile-image">
                      <Image src={ProfileImage} alt="Profile Name" />
                    </div>
                    <label>John Doe</label>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default DefaultHeader;
