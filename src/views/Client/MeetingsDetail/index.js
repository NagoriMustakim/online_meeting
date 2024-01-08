import React from "react";
import InnerBanner from "views/Components/Comman/InnerBanner";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import PmImage from "assets/images/pm.png";
import MeetingAttendProfile1 from "assets/images/meeting-attend-1.png";
import MeetingAttendProfile2 from "assets/images/meeting-attend-2.png";
import MeetingAttendProfile3 from "assets/images/meeting-attend-3.png";
import MeetingAttendProfile4 from "assets/images/meeting-attend-4.png";
import MeetingAttendProfile5 from "assets/images/meeting-attend-5.png";
import Layout from "../Layout";

const MeetingsDetail = () => {
  return (
    <Layout>
      <InnerBanner
        SmallTitle="2 minutes ago"
        Title="Feedback and Suggestions for Improving Your Project"
        CustomClass="meetings-detail-banner"
      />

      <section className="meetings-detail-section">
        <Container>
          <div className="meetings-card">
            <div className="meeting-detail-message">
              <label>Description</label>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release.{" "}
                <Link to="">[More]</Link>
              </p>
            </div>
            <div className="meetings-message-thread">
              <ul>
                <li>
                  <div className="profile-icon">
                    <Image src={MeetingAttendProfile1} alt="Name" />
                  </div>
                  <div className="message-profile-detail">
                    <div className="name-date-time">
                      <h3>Ann Gray</h3>
                      <span>Yesterday 3:25 PM</span>
                    </div>
                    <p>
                      Hey folks, please check your emails. I have shared you the
                      slide.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="profile-icon">
                    <Image src={MeetingAttendProfile4} alt="Name" />
                  </div>
                  <div className="message-profile-detail">
                    <div className="name-date-time">
                      <h3>Jeffrey Clark</h3>
                      <span>Yesterday 3:25 PM</span>
                    </div>
                    <p>
                      Thank you, Ann, I realy like the slide. Are we going to
                      use it for the meeting tomorrow?
                    </p>
                  </div>
                </li>
                <li>
                  <div className="profile-icon">
                    <Image src={MeetingAttendProfile2} alt="Name" />
                  </div>
                  <div className="message-profile-detail">
                    <div className="name-date-time">
                      <h3>Adam Lee</h3>
                      <span>Yesterday 3:25 PM</span>
                    </div>
                    <p>
                      Yes, we are going to use this slide. But we will have only
                      5 minutes to present it.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="profile-icon">
                    <Image src={MeetingAttendProfile1} alt="Name" />
                  </div>
                  <div className="message-profile-detail">
                    <div className="name-date-time">
                      <h3>Ann Gray</h3>
                      <span>Yesterday 3:25 PM</span>
                    </div>
                    <p>
                      Hey folks, please check your emails. I have shared you the
                      slide.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="profile-icon">
                    <Image src={MeetingAttendProfile3} alt="Name" />
                  </div>
                  <div className="message-profile-detail">
                    <div className="name-date-time">
                      <h3>Jeffrey Clark</h3>
                      <span>Yesterday 3:25 PM</span>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="profile-icon">
                    <Image src={MeetingAttendProfile5} alt="Name" />
                  </div>
                  <div className="message-profile-detail">
                    <div className="name-date-time">
                      <h3>Jeffrey Clark</h3>
                      <span>Yesterday 3:25 PM</span>
                    </div>
                    <p>
                      Thank you, Ann, I realy like the slide. Are we going to
                      use it for the meeting tomorrow?
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="meetings-detail">
              <Row>
                <Col lg="2" md="3" className="col-6">
                  <label>Organizer</label>
                  <div className="profile-detail">
                    <Image src={PmImage} alt="pm" />
                    <span>Michal L.</span>
                  </div>
                </Col>
                <Col lg="2" md="4" className="col-6">
                  <label>Durations</label>
                  <div className="profile-detail">
                    <p>2 hours, 30 minutes</p>
                  </div>
                </Col>
                <Col lg="8" md="5" className="mmt-3">
                  <label>attendees (6) </label>
                  <div className="meeting-attend-profile">
                    <Image src={MeetingAttendProfile1} alt="pm" />
                    <Image src={MeetingAttendProfile2} alt="pm" />
                    <Image src={MeetingAttendProfile3} alt="pm" />
                    <Image src={MeetingAttendProfile4} alt="pm" />
                    <Image src={MeetingAttendProfile5} alt="pm" />
                    <span>+1</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default MeetingsDetail;
