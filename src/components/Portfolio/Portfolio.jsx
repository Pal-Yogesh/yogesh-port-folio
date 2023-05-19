import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Vote from "../../img/pro.png";
import portfolio from "../../img/portfolio.png";
import todo from "../../img/todo.png";
import GZ from "../../img/gz.png";
import blog from "../../img/blog.png";
import quote from "../../img/quote.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Vote} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GZ} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={blog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={quote} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
