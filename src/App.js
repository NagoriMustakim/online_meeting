import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/animate.min.css";
import "App.scss";
import "../src/assets/css/header.scss";
import "../src/assets/css/style.scss";

import PublicRoute from "./views/Routing/PublicRoute";
import HomePage from "./views/Client/Dashboard";
import PricingPage from "./views/Client/Pricing";
import ProfilePage from "./views/Client/Profile";
import SignInPage from "./views/Client/AuthSignIn";
import SignUpPage from "./views/Client/AuthSignUp";
import ScanPage from "./views/Client/Scan";
import DownloadPage from "./views/Client/Download";
import MeetingsPage from "./views/Client/Meetings";
import MeetingsDetailPage from "./views/Client/MeetingsDetail";
import AboutUsPage from "./views/Client/AboutUs";
import PrivacyPolicy from "views/Client/PrivacyPolicy/index";
import TermsOfService from "views/Client/TermsOfService/index";
import LaunchMeeting from "views/Client/LaunchMeeting/index";

import { GoogleOAuthProvider } from "@react-oauth/google";
import MetaMask from "views/Client/Metamask/index";
import TrustWallet from "views/Client/TrustWallet/index";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const clientID =
    "186012288007-d6knqmucj48oaha3c6uk0banb3fbg6u8.apps.googleusercontent.com";

  const userEmail = JSON.parse(localStorage.getItem("email"));

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientID}>
        <Routes>
          <Route element={<PublicRoute />}>
            {userEmail ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/scan" element={<ScanPage />} />
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/meetings" element={<MeetingsPage />} />
                <Route path="/metamask" element={<MetaMask/>}/>
                <Route path="/trustwallet" element={<TrustWallet/>}/>
                <Route
                  path="/meetings-detail"
                  element={<MeetingsDetailPage />}
                />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/temps-of-service" element={<TermsOfService />} />
                <Route path="/j/:meeting_id" element={<LaunchMeeting />} />
              </>
            ) : (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/scan" element={<ScanPage />} />
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/meetings" element={<MeetingsPage />} />
                <Route path="/metamask" element={<MetaMask/>}/>
                <Route path="/trustwallet" element={<TrustWallet/>}/>
                <Route
                  path="/meetings-detail"
                  element={<MeetingsDetailPage />}
                />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/temps-of-service" element={<TermsOfService />} />
                <Route path="/j/:meeting_id" element={<LaunchMeeting />} />
              </>
            )}
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
