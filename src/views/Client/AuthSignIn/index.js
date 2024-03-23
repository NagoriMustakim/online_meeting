import React, { useState } from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import GoogleIcon from "assets/images/icons/google-icon.png";
import IosIcon from "assets/images/icons/ios-icon.png";

import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const Signin = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
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
      <InnerBanner SmallTitle="Login" Title="Login in to your <br /> account" />
      <section className="login-detail">
        <div className="white-box overlay-banner">
          <div className="buttons-auth">
            <button onClick={() => login()} className="btn outline-btn">
              <Image src={GoogleIcon} alt="Google" />
            Login with Metamask
            </button>

            <button
              className="btn outline-btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <Image src={IosIcon} alt="Google" />
            Login with Trust Wallet
            </button>

            <div class="custom-backdrop" id="customBackdrop"></div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="5"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Login with Apple
                    </h1>
                  </div>
                  <div class="modal-body">This feature will coming soon</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      style={{ height: "40px" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-signup-para">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Signin;
