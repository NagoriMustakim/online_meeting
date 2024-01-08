import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import Team1 from "./team1";
import Team2 from "./team2";
import Team3 from "./team3";
import Team4 from "./team4";
import Team5 from "./team5";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const AllTeam = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);
  return (
    <>
      {width > 991 ? (
        <>
          <Col lg="4" md="6">
            <Team1 />
          </Col>
          <Col lg="4" md="6">
            <Team2 />
          </Col>
          <Col lg="4" md="6">
            <Team3 />
          </Col>
          <Col lg="4" md="6">
            <Team4 />
          </Col>
          <Col lg="4" md="6">
            <Team5 />
          </Col>
        </>
      ) : (
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="team-slider"
        >
          <SwiperSlide>
            <Team1 />
          </SwiperSlide>
          <SwiperSlide>
            <Team2 />
          </SwiperSlide>
          <SwiperSlide>
            <Team3 />
          </SwiperSlide>
          <SwiperSlide>
            <Team4 />
          </SwiperSlide>
          <SwiperSlide>
            <Team5 />
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default AllTeam;
