import React from "react";

import Layout from "../Layout";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <InnerBanner
        Title="Privacy Policy"
        CustomClass="privacy-section-banner"
        SmallTitle="Last updated: November 24, 2023"
      />

      <section className="privacy-policy-section">
        <Container>
          <div className="privacy-policy-card">
            <ol>
              <li>
                <h3>Introduction</h3>
                <p className="privacy-policy-introduction">
                  Welcome to ZATAHUB, a Virtual Meeting Platform For Online
                  Conference Video. This Privacy Policy describes the personal
                  data we collect and/or process to provide products and
                  services offered directly by ZataHub Video Communications,
                  Inc.
                </p>
              </li>
              <li>
                <h3>Information We Collect</h3>
                <ul>
                  <li>
                    Personal Information: We may collect personal details like
                    your name, email address, billing information, and profile
                    information when you register or use our services.
                  </li>
                  <li>
                    Meeting and Chat Data: We may store information related to
                    your meetings, chats, files shared, recordings, and other
                    content generated during your use of our services.
                  </li>
                  <li>
                    Device and Usage Information: We collect information about
                    the devices you use to access our platform, such as IP
                    addresses, device IDs, browser information, and usage logs.
                  </li>
                </ul>
              </li>
              <li>
                <h3>How We Use Your Information</h3>
                <ul>
                  <li>
                    Providing Services: To deliver our virtual meeting, video
                    conferencing, chat, and file-sharing services, and to
                    personalize your user experience.
                  </li>
                  <li>
                    Security Measures: Implementing security protocols like
                    end-to-end encryption to safeguard your communications and
                    data shared within our platform.
                  </li>
                  <li>
                    Improvement and Analytics: Analyzing usage patterns,
                    troubleshooting issues, and enhancing our services based on
                    user feedback.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Data Sharing and Third-Party Integrations</h3>
                <ul>
                  <li>
                    Third-Party Services: We may integrate with third-party
                    services to enhance your experience. Your data shared
                    through these integrations will be subject to their
                    respective privacy policies.
                  </li>
                </ul>
              </li>
              <li>
                <h3>User Conduct and Content</h3>
                <ul>
                  <li>
                    User Responsibilities: Users are responsible for their
                    conduct during meetings, chats, and content shared. Abusive
                    or inappropriate behavior may result in the termination of
                    access to our services.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Data Security and Compliance</h3>
                <ul>
                  <li>
                    Security Measures: We employ industry-standard security
                    measures to protect your data and communications from
                    unauthorized access or disclosure.
                  </li>
                  <li>
                    Regulatory Compliance: We comply with relevant data
                    protection laws and regulations applicable to the regions in
                    which we operate, including GDPR, CCPA, and others.
                  </li>
                </ul>
              </li>
              <li>
                <h3>User Control and Data Deletion</h3>
                <ul>
                  <li>
                    Security Measures: We employ industry-standard security
                    measures to protect your data and communications from
                    unauthorized access or disclosure.
                  </li>
                  <li>
                    Regulatory Compliance: We comply with relevant data
                    protection laws and regulations applicable to the regions in
                    which we operate, including GDPR, CCPA, and others.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Changes to This Policy</h3>
                <ul>
                  <li>
                    We reserve the right to modify this Privacy Policy. Any
                    changes will be communicated through our website or via
                    direct communication to users.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
