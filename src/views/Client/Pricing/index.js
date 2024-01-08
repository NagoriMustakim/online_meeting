import React, { useState } from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import cross from "../../../assets/images/icons/cross.svg";

import Layout from "../Layout";

import { useGoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const navigate = useNavigate();

  const togglePlan = () => {
    setIsMonthlyPlan((prevPlan) => !prevPlan);
  };

  const register = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: new Headers({
          Authorization: "Bearer " + tokenResponse.access_token,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("avatar", JSON.stringify(data.picture));
          localStorage.setItem("name", JSON.stringify(data.name));
          localStorage.setItem("email", JSON.stringify(data.email));
          if (data) {
            setTimeout(() => {
              navigate("/profile");
            }, 500);
          }
        });
    },
  });

  return (
    <Layout>
      <InnerBanner
        CustomClass="pricing-banner"
        Title="Business, Financial, Technology <br /> and Healthcare"
        SmallTitle="Plans & Pricing for"
      />

      <section className="repeat-section pricing-plan-section">
        <Container>
          <div className="section-title text-center">
            <div className="small-title">Pricing</div>
            <h2>Pricing Plans</h2>
            <p>
              First 30 days absolutely free for any plan, no credit card
              required to get started.
            </p>
          </div>
          <div className="toggle-switch-btn">
            <span className={isMonthlyPlan ? "" : "active"}>Monthly</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isMonthlyPlan}
                onChange={togglePlan}
              />
              <span className="slider round"></span>
            </label>
            <span className={isMonthlyPlan ? "active" : ""}>Yearly</span>
          </div>
          <Row className="align-items-end">
            <Col md="6">
              <div className="plan-box basic-plan">
                <h3>Basic</h3>
                <p>Free</p>
                <button onClick={() => register()} className="btn outline-btn">
                  Sign up
                </button>
                <ul>
                  <li>
                    <b>Meetings</b> Up to 2 hours per meeting
                  </li>
                  <li>
                    <b>10 meetings</b> Per week
                  </li>
                  <li>
                    <b>ChatGPT</b> to summary the meeting
                  </li>
                  <li>
                    <b>Team Chat</b>
                  </li>
                  <li>
                    <b>Mail & Calendar </b>
                  </li>
                  <li>
                    <b>Fast</b>
                  </li>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <img src={cross} alt="" style={{ width: "10px" }} />
                      <span
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: 600,
                          color: "#171e26",
                          marginLeft: "17px",
                        }}
                      >
                        Turn on caption
                      </span>
                    </div>

                    <div style={{ paddingTop: 15 }}>
                      <img src={cross} alt="" style={{ width: "10px" }} />
                      <span
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: 600,
                          color: "#171e26",
                          marginLeft: "17px",
                        }}
                      >
                        Setting background in video call
                      </span>
                    </div>
                  </div>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div className="plan-box premium-plan">
                {isMonthlyPlan ? (
                  <p className="sale-para">
                    $10 savings monthly - SAVE UP TO 35%
                  </p>
                ) : (
                  <p className="sale-para"></p>
                )}
                <h3>Premium </h3>
                {isMonthlyPlan ? (
                  <p>
                    $228 <span> Yearly</span>
                  </p>
                ) : (
                  <p>
                    $29 <span> Monthly</span>
                  </p>
                )}
                <Link to="/" className="btn">
                  Buy Now
                </Link>
                <ul>
                  <li>
                    <b>Meetings</b> Unlimited hours
                  </li>
                  <li>
                    <b>Unlimited Meeting</b> Per week
                  </li>
                  <li>
                    <b>ChatGPT</b> to summary the meeting
                  </li>
                  <li>
                    <b>Team Chat</b>
                  </li>
                  <li>
                    <b>Mail & Calendar </b>
                  </li>
                  <li>
                    <b>Fast</b>
                  </li>
                  <li>
                    <b>Turn on caption</b>
                  </li>
                  <li>
                    <b>Setting background in video call</b>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Pricing;
