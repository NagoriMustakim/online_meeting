import React, { useState } from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";

import Layout from "../Layout";

const Scan = () => {
  const [getBusinessAdress, setGetBusinessAdress] = useState("");
  const [activeButton, setActiveButton] = useState(true);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setGetBusinessAdress(inputValue);

    e.target.setCustomValidity("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Invalid address");
    } else if (!emailRegex.test(inputValue)) {
      e.target.setCustomValidity("Invalid address");
    } else {
      e.target.setCustomValidity("");
    }

    if (inputValue !== "") {
      setActiveButton(false);
    }
    if (inputValue === "") {
      setActiveButton(true);
    }
  };

  const sendBusinessAddress = () => {
    localStorage.setItem("businessAddress", JSON.stringify(getBusinessAdress));
  };

  return (
    <Layout>
      <InnerBanner
        SmallTitle="Scan for"
        Title="Please enter business address"
      />
      <section className="scan-page">
        <div className="white-box overlay-banner">
          <form>
            <div className="form-group">
              <div className="email-input">
                <div className="icon">
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.666 0.666016H7.33268C3.33268 0.666016 0.666016 2.66602 0.666016 7.33268V16.666C0.666016 21.3327 3.33268 23.3327 7.33268 23.3327H20.666C24.666 23.3327 27.3327 21.3327 27.3327 16.666V7.33268C27.3327 2.66602 24.666 0.666016 20.666 0.666016ZM21.2927 8.78602L17.1193 12.1193C16.2393 12.826 15.1193 13.1727 13.9993 13.1727C12.8793 13.1727 11.746 12.826 10.8793 12.1193L6.70602 8.78602C6.27935 8.43935 6.21268 7.79935 6.54602 7.37268C6.89268 6.94602 7.51935 6.86602 7.94602 7.21268L12.1193 10.546C13.1327 11.3593 14.8527 11.3593 15.866 10.546L20.0394 7.21268C20.466 6.86602 21.106 6.93268 21.4393 7.37268C21.786 7.79935 21.7193 8.43935 21.2927 8.78602Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="emailInput"
                  className="form-control"
                  value={getBusinessAdress}
                  placeholder="Enter Business Address"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
            <button
              type="scan"
              className="btn w-100"
              disabled={activeButton}
              onClick={sendBusinessAddress}
            >
              Scan
            </button>
          </form>

          <p>
            All meetings at TonMeet will be summary by Chat GPT 4.0 and publish
            to Harmony main net.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Scan;
