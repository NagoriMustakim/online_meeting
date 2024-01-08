import React from "react";
import { Container, Image } from "react-bootstrap";
import LineCurve from "assets/images/icons/line-curve-for-banner.svg";
import Circles from "assets/images/icons/circles-icon.svg";

const InnerBanner = ({ Title, SmallTitle, CustomClass }) => {
    const AddBrHtml = (Title) => {
        return { __html: Title };
      };
  return (
    <>
      <section className={`inner-banner-section ${CustomClass}`}>
        <Image src={LineCurve} alt="Line Curve" className="left-curve-line" />
        <Image src={Circles} alt="Line Curve" className="circle-icon" />
        <Container>
          <div className="inner-banner-title">
          {SmallTitle ? 
            <div className="small-title">{SmallTitle}</div>
            : ""
          }
            <h1 dangerouslySetInnerHTML={AddBrHtml(Title)}></h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default InnerBanner;
