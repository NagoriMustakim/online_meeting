import React, { useState } from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import GoogleIcon from "assets/images/icons/google-icon.png";
import IosIcon from "assets/images/icons/ios-icon.png";
import MetamaskIcon from "assets/images/icons/metamaskIcon.svg"
import TrustWalletIcon from 'assets/images/icons/trust_wallet.svg'

import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const Signin = () => {
  const navigate = useNavigate();

  const loginWithMetamask = () => {
    window.open('/metamask', 'target=_blank', `window=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,height=580px,width=350px,top=0,left=${window.screen.width - 300}`)
  }

  const loginWithTrustWallet = () => {
    window.open('/trustwallet', 'target=_blank', `window=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=600px,width=375px,top=0,left=${window.screen.width - 300}`)
  }
  return (
    <Layout>
      <InnerBanner SmallTitle="Login" Title="Login in to your <br /> account" />
      <section className="login-detail">
        <div className="white-box overlay-banner">
          <div className="buttons-auth">
            <button onClick={() => loginWithMetamask()} className="btn outline-btn">
              <Image src={MetamaskIcon} alt="MetaMask" />
              Login with Metamask
            </button>

            <button
              className="btn outline-btn"
              type="button"
              onClick={loginWithTrustWallet}
            >
              <Image src={TrustWalletIcon} alt="Trust Wallet" />
              Login with Trust Wallet
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signin;
