import React from "react";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button } from "react-bootstrap";

import Footer2 from "../Layout/Footer2";
import Header2 from "../Layout/Header2";

const LaunchMeeting = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [meetingId, setMeetingId] = React.useState(null);

  React.useEffect(() => {
    const meeting_id = params["meeting_id"];

    if (!meeting_id) {
      navigate("/404");
    }    
    setMeetingId(meeting_id);

    const pwd = searchParams.get("pwd");
    console.log({ pwd });

    if (!pwd) {
      navigate("/404");
    }
  }, []);

  React.useEffect(()=>{
    const setlogo = ()=>{
    const logoElement = document.querySelector('link[rel="icon"]');
    if (logoElement) {
      logoElement.href = window.location.origin+ '/favicon.svg';
    }
  }
  setlogo();
  }, [])

  const LaunchMeetingHandler = () => {
    alert("TonMeet is not yet installed on your computer.")
  }
  return (
    <React.Fragment>
      <div className="main-layout">
        <Header2 />

        <section className="launch-page pt-100">
          <div className="launch-meeting-section">
            <h2>
              Once you installed <b>TonMeet</b> client, click Launch Meeting
              <span>
                {" "}
                and then enter id <b>{meetingId ?? "..."}</b>
              </span>
            </h2>

            <Button className="justify-content-center mt-5" onClick={LaunchMeetingHandler}>
              Launch Meeting
            </Button>

            <div className="download-zata-card">
              Don't have TonMeet Client installed?
              <Link to="/download" className="link-download-now mt-4">
                Download Now
              </Link>
            </div>
          </div>
        </section>

        <Footer2 />
      </div>
    </React.Fragment>
  );
};

export default LaunchMeeting;
