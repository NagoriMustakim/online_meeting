import React, { useState } from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileImage2 from "assets/images/profile-image2.png";

import Layout from "../Layout";

const Pricing = () => {
  const profileImg = JSON.parse(localStorage.getItem("avatar"));
  const userName = JSON.parse(localStorage.getItem("name"));
  const userEmail = JSON.parse(localStorage.getItem("email"));

  return (
    <Layout>
      <InnerBanner />
      <section className="profile-page">
        <Container>
          <div className="white-box">
            <div className="profile-description">
              <div className="edit-profile-image">
                <img
                  src={profileImg ? profileImg : ProfileImage2}
                  alt=""
                  className="full-width-image"
                />
                <div className="camera-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3433 3.65696C11.9018 3.65696 11.4964 3.40362 11.2938 3.01277L10.7726 1.96324C10.4397 1.30458 9.57109 0.761719 8.8328 0.761719H7.17528C6.42975 0.761719 5.56118 1.30458 5.22823 1.96324L4.70709 3.01277C4.50442 3.40362 4.09909 3.65696 3.65756 3.65696C2.0869 3.65696 0.841943 4.98153 0.943276 6.54496L1.31966 12.5236C1.40651 14.0147 2.20994 15.2379 4.20766 15.2379H11.7932C13.7909 15.2379 14.5871 14.0147 14.6812 12.5236L15.0576 6.54496C15.1589 4.98153 13.9139 3.65696 12.3433 3.65696ZM6.9147 4.56172H9.08613C9.3829 4.56172 9.62899 4.80781 9.62899 5.10458C9.62899 5.40134 9.3829 5.64743 9.08613 5.64743H6.9147C6.61794 5.64743 6.37185 5.40134 6.37185 5.10458C6.37185 4.80781 6.61794 4.56172 6.9147 4.56172ZM8.00042 12.4295C6.65413 12.4295 5.55394 11.3366 5.55394 9.98305C5.55394 8.62953 6.6469 7.53658 8.00042 7.53658C9.35394 7.53658 10.4469 8.62953 10.4469 9.98305C10.4469 11.3366 9.34671 12.4295 8.00042 12.4295Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="detail-pr">
                <div className="user-name">
                  <h2>{userName}</h2>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9496 11.4242L23.2496 9.44922C22.9246 9.07422 22.6621 8.37422 22.6621 7.87422V5.74922C22.6621 4.42422 21.5746 3.33672 20.2496 3.33672H18.1246C17.6371 3.33672 16.9246 3.07422 16.5496 2.74922L14.5746 1.04922C13.7121 0.311719 12.2996 0.311719 11.4246 1.04922L9.46211 2.76172C9.08711 3.07422 8.37461 3.33672 7.88711 3.33672H5.72461C4.39961 3.33672 3.31211 4.42422 3.31211 5.74922V7.88672C3.31211 8.37422 3.04961 9.07422 2.73711 9.44922L1.04961 11.4367C0.324609 12.2992 0.324609 13.6992 1.04961 14.5617L2.73711 16.5492C3.04961 16.9242 3.31211 17.6242 3.31211 18.1117V20.2492C3.31211 21.5742 4.39961 22.6617 5.72461 22.6617H7.88711C8.37461 22.6617 9.08711 22.9242 9.46211 23.2492L11.4371 24.9492C12.2996 25.6867 13.7121 25.6867 14.5871 24.9492L16.5621 23.2492C16.9371 22.9242 17.6371 22.6617 18.1371 22.6617H20.2621C21.5871 22.6617 22.6746 21.5742 22.6746 20.2492V18.1242C22.6746 17.6367 22.9371 16.9242 23.2621 16.5492L24.9621 14.5742C25.6871 13.7117 25.6871 12.2867 24.9496 11.4242ZM18.1996 10.6367L12.1621 16.6742C11.9871 16.8492 11.7496 16.9492 11.4996 16.9492C11.2496 16.9492 11.0121 16.8492 10.8371 16.6742L7.81211 13.6492C7.44961 13.2867 7.44961 12.6867 7.81211 12.3242C8.17461 11.9617 8.77461 11.9617 9.13711 12.3242L11.4996 14.6867L16.8746 9.31172C17.2371 8.94922 17.8371 8.94922 18.1996 9.31172C18.5621 9.67422 18.5621 10.2742 18.1996 10.6367Z"
                      fill="#3FCC28"
                    />
                  </svg>
                </div>
                <div className="user-contact-details">
                  <p>
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6191 7.45C16.5691 2.83 12.5391 0.75 8.99912 0.75C8.99912 0.75 8.99912 0.75 8.98912 0.75C5.45912 0.75 1.41912 2.82 0.369119 7.44C-0.800881 12.6 2.35912 16.97 5.21912 19.72C6.27912 20.74 7.63912 21.25 8.99912 21.25C10.3591 21.25 11.7191 20.74 12.7691 19.72C15.6291 16.97 18.7891 12.61 17.6191 7.45ZM8.99912 12.46C7.25912 12.46 5.84912 11.05 5.84912 9.31C5.84912 7.57 7.25912 6.16 8.99912 6.16C10.7391 6.16 12.1491 7.57 12.1491 9.31C12.1491 11.05 10.7391 12.46 8.99912 12.46Z"
                        fill="#736D83"
                      />
                    </svg>
                    New York, USA
                  </p>
                  <p>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0.5H5C2 0.5 0 2 0 5.5V12.5C0 16 2 17.5 5 17.5H15C18 17.5 20 16 20 12.5V5.5C20 2 18 0.5 15 0.5ZM15.47 6.59L12.34 9.09C11.68 9.62 10.84 9.88 10 9.88C9.16 9.88 8.31 9.62 7.66 9.09L4.53 6.59C4.21 6.33 4.16 5.85 4.41 5.53C4.67 5.21 5.14 5.15 5.46 5.41L8.59 7.91C9.35 8.52 10.64 8.52 11.4 7.91L14.53 5.41C14.85 5.15 15.33 5.2 15.58 5.53C15.84 5.85 15.79 6.33 15.47 6.59Z"
                        fill="#736D83"
                      />
                    </svg>
                    {userEmail}
                  </p>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here.
                </p>
              </div>
            </div>

            <div className="personal-details">
              <h3>Personal Information</h3>
              <Link to="/" className="btn">
                Edit
              </Link>

              <div className="personal-details-row">
                <label>Phone</label>
                <p>Not set</p>
              </div>
              <div className="personal-details-row">
                <label>Location</label>
                <p>New York, USA</p>
              </div>
              <div className="personal-details-row">
                <label>Language</label>
                <p>English</p>
              </div>
              <div className="personal-details-row">
                <label>Date Of Birth</label>
                <p>10/30/2023</p>
              </div>
              <div className="personal-details-row">
                <label>Country</label>
                <p>India</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Pricing;
