import React from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import GoogleIcon from "assets/images/icons/google-icon.png";
import IosIcon from "assets/images/icons/ios-icon.png";

import Layout from "../Layout";
import { useGoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <InnerBanner
        SmallTitle="Sign up"
        Title="A secure online <br /> meeting platform"
      />
      <section className="login-detail">
        <div className="white-box overlay-banner">
          <div className="buttons-auth">
            <button onClick={() => {alert("Please download the app and then sign up through the app")}} className="btn outline-btn">
              <Image src={GoogleIcon} alt="Google" />
              Sign up with Google
            </button>

            <button
              className="btn outline-btn"
              type="button"
              onClick={() => {alert("Please download the app and then sign up through the app")}}
            >
              <Image src={IosIcon} alt="Google" />
              Login with Apple
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
                      Sign Up with Apple
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
          Already have an account? <Link to="/signin">Login</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
